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

function Card({name, description, weight, height, captureRate, img, bg, type}) {
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

    const typesTranslator = {
        'fire': 'Fogo',
        'water': 'Água',
        'dark': 'Sombrio',
        'dragon': 'Dragão',
        'fight': 'Lutador',
        'flying': 'Voador',
        'ghost': 'Fantasma',
        'ice': 'Gelo',
        'grass': 'Planta',
        'psychic': 'Psiquico',
        'ground': 'Terra',
        'stone': 'Pedra',
        'normal': 'Normal',
        'steel': 'Metal',
        'fairy': 'Fada',
        'bug': 'Inseto',
        'poison': 'Veneno',
        'electric': 'Elétrico'
    }
    return(
        <div className='card'>
            <div className="left">
                <div className='imgSpace'>
                    <img src={typesObject[bg]} alt="" id='bg'/>
                    <img src={img} alt='Image of pokemon' />
                </div>
            </div>
            <div className="right">
                <h1>{name}Nome</h1>
                <ul>
                    <li><p>{typesTranslator[type]}</p></li>
                    <li><p>Weight - {weight}</p></li>
                    <li><p>Height - {height}</p></li>
                    <li><p>Capture Rate - {captureRate}</p></li>
                    <li><span>{description}</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Card