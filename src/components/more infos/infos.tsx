import "./infos.css"
import { WeatherContext } from "../../context"
import { useContext } from "react"

function Infos (){
    const {weatherData} : any = useContext(WeatherContext)


    return <div className="infosSec">
        {weatherData[0]?.infos.map((elem : any , index : number) => {

            function getImgs (){
                let src = ""
                if(elem.weather[0].main === "Clouds"){
                    src = "src/imgs/02d.png"
                }
                if(elem.weather[0].main === "Clear"){
                    src = "src/imgs/01d.png"
                }
                if(elem.weather[0].main === "Rain"){
                    src = "src/imgs/09d.png"
                }
                return src
            }


            return <div key={index} className="singleElem">
                <span> {elem.dt_txt.substring(11, 16)} </span>
                <img src={getImgs()} />
                <span> {Math.floor(elem.main.temp)} °C </span>
            </div> 
        })}
    </div>
}


export default Infos