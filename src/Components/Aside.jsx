import '../Styles/Aside.css'
import Umbreon from '../assets/umbreon_icon.png'

function Aside({content}) {
    return(
        <div className='aside'>
            <img src={Umbreon} alt="" />
            <div className="conteudo">{content}</div>
        </div>
    )
}

export default Aside