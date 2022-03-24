const Search = ({countries, searchTerm, handler}) => {

    return (

        <>
        <span>Search for a country</span><input value={searchTerm} onChange={handler}/>
        </>
    )


}

export default Search