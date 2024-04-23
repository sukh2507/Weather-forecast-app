import Search from "./Searchbox"
import Infobox from "./Infobox"
import { useState } from "react"
export default function Weather(){
    const [weather,setweather]=useState(
    {city:"mumbai",
    desc:"haze",
    feels:28.67,
    humidity:28,
    temperature:30.06,
    tempmax:30.06,
    tempmin:30.05})

        let updateinfo = (newinfo)=>{
            setweather(newinfo)
        }

    return(
        <div>
    
        <Search updateinfo={updateinfo}/>
        <Infobox info={weather}/>
        </div>
    )
}