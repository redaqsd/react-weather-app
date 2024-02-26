import { createContext , useState , useEffect } from "react"
import axios from "axios"


export const WeatherContext : any = createContext(null)

function WeatherContextProvider ({children} : any){

  const [city, setCity] = useState<string>("fes")
  const [weatherData , setWeatherData] = useState<any>([])

  async function getWeather() {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
      params: {
        q: city,
        appid: '54a57bc234ad752a4f59e59cd372201d',
        units: 'metric'
      }
    })
      
    const data = response.data.list
    let organizedData : any = []
      
    data.forEach((element : any) => {
      let day = new Date(element.dt * 1000).toLocaleDateString("en-US" , { weekday : "long" })
      
      if(organizedData[day]){
        organizedData[day].infos.push(element)
      }else {
        organizedData[day] = {
          day,
          infos : [element]
        }
      }
    })
      
    const sortedData = Object.values(organizedData).sort((a : any, b : any) => {
      return a.infos[0].dt - b.infos[0].dt
    })
      
    setWeatherData(sortedData)
  }
  
  useEffect(() => {
    getWeather()
  }, [city])   

  const contextValue = {weatherData , setCity , city }

  return <WeatherContext.Provider value = {contextValue} >
    {children}
  </WeatherContext.Provider>

}

export default WeatherContextProvider



