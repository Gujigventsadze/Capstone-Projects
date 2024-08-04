import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 4000;

const posts = [
    {
        id: 1,
        postTitle: 'Whatever',
        postBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pharetra id purus nec luctus. Quisque interdum eros elit, sit amet hendrerit tellus commodo ut. Aliquam tincidunt condimentum tortor a laoreet. Praesent non tempor leo. Suspendisse accumsan cursus odio sed molestie. Ut sit amet euismod mi. Donec tincidunt elit eget est vehicula dignissim. Aenean accumsan tortor a sodales accumsan. Nulla ultrices urna elit, ut sodales libero aliquet ut. Aenean tempus sem quam, quis ultricies velit euismod sed. Sed sed mattis massa. Mauris eu lectus mauris. Vestibulum eros eros, tincidunt vel ex nec, vestibulum lobortis leo. Ut imperdiet velit ut ante tincidunt, quis egestas felis vulputate. Duis gravida lorem justo, eget iaculis lorem porttitor et. Curabitur ex tellus, mollis eu pharetra non, dapibus quis urna.',
        postAuthor: 'Elguja Gventsadze',
        postDate: new Date()
    }
]

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/posts', (req, res) => {
    try {
        res.send(JSON.stringify(posts));
    }
    catch(error) {
        res.status(500);
    }
})

app.post('/send', (req, res) => {
    const receivedData = req.body;
    console.log(receivedData);
    const newPost = {
        id: posts.length + 1,
        postTitle: receivedData.title,
        postBody: receivedData.body,
        postAuthor: receivedData.author,
        postDate: new Date()
    }
    posts.push(newPost);
    res.send(posts);
})

app.post('/getpost', (req, res) => {
    const id = parseInt(req.body.id);
    const searchIndex = posts.findIndex((post) => post.id === id);
    res.send(posts[searchIndex]);
})

app.patch('/patchpost', (req, res) => {
    const id = parseInt(req.query.id);
    const newBody = req.body.body;
    const searchIndex = posts.findIndex((post) => post.id === id);
    const existingPost = posts[searchIndex];
    const newPost = {
        id: id,
        postTitle: newBody.title || existingPost.title,
        postBody: newBody.body || existingPost.body,
        postAuthor: newBody.author || existingPost.author,
        postDate: new Date()
    }
    posts[searchIndex] = newPost;
    console.log(req.body.body.title);
    res.send(posts);
})


app.delete('/delete', (req, res) => {
    const id = parseInt(req.query.id);
    const foundIndex = posts.findIndex((post) => post.id === id);
    posts.splice(foundIndex, 1);
    res.send(posts);
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})