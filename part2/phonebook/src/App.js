import { useState } from "react"
import _ from 'lodash'
import Filter from './components/Filter'
import Content from "./components/Content"
import AddPerson from "./components/AddPerson"



const App = () => {

  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [searchTerm, setSearchTerm] = useState('')
  const [searching, setSearching] = useState(false)
 

  const [persons, setPersons] = useState([
      { name: 'Arto Hellas', 
        phone: '07045018543', 
        id: 1
     }, 
      { name: 'Ada Lovelace', 
        phone: '39-44-5323523', 
        id: 2 
      },
      { name: 'Dan Abramov', 
        phone: '12-43-234345', 
        id: 3 
      },
      { name: 'Mary Poppendieck', 
        phone: '39-23-6423122', 
        id: 4 
      }
    ]) 

  const formSubmit = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const newPerson = { name: event.target[0].value, phone: event.target[1].value}
    
    if (newPerson.name !== '') {

        if (Object.values(errors).length > 0) {

            alert(Object.values(errors))
            return;
        }

     const obj = persons.find(n => n.name === newPerson.name)

      if (obj) {

        alert(`${obj.name} already exists`)
        console.log(obj.name)
        return;

      }   
      newPerson.id = persons.length +1
      setPersons(persons.concat(newPerson))
      setValues({})
      console.log(persons)
      }
    
  }


  const handleSearch= (event) => {

    event.persist()

    let name= event.target.name
    let value = event.target.value

    setSearchTerm(value)
    setSearching(true)

    console.log('Searching for: ', value)
    
}




  const handleChange = (event) => {

    event.persist()

    let name= event.target.name
    let value = event.target.value

    setSearching(false)

    validate(event, name, value)

    setValues({...values, [name]: value,})

  }

const validate= (event, name, value) => {

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
  }
  
  


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter props={handleSearch}/>

      <h2>Add new</h2>
      <AddPerson onChange={handleChange} onSubmit={handleSubmit}/>
      
      <h2>Numbers</h2>
      <ul>
       <Content state={searching} term={searchTerm} list={persons}/>
      
      </ul>
     
    </div>
  )
}

export default App