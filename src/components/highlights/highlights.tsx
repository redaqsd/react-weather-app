import "./highlights.css"
import { RiWaterPercentFill } from "react-icons/ri"
import { FaWind } from "react-icons/fa"
import { LuWaves } from "react-icons/lu"
import { FaTemperatureArrowDown } from "react-icons/fa6"
import { FaTemperatureArrowUp } from "react-icons/fa6"
import { FaTemperatureLow } from "react-icons/fa"
import { WeatherContext } from "../../context"
import { useContext } from "react"

function Highlights (){
    const {weatherData} : any = useContext(WeatherContext)

    function tempMax (){
        let maxArray = []
        for(let x = 0 ; x < weatherData[0]?.infos.length ; x++){
            maxArray.push(weatherData[0]?.infos[x].main.temp_max)
        }
        let sortedArray = maxArray.sort((a : number , b : number) => a - b)
        return Math.round(sortedArray[sortedArray.length - 1])
    }

    function tempMin (){
        let minArray = []
        for(let x = 0 ; x < weatherData[0]?.infos.length ; x++){
            minArray.push(weatherData[0]?.infos[x].main.temp_min)
        }
        let sortedArray = minArray.sort((a : number , b : number) => a - b)
        return Math.round(sortedArray[0])
    }

    function feelsLike (){
        let value = 0
        for(let x = 0 ; x < weatherData[0]?.infos.length ; x++){
            value += weatherData[0]?.infos[x].main.feels_like
        }
        return  Math.round(value/weatherData[0]?.infos.length)
    }

    return <div className="highlightsSec">
        <div className="temperatureInfos">
            <div className="option">
                <span>Min Temperature</span>
                <div className="valueSec">
                    <FaTemperatureArrowDown className="icons" />
                    <p> {tempMin()} °C</p>
                </div>
            </div>
            <div className="option">
                <span>Max Temperature</span>
                <div className="valueSec">
                    <FaTemperatureArrowUp className="icons" />
                    <p> {tempMax()} °C</p>
                </div>
            </div>
            <div className="option">
                <span>Feels Like</span>
                <div className="valueSec">
                    <FaTemperatureLow className="icons" />
                    <p> {feelsLike()} °C</p>
                </div>
            </div>
        </div>
        <div className="extraInfos">
        <div className="option">
                <span>Humidity</span>
                <div className="valueSec">
                    <RiWaterPercentFill className="icons" />
                    <p> {weatherData[0]?.infos[0].main.humidity} % </p>
                </div>
            </div>
            <div className="option">
                <span>Pressure</span>
                <div className="valueSec">
                    <LuWaves className="icons" />
                    <p> {weatherData[0]?.infos[0].main.pressure} hPa</p>
                </div>
            </div>
            <div className="option">
                <span>Wind Speed</span>
                <div className="valueSec">
                    <FaWind className="icons" />
                    <p> {Math.round(weatherData[0]?.infos[0].wind.speed * 1.5)} Km/h  </p>
                </div>
            </div>
        </div>
    </div>
}


export default Highlights