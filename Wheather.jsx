import React, { useEffect, useState } from 'react'
import './weather.css'
import { TiWeatherPartlySunny } from "react-icons/ti";
import { BsCloudLightningRainFill } from "react-icons/bs";

 export default function Weatherr() {
    const [para,setpara] = useState('')
    const [name,setname] = useState('')
    const [location,setlocation]=useState('')
    const [temp,settemp]=useState('')
    const [pressure,setpressure]=useState('')
    const [wind,setwind]=useState('')
    const [deg,setdeg]=useState('')
    const [coord,setcoord]=useState('')
    const [lat,setlat]=useState('')
    const [weather,setweather]=useState('')

     const getvalue = (e) =>{
          setlocation(e.target.value)
     }


    async function fetched() {

     await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=99ed8109be9313a5cd83c79def0f7be2&units=metric`)
        .then(datas=>datas.json())
        .then(gowth=>{
          setname(gowth.name)
          settemp(gowth.main.temp)
          setpressure(gowth.main.pressure)
          setwind(gowth.wind.speed)
          setdeg(gowth.wind.deg)
          setcoord(gowth.coord.lon)
          setlat(gowth.coord.lat)
          setweather(gowth.weather[0].main)


        })

    }
   useEffect(()=>{

    fetched();

        
   },[para])

   const search = (a)=>{
        a.preventDefault()
        setpara(location)
        
        
   }
  
  return (
    <>
    <form action="" onSubmit={search}>
      <div className="weather">
      <BsCloudLightningRainFill  className='ico'/>
  <TiWeatherPartlySunny className='icon' />


  <u> <h2>Weather Report</h2> </u><br />
  <div className="flex">
    <input className='inp' type="text" placeholder='Enter Location' onChange={getvalue}/>
    <button className='btn'>search</button>
    </div>
    <div className="align">
    <h2>{"Location:"+name}</h2>
    <h2>{"weather:"+weather}</h2>
    <h2>{"Temp:"+temp}</h2>
    <h2>{"Pressure:"+pressure}</h2>
    <h2>{"speed:"+wind}</h2>
    <h2>{"deg:"+deg}</h2>
    <h2>{"lon:"+coord}</h2>
    <h2>{"lat:"+lat}</h2>
    </div>

    </div>
    </form>
    </>
  )
}
