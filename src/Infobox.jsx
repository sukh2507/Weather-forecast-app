import { dialogClasses } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Infobox.css"
import { createTheme } from '@mui/material/styles';

export default function Infobox({info}){
    
  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });
    const init_url="https://img.freepik.com/premium-vector/clouds-stars-sun-blue-background-childrens-vector-illustration-sky_153074-219.jpg"
    return(
        <div className="infobox">
          <div className="res">
            {/* <h1>Weather report : </h1> */}

            <div className="cont">
            <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia className="media"
        sx={{ height: 140 }}
        image={init_url}
        title="green iguana"
      />
      
      <CardContent className="mincard">
        <Typography gutterBottom variant="h4" component="div">
          {info.city}
        </Typography>
        <Typography variant="body3" color="#2514E0">
          <b><p>Feels like : {info.feels} ºC</p>
          <p className="inline" style={{color:"#2514E0"}}>Humidity : <p className="inline">{info.humidity}</p></p><br /><br />
          <p className="inline" style={{color:"#2514E0"}}>Current Temperature : <p className="inline">{info.temperature}</p> ºC</p><br /><br />
          <p className="inline" style={{color:"#2514E0"}}>Maximum Temperature : <p className="inline">{info.tempmax}</p> ºC</p><br /><br />
          <p className="inline" style={{color:"#2514E0"}}>Minimum Temperature : <p className="inline">{info.tempmin}</p> ºC</p></b><br /><br />
          <p className="inline" style={{color:"#2514E0"}}> <b> Weather Description :{info.desc}</b> </p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
        </div>
    )
}