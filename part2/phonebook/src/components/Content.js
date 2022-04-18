import personService from "../services/personService"
import EditableField from "./Editablefield"

import {useState, useEffect} from 'react'

const Content = ({state, data, resultList, setter, remover}) => {

  const setPersons = setter
  const searching = state

  const updateData = (id, obj) => {

    personService.update(id, obj)
    personService.getAll().then(result => {

      setPersons(result)

    })

  }

  if(searching === true) {

    console.log(resultList)

    const content = resultList.map((f) => (
    
    <li key={f.id}>
      <EditableField name="name" value={f.name} id={f.id} updater={updateData}/>
      <EditableField name="phone" value={f.phone} id={f.id} updater={updateData}/>
      <button id={f.id} name={f.name} onClick={remover}>Delete</button>
      </li>))

    return(content)

    
  }
  else {

  return (data.length > 0 ? data.map((p) => (
  
  <li key={p.id}>
    <EditableField name="name" value={p.name} id={p.id} updater={updateData}/>
    <EditableField name="phone" value={p.phone} id={p.id} updater={updateData}/> 
    <button id={p.id} name={p.name} onClick={remover}>Delete</button>
    </li>)) : <p>No people to show</p>)


  }

     

    
  }
  export default Content