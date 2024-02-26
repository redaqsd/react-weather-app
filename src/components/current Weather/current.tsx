import "./current.css"
import { BiSolidMap } from "react-icons/bi"
import { FaRegCalendar } from "react-icons/fa6"
import { WeatherContext } from "../../context"
import { useContext, useEffect, useState } from "react"


function CurrentWeather (){

    const { weatherData , city } : any = useContext(WeatherContext)
    const [img , setImg] = useState<string>("")

    function getImgs (){
        if(weatherData[0]?.infos[0].sys.pod === "n"){
            if(weatherData[0]?.infos[0].weather[0].main === "Clouds"){
                setImg("src/imgs/02n.png") 
            }
            if(weatherData[0]?.infos[0].weather[0].main === "Clear"){
                setImg("src/imgs/01n.png") 
            }
            if(weatherData[0]?.infos[0].weather[0].main === "Rain"){
                setImg("src/imgs/09n.png") 
            }
        }else {
            if(weatherData[0]?.infos[0].weather[0].main === "Clouds"){
                setImg("src/imgs/02d.png") 
            }
            if(weatherData[0]?.infos[0].weather[0].main === "Clear"){
                setImg("src/imgs/01d.png") 
            }
            if(weatherData[0]?.infos[0].weather[0].main === "Rain"){
                setImg("src/imgs/09d.png") 
            }
        }
    }

    useEffect(() => {
        getImgs()
    },[weatherData])

    let day = new Date(weatherData[0]?.infos[0].dt * 1000).toDateString() 

    return <div className="weatherContainer">
        <h3>Now</h3>
        <div className="infos">
            <span> {Math.floor(weatherData[0]?.infos[0].main.temp)} °C </span>
            <img src={img} />
        </div>
        <p className="desc" > {weatherData[0]?.infos[0].weather[0].description} </p>
        <div className="moreInfos">
            <div className="time">
                <FaRegCalendar />
                <p> { day } </p>
            </div>
            <div className="place">
                <BiSolidMap />
                <p> { city } </p>
            </div>
        </div>
    </div>
}


export default CurrentWeather