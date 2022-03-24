import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './Search'
import Content from './Content'

const App = () => {

  const [countries, setCountries] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const hook = () => {
   axios.get('https://restcountries.com/v3.1/all')
  .then(response => {
    setCountries(response.data)
    setLoading(false)
  })
}
useEffect(hook, [])

const filterSearch = (event) => {

  let term = event.target.value

  setSearchTerm(term)

}

const expandDetails = (event) => {

  let term = event.target.value

  setSearchTerm(term)
}

if (isLoading) {
  return <div>Loading...</div>
}

return (
  <div>
    <Search list={countries} term={searchTerm} handler={filterSearch}/> 
 
  <Content list={countries} term={searchTerm} setter={expandDetails}/>
  </div>
)
}
export default App;
