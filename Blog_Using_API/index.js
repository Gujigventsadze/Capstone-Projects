import express, { application } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_url = "http://localhost:4000/"

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/new', (req, res) => {
    try {
        res.render("modify.ejs");
    }
    catch(error) {
        res.status(500);
    }
})

app.post('/savepost', async (req, res) => {
    const post = req.body;
    const response = await axios.post(API_url + 'send', post);
    res.render('index.ejs', { post: response.data });
})

app.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const response = await axios.post(API_url + 'getpost', { id: id });
    res.render('modify.ejs', { post: response.data });
})


app.post('/editpost/:id', async (req, res) => {
    const id = req.params.id;
    const response = await axios.patch(API_url + 'patchpost', { body: req.body }, { params: { id: id } });
    res.render('index.ejs', { post: response.data });
})

app.post('/delete/:id', async (req, res) => {
    const id = req.params.id;
    const response = await axios.delete(API_url + 'delete', { 
        params: { id: id },
     });
    console.log(response.data);
    res.render('index.ejs', { post: response.data });
})


app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_url + 'posts');
        res.render('index.ejs', { post: response.data });
    }
    catch(error) {
        res.status(404);
    }
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})