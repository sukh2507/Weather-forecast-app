import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './search.css'
import Infobox from './Infobox';

let resp;
export default function Search({updateinfo}){
    let [city, setcity]=useState("")
    
    function change(event){
        setcity(event.target.value);
    }
    
    const url="https://api.openweathermap.org/data/2.5/weather?"
    const key="6907e383d4bd20b231ad912a63391e05"
    

    {let getweather= async ()=>{
        let response = await fetch(`${url}q=${city}&appid=${key}&units=metric`);
        let data=await response.json();
        let res={
            city:city,
            temperature:data.main.temp,
            tempmin:data.main.temp_min,
            tempmax:data.main.temp_max,
            humidity:data.main.humidity,
            feels:data.main.feels_like,
            desc:data.weather[0].description
        }
        console.log(res);
        return res;
    }
    

    async function submit(event){
        event.preventDefault();
        console.log(city);
        setcity("");
        let newinfo=await getweather();
        updateinfo(newinfo);
        
    }

    return(
        <div>
        <form action="" onSubmit={submit}>
        <h2>Weather forecasting app by Sukhbir Singh Sareen : </h2>
        <TextField className='text' id="outlined-basic" label="Enter City for weather info" variant="outlined" value={city} onChange={change} /> <br /><br />
        <Button variant="contained" type='submit'>Search</Button><br />
        </form>
        </div>
    )}
}