import { CiSearch } from "react-icons/ci"
import "./input.css"
import { WeatherContext } from "../../context"
import { useContext, useState } from "react"

function Input (){
    const {setCity} : any = useContext(WeatherContext)
    const [inputValue , setInputValue] = useState("")

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          setCity(inputValue.toLocaleLowerCase())
        }
    }

    
    return <div className="inputContainer">
        <div className="inputSec">
            <CiSearch onClick={() => setCity(inputValue.toLocaleLowerCase())} className="searchBtn" />
            <input
                onChange={(e) => setInputValue(e.target.value)} 
                className="input" 
                type="text" 
                placeholder="City Name" 
                onKeyDown={handleKeyPress}
            />
        </div>
    </div>
}


export default Input