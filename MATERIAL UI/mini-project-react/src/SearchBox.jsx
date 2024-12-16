import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css";
import { useState } from 'react';
import { colors } from '@mui/material';



export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "ced3243897193685be1a3f356b8346e9";

    let getWeatherInfo = async () => {
        try {

            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_Like,
                weather: jsonResponse.weather[0].description,

            }
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };


    let hendelChange = (event) => {
        setCity(event.target.value);
    }

    let hendelSubmit = async (event) => {
        try {

            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
        } catch (err) {
            setError(true);
        };
    };
    return (
        <div className='SearchBox'>
            {/* <h3>Search for the weather</h3> */}
            <form onSubmit={hendelSubmit}>
                <TextField id="City" label="City Name" variant="outlined" required value={city}
                    onChange={hendelChange} />
                <br /><br />
                <Button variant="contained" type='submit' >
                    Search
                </Button>
                {error && <p style={{ color: "red" }}>No such place exists </p>}
            </form>
        </div>
    )
}