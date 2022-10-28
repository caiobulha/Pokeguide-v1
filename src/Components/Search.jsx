import { useEffect, useRef, useState } from 'react'
import '../Styles/Search.css'
import Card from './Card'
import pika from '../assets/pikachu.gif'
import mimi from '../assets/mimikyu.gif'
import waterI from '../assets/types/water_type.png'
import bugI from '../assets/types/bug_type.png'
import darkI from '../assets/types/dark_type.png'
import dragonI from '../assets/types/dragon_type.png'
import eletricI from '../assets/types/eletric_type.png'
import fairyI from '../assets/types/fairy_type.png'
import fightingI from '../assets/types/fighting_type.png'
import fireI from '../assets/types/fire_type.png'
import flyingI from '../assets/types/flying_type.png'
import ghostI from '../assets/types/ghost_type.png'
import grassI from '../assets/types/grass_type.png'
import groundI from '../assets/types/ground_type.png'
// import iceI from '../assets/types/ice_type.png'
import normalI from '../assets/types/normal_type.png'
import poisonI from '../assets/types/poison_type.png'
import psychicI from '../assets/types/psychic_type.png'
import rockI from '../assets/types/rock_type.png'
import steelI from '../assets/types/steel_type.png'

function Search() {
    const[pokeName, setPokeName] = useState()
    const[res, setRes] = useState()
    const[mimikyu, setMimikyu] = useState()
    const[pikachu, setPikachu] = useState()
    const resultado = useRef()
    const typesTranslator = {
        'fire': fireI,
        'water': waterI,
        'dark': darkI,
        'dragon': dragonI,
        'fight': fightingI,
        'flying': flyingI,
        'ghost': ghostI,
        'ice': ghostI,
        'grass': grassI,
        'psychic': psychicI,
        'ground': groundI,
        'stone': rockI,
        'normal': normalI,
        'steel': steelI,
        'fairy': fairyI,
        'bug': bugI,
        'poison': poisonI,
        'electric': eletricI
    }

    function Error() {
        setPikachu(false)
        setMimikyu(true)
    }

    const typeHandler = (types) => {
        if(types[1]) {
            var tipo = []
            tipo.push(<img src={typesTranslator[types[0].type.name]} key='1' alt='Icon' className='icon'></img>) //Um elemento em react precisa de uma key
            tipo.push(<img src={typesTranslator[types[1].type.name]} key='2' alt='Icon' className='icon'></img>)
            return tipo
        } else {
            var tipo = <img src={typesTranslator[types[0].type.name]} alt='Icon' className='icon'></img> //Um elemento em react precisa de uma key
            return tipo
        }
    }

    function insertInfo(data, dataSpecies) {
        var card = <Card name={data.name} description={dataSpecies.flavor_text_entries[0].flavor_text} weight={data.weight} height={data.height} captureRate={dataSpecies.capture_rate} img={data.sprites.front_default} bg={data.types[0].type.name} type={typeHandler(data.types)} num={data.id} shiny={data.sprites.front_shiny} legendary={dataSpecies.is_legendary} highQuality={data.sprites.other[`official-artwork`].front_default}/>
        setRes(card)
    }

    function PokeAPI() {
        setPikachu(true)
        var pokemon = `https://pokeapi.co/api/v2/pokemon/${pokeName.toLowerCase()}`
        fetch(pokemon, {
            "method": "GET"
        }).then((response) => {
            response.json().then((data) => {
                var species = data.species.url
                fetch(species).then(response => response.json().then(dataSpecies => {
                    insertInfo(data, dataSpecies)
                    setPikachu(false)
                }))
            }).catch( () => {
                Error()
            })
        })
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKey)
    }, [])

    const handleKey = (e) => {
        e.key == 'Escape' && setRes(false)
    }

    return(
        <div className='search'>
            <h1>Search Area</h1>
            <span>Try by the <span style={{color: 'blue'}}>number</span> or the <span style={{color: 'red'}}>name</span></span>
            <input type="text" name="Pokemon" id="pokemon" placeholder='Search Here...' onChange={(e) => setPokeName(e.target.value)}></input>
            <button onClick={PokeAPI}>Go!</button>
            {pikachu ? <img src={pika}></img> : mimikyu ? <img src={mimi}></img> : false}
            <div className="resWrapper" style={{transform: res? 'translateY(40%)': 'translateY(-1000px)'}} ref={resultado}>{res}</div>
        </div>
    )
}

export default Search