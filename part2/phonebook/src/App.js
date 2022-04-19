import { useEffect, useState } from "react"
import _ from 'lodash'
import Filter from './components/Filter'
import Content from "./components/Content"
import AddPerson from "./components/AddPerson"
import personService from "./services/personService"
import Notification from "./components/Notification"



const App = () => {


  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [searching, setSearching] = useState(false)
  const [isLoading, setLoading] = useState(true)
  const [notification, setNotification] = useState(null)
 
 

  const [persons, setPersons] = useState([])
  const [resultList, setResultList] = useState([])
    
  
  useEffect( () => {
    
    personService.getAll().then(personData => {

      setPersons(personData)
      setResultList(persons)
      setLoading(false)
    })    
  },[])

  const handleDelete = (event) => {

    const id=event.target.id
    const name=event.target.name

    if (window.confirm(`Are you sure you want to delete ${name}`)) {

    personService.remove(id)

    personService.getAll().then(personData => {

      setPersons(personData)
      setLoading(false)
    })    
  }
}


  const handleSubmit = (event) => {

    event.preventDefault();

    const newPerson = { name: event.target[0].value, phone: event.target[1].value}
    
    if (newPerson.name !== '') {

        if (Object.values(errors).length > 0) {

            alert(Object.values(errors))
            return;
        }
    
      personService.create(newPerson)
      .then(response => {
        setPersons(persons.concat(response))
        setValues({})
        setNotification(`${newPerson.name} was added`)
        setTimeout(() => { setNotification(null)}, 5000)
      })
      .catch(error => {

        setNotification(error.message)
        setTimeout(() => setNotification(null), 5000)
      })
             
      
    }
    
  }





  const handleChange = (event) => {

    event.persist()

    let name= event.target.name
    let value = event.target.value

    setSearching(false)

    //validate(event, name, value)

    setValues({...values, [name]: value,})

  }

/*const validate= (event, name, value) => {

    switch (name) {

      case 'user':
        if (value.length <= 4) {

          setErrors({...errors, username: 'User name should have at least 5 letters'})
        }
        else {

          let newObj = _.omit(errors, "username")
          setErrors(newObj)
        }
        break;
      case 'phone':

      if (
        !new RegExp(/^0\d{2}\d{8}$/).test(value)
      ) 
      {
        setErrors({...errors, phone: 'Phone number should be formatted as 070-12341234'})

      } else {

        let newObj = _.omit(errors, "phone")
        setErrors(newObj)
      }

      break;

      default: break;
    }
  }*/
  
  

if (isLoading === true) {

return (
<p>Loading data...</p>
)
}

if (isLoading !== true)
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification}/>

      <Filter setter1={setSearching} setter2={setSearchTerm} keyword={searchTerm} data={persons} resultList={resultList} setResultList={setResultList}/>

      <h2>Add new</h2>
      <AddPerson onChange={handleChange} onSubmit={handleSubmit}/>
      
      <h2>Numbers</h2>
      <ul>
       <Content state={searching} data={persons} resultList={resultList} setter={setPersons} remover={handleDelete}/>
      
      </ul>
     
    </div>
  )
}

export default App