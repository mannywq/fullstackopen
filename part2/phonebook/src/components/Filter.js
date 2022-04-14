const Filter = ({setter1, setter2, keyword, data, resultList, setResultList}) => {


    const setSearching = setter1
    const setSearchTerm = setter2

    const filter = () => {

        const res = data.filter(person => (
        
            person.name.toLowerCase().includes(keyword.toLowerCase())
        ))

        setResultList(res)

    }

    const handleSearch= (event) => {

        event.persist()
    
        let name= event.target.name
        let value = event.target.value
    
        setSearchTerm(value)
        setSearching(true)

        if(value === '') 
        {
            setResultList(data)
            setSearching(false)
        }
        else {

            filter()

            console.log('filtered value is ', resultList)
            console.log('Searching for: ', value)
        }
        
        }

    const onBlur = (event) => {

        if (event.target.value === '')

        setSearching(false)
    }


    return (

        <div>
        <input name="search" defaultValue='' onChange={handleSearch} onBlur={onBlur}/><br/>
        </div>
    )

}
export default Filter