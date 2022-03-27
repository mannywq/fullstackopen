import personService from "../services/personService"

const Content = ({state, term, list, remover}) => {

  console.log(list)
  const persons = list
  let searching = state
  let searchTerm = term


    if(searching === true) {

      const filtered = persons.filter(person => {

        return(

          person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          person.phone.includes(searchTerm)
        )


      })
        
      const content = filtered.map(f => <li>{f.name} {f.phone}</li>)

      return(content)

 
    }
    else {

    const output = (persons.length > 0) ? persons.map(p => <li>{ p.name } {p.phone}<button id={p.id} name={p.name} onClick={remover}>Delete</button></li>) : <p>No people to show</p>

    return output

    }
    
  }
  export default Content