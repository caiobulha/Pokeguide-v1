import { useState } from 'react'
import '../Styles/Search.css'
import Card from './Card'
import pika from '../assets/pikachu.gif'
import mimi from '../assets/mimikyu.gif'

function Search() {
    var x = 0
    const[pokeName, setPokeName] = useState()
    const[res, setRes] = useState()
    const[mimikyu, setMimikyu] = useState()
    const[pikachu, setPikachu] = useState()

    function Error() {
        setPikachu(false)
        setMimikyu(true)
    }

    const typeHandler = (types) => {
        if(types[1])
            return `${types[0].type.name} | ${types[1].type.name}`
        else
            return `${types[0].type.name}`
    }

    function insertInfo(data, dataSpecies) {
        var card = <Card name={data.name} description={dataSpecies.flavor_text} weight={data.weight} height={data.height} captureRate={data.capture_rate} img={data.sprites.front_default} bg={typeHandler(data.types)}/>
        setRes(card)
    }

    function PokeAPI() {
        setPikachu(true)
        var pokemon = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`
        fetch(pokemon).then((response) => {
            response.json().then((data) => {
                var species = data.species.url
                fetch(species).then(response => response.json().then(dataSpecies => {
                    insertInfo(data, dataSpecies)
                    setRes(true)
                    setPikachu(false)
                }))
            }).catch( () => {
                Error()
            })
        })
    }

    return(
        <div className='search'>
            <h1>Search Area</h1>
            <span>Try by the <span style={{color: 'blue'}}>number</span> or the <span style={{color: 'red'}}>name</span></span>
            <input type="text" name="Pokemon" id="pokemon" placeholder='Search Here...' onChange={(e) => setPokeName(e.target.value)}></input>
            <button onClick={PokeAPI}>Go!</button>
            {pikachu ? <img src={pika}></img> : mimikyu ? <img src={mimi}></img> : false}
            {res && res}
        </div>
    )
}

export default Search