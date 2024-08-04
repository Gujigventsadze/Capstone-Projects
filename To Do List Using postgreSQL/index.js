import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import { todo } from "node:test";

const app = express();
const port = 3000;
const db = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'ToDoList',
    password: 'Ottootto12345',
    port: 5432,
  });
db.connect();


async function getList() {
    try {
        const response = await db.query("SELECT * FROM to_do_list");
        const toDoArr = response.rows;
        return toDoArr;
    }   
    catch(error) {
        res.status(500);    
    }
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', async (req, res) => {
    try {
    const list = await getList();
    res.render('index.ejs', { list: list });
    }
    catch(error) {
        res.status(500);
    }
})

app.post('/add', async (req, res) => {
    try {
    await db.query("INSERT INTO to_do_list (todo) VALUES ($1)", [req.body.todo]);
    res.redirect('/');
    }
    catch(error) {
        res.status(500);
    }
})

app.post('/edit', async (req, res) => {
    try {
    const postId = req.body.id;
    const toDo = req.body.todo;
    db.query("UPDATE to_do_list SET todo = $1 WHERE id = $2", [toDo, postId]);
    res.redirect('/');
    }
    catch(error) {
        res.status(500);
    }
})

app.post('/delete', (req, res) => {
    try {
    const id = req.body.deleteItemId;
    db.query("DELETE FROM to_do_list WHERE id = $1", [id]);
    res.redirect('/');
    }
    catch(error) {
        res.status(500);
    }
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
} )