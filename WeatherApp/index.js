import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
const apiKey = "e083efe695c44f93923121627242607";
const API_url = "http://api.weatherapi.com/v1/current.json";
const defaultCity = "London";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/search', async (req, res) => {
    const cityName = req.body.cityName;
    try {
        const response = await axios.get(API_url + `?key=${apiKey}&` + `q=${cityName}`);
        const tempC = response.data.current.temp_c;
        const humidity = response.data.current.humidity;
        res.render('index.ejs', { cityName, tempC, humidity });
    }
    catch(error) {
        console.error(error.message);
        res.status(500).send('An error occurred while fetching the weather data.');
    }
})

app.get('/', async (req, res) => {
    try {
        const response = await axios.get(API_url + `?key=${apiKey}&` + `q=${defaultCity}`);
        const tempC = response.data.current.temp_c;
        const cityName = response.data.location.name;
        const humidity = response.data.current.humidity;
        res.render('index.ejs', { cityName, tempC, humidity });
    }
    catch(error) {
        console.error(error.message);
        res.status(500).send('An error occurred while fetching the weather data.');
    }
})



app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})