import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import session from "express-session"; // Import express-session

dotenv.config();
const saltRounds = 10;
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET || 'default_secret',
    resave: false,
    saveUninitialized: false,
}));

const db = new pg.Client({
    user: "postgres",
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432
});

db.connect(err => {
    if (err) {
        console.error('Connection error', err.stack);
    } else {
        console.log('Connected to the database');
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const response = await db.query("SELECT * FROM emailpass WHERE email = $1", [email]);
        if (response.rows.length > 0) {
            const user = response.rows[0];
            const storedPass = user.password;
            bcrypt.compare(password, storedPass, (err, result) => {
                if (err) {
                    return res.status(500).json({ message: 'Server Error' });
                } else if (result) {
                    // Optionally set session here
                    return res.status(200).json({ message: "Successful login" });
                } else {
                    return res.status(401).json({ message: "Wrong password" });
                }
            });
        } else {
            return res.status(404).json({ message: "No user found with that email" });
        }
    } catch (err) {
        return res.status(500).json({ message: "Error occurred", error: err });
    }
});

app.post("/register", async (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    try {
        const checkResult = await db.query("SELECT * FROM emailpass WHERE email = $1", [email]);
        if (checkResult.rows.length > 0) {
            return res.status(400).json({ message: 'Email already exists' });
        } else {
            bcrypt.hash(password, saltRounds, async (err, hash) => {
                if (err) {
                    return res.status(500).json({ message: 'Server Error' });
                } else {
                    await db.query("INSERT INTO emailpass (email, password) VALUES ($1, $2)", [email, hash]);
                    return res.status(200).json({ message: 'Registration successful' });
                }
            });
        }
    } catch (err) {
        return res.status(500).json({ message: 'Database error', error: err });
    }
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
