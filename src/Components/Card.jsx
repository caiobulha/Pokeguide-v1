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
    return(
        <div className='card'>
            <div className="left">
                <div className='imgSpace'>
                    <img src={typesObject[bg]} alt="" id='bg'/>
                    <img src={img} alt='Image of pokemon' className='img'/>
                </div>
            </div>
            <div className="right">
                <h1>{name}</h1>
                <ul>
                    <li><img src={typesTranslator[type]}/></li>
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