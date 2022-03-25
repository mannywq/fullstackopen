const Content = ({state, term, list}) => {

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

    const output = persons.map(p => <li>{ p.name } {p.phone}</li>)

    return output

    }
    
  }
  export default Content