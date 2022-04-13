import personService from "../services/personService"
import EditableField from "./Editablefield"

import {useState, useEffect} from 'react'

const Content = ({state, term, list, setter, remover}) => {

  //console.log(list)
  const persons = list
  const setPersons = setter
  const searching = state
  const searchTerm = term


  const updateData = (id, obj) => {

    personService.update(id, obj)
    personService.getAll().then(result => {

      setPersons(result)

    })

  }

  if(searching === true) {

    const filtered = persons.filter(person => (


        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
)

    console.log(filtered)
      
    const content = filtered.map(f => (<li><EditableField name="name" value={f.name} id={f._id} updater={updateData}/><EditableField name="phone" value={f.phone} id={f._id} updater={updateData}/><button id={f._id} name={f.name} onClick={remover}>Delete</button></li>))

    return(content)


  }
  else {

  const output = (persons.length > 0) ? persons.map(p => <li><EditableField name="name" value={p.name} id={p._id} updater={updateData}/><EditableField name="phone" value={p.phone} id={p._id} updater={updateData}/> <button id={p.id} name={p.name} onClick={remover}>Delete</button></li>) : <p>No people to show</p>

  return output

  }

     

    
  }
  export default Content