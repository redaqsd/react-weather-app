import "./forecast.css"
import { WeatherContext } from "../../context"
import { useContext } from "react"

function Forecast (){
    const { weatherData } : any = useContext(WeatherContext)
    const newData = weatherData.filter((_ : any , index : number) => index != 0)

    function getImgsValue (elem : any){
        let totalArray : string[] = []
        for(let x = 0 ; x < elem?.infos.length; x++){
            totalArray.push(elem?.infos[x].weather[0].main)
        }

        let mostUsedElement : any = totalArray.reduce((accumulator : any, currentValue) => {
            accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
            return accumulator
        }, {})

        return mostUsedElement = Object.keys(mostUsedElement).reduce((a : any, b : any) => mostUsedElement[a] > mostUsedElement[b] ? a : b)
    }


    return <div className="forecastSec">
        {newData.map((elem : any , index : number) => {
            
            function getImgs (){
                let src = ""
                if(getImgsValue(elem) === "Clouds"){
                    src = "src/imgs/02d.png"
                }
                if(getImgsValue(elem) === "Clear"){
                    src = "src/imgs/01d.png"
                }
                if(getImgsValue(elem) === "Rain"){
                    src = "src/imgs/09d.png"
                }
                return src
            }

            function getWeather () {
                let totalValue = 0
                for(let x = 0 ; x < elem?.infos.length ; x++){
                    totalValue += (elem?.infos[x].main.temp_max + elem?.infos[x].main.temp_max) / 2
                }
                return Math.floor(totalValue/elem?.infos.length)
            }
            
            return <div key={index} className="singleDay">
                <div className="firstSec">
                    <img src={getImgs()} />
                    <p> {getWeather()} °C</p>
                </div>
                <p> {new Date(elem?.infos[0].dt * 1000).toDateString().substring(3,10)} </p>
                <p> {elem.day} </p>
            </div>
            })
        }
    </div>
}


export default Forecast