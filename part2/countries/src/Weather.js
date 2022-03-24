import axios from "axios"
import {useState, useEffect} from 'react'

const Weather = ({loc}) => {

    const city = loc
    const apiKey = process.env.REACT_APP_API_KEY
    console.log(apiKey)

    const [isLoading, setLoading] = useState(true)
    const [weather, setWeather] = useState([])
    let [icon, url] = ''

    const hook = () => {

       axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {

            setWeather(response.data)
            setLoading(false)


        })
    }
    useEffect(hook, [])


    if (isLoading === true){
        return <p>Loading weather...</p>
    }

    icon = weather.weather[0].icon
    console.log(weather.weather[0].icon)
    url = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

    return(
    <div>
    <p>The weather in {city} is...</p>

    <img src={url}/>
    {JSON.stringify(weather)}
    </div>
    
    )
}
export default Weather