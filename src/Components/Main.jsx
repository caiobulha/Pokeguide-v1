import '../Styles/Main.css'
import Header from './Header'
import Aside from './Aside'
import Home from './Home'
import Search from './Search'
import Dex from './Dex'
import Content from './Content'
import { useState } from 'react'

function Main() {
    var x = 0;
    const[actualPage, setActualPage] = useState(0)

    return(
        <div>
            <Header></Header>
            <div className="contentWrapper">
                <Aside content={
                    <ul>
                        <li><button onClick={() => setActualPage(0)} >Home</button></li>
                        <li><button onClick={() => setActualPage(1)}>Search</button></li>
                        <li><button onClick={() => setActualPage(2)}>Dex</button></li>
                    </ul>}
                />
                <Content content={
                    actualPage === 0 ? <Home/> : actualPage === 1 ? <Search/> : actualPage === 2 ? <Dex/> : x++ 
                }/>
            </div>
        </div>
    )
}

export default Main