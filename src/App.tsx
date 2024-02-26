import WeatherContextProvider from "./context"
import CurrentWeather from './components/current Weather/current.tsx'
import Infos from './components/more infos/infos.tsx'
import Input from './components/input/input.tsx'
import Forecast from './components/forecast/forecast.tsx'
import Highlights from './components/highlights/highlights.tsx'


function App (){
  return <WeatherContextProvider>
    <Input />
    <CurrentWeather />
    <Forecast />
    <Highlights />
    <Infos />
  </WeatherContextProvider>
}


export default App