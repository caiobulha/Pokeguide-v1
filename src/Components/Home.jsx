import '../Styles/Home.css'

function Home() {
    return(
        <div className='home'>
            <h1>Introduction</h1>
            <p>Here you can find your favorite pokemons {'<3'}</p>
            <span>Try by the <span style={{color: 'blue'}}>number</span> or the <span style={{color: 'red'}}>name</span> </span>
        </div>
    )
}

export default Home