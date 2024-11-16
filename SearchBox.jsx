import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
export default function SearchBox({updateInfo}){
    let [city , setCity] =useState("");
    let [error , setError]=useState(false);
    const API_URL="http://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="3bb74be9c1350d35f0f360622810d3ad";
    let getWeatherInfo = async()=>{
        try{
            let response =   await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    // console.log(jsonResponse);
    let result = {
        city:city ,
        temp : jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;

    }catch(err){
        throw err;
    }

    }
    
    let handleChange=(evt)=>{
        setCity(evt.target.value);
        
    }
    let handleSubmit= async (evt)=>{
        try{
            evt.preventDefault();
        console.log(city); 
        setCity("");
       let newInfo =  await getWeatherInfo();
        updateInfo(newInfo);
    }catch(err){
        setError(true);

    }

        }
        


    return(
        <div className='SearchBox'>
            <h2>Search Weather of a City</h2>
            <form onSubmit={handleSubmit}>
            <TextField
             id="city"
            label="City Name"
            variant="outlined"
            color='primary'
            value={city}
            onChange={handleChange}
            required/>
            <br /><br />
            <Button variant="contained" type='submit'>Search</Button>
            </form>
            

     {error && <p style={{color:"red"}}>No Such place is exists or its might not to be a city</p>}
        </div>

    )
}
