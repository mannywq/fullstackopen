import Weather from "./Weather"

const Content = ({list, term, setter}) => {

    const countries = list

    let filtered = countries.filter(country => {

        return (
        country.name.common.toLowerCase().includes(term.toLowerCase())
        )
    })

    if (filtered.length > 10)
        return <p>Keep typing to narrow down choices</p>

    if (filtered.length === 1) {

        let langs = Object.values(filtered[0].languages).join(' ').split(' ')
        console.log(filtered[0].capital)


        return (
        <div>
            <h2>{filtered[0].name.common}</h2>
            <p>Flag: {filtered[0].flag}</p>
            <p>Capital: {filtered[0].capital}</p>
            <p>Area: {filtered[0].area}</p>
            <h3>Languages:</h3>
            <ul>
                {langs.map(res => <li>{res}</li>)}
            </ul>
            <Weather loc={filtered[0].capital}/>
        </div>

        )

    }

    return (
        <div>
            {filtered.map(res => <li>{res.name.common}<button value={res.name.common} onClick={setter}>show</button></li>)}
        </div>
    )
}
export default Content