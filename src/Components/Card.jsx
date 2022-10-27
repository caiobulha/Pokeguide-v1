import '../Styles/Card.css'
import fire from '../assets/backgrounds/fire.gif'
import water from '../assets/backgrounds/water.gif'
import dark from '../assets/backgrounds/dark.gif'
import defaul from '../assets/backgrounds/default.jpg'
import dragon from '../assets/backgrounds/dragon.gif'
import fight from '../assets/backgrounds/fight.jfif'
import flying from '../assets/backgrounds/flying.webp'
import ghost from '../assets/backgrounds/ghost.gif'
import ice from '../assets/backgrounds/ice.gif'
import plant from '../assets/backgrounds/plant.gif'
import psyche from '../assets/backgrounds/psych.gif'
import space from '../assets/backgrounds/space.gif'
import stone from '../assets/backgrounds/stone.png'
import electric from '../assets/backgrounds/eletric.gif'
import Sparkles from '../assets/sparkles.png'
import { useEffect, useState } from 'react'

function Card({name, description, weight, height, captureRate, img, bg, type, num, shiny, legendary}) {
    const[sparkling, setSparkling] = useState(false)
    const[descs, setDesc] = useState([])
    const typesObject = {
        'fire': fire,
        'water': water,
        'dark': dark,
        'dragon': dragon,
        'fight': fight,
        'flying': flying,
        'ghost': ghost,
        'ice': ice,
        'grass': plant,
        'psychic': psyche,
        'ground': stone,
        'stone': stone,
        'normal': defaul,
        'steel': space,
        'fairy': defaul,
        'bug': plant,
        'poison': plant,
        'electric': electric
    }

    function writeFlavors() {
        var descriptions = []
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}/`, {
            "method": "GET"
        }).then(response => {
            response.json().then(data => {
                for(var i = 1; i<22; i++) {
                    descriptions.push(<p key={num}>data.flavor_text_entries[i].flavor_text</p>)
                    descriptions.push(<p key={num}>data.flavor_text_entries[i].version.name</p>)
                }
                setDesc(descriptions)
            })
        })
    }
    useEffect(() => (
        writeFlavors
    ), [])

    return(
        <div className='card'>
            <div className="imgSpace" style={{backgroundImage: `url(${typesObject[bg]})`}}>
                <img src={Sparkles} alt="Sparkles" onClick={() => setSparkling(!sparkling)} className='sparkling'/>
                <h1>{name}</h1>
                <img src={sparkling ?  shiny : img} alt="Pokemon Image" className='image'/>
                <h1>#{num}</h1>
            </div>
            <div className="contentSpace">
                    <div className="flavor">
                        <p >{description}</p>
                    </div>
                    <div className="flavorComplements">
                        {descs}
                    </div>
                    <div className="types">
                        {type}
                    </div>
                    <div className="legendary">
                    {legendary && <p>Legendary</p>}
                    </div>
                </div>
        </div>
    )
}

export default Card