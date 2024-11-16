import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./WeatherApp.css";

export default function WeatherApp(){
    const [weatherInfo , setweatherInfo]=useState({
    city:"Hyderabad",
    feelslike: 300.84,
    temp: 300.05,
    tempMax: 300.05,
    tempMin: 295.05,
    humidity: 47,
    weather:'haze',
    });
    let updateInfo =(newInfo)=>{
        setweatherInfo(newInfo)
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Paramjeet Singh</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox  Info={weatherInfo}/>
        </div>
    )
}