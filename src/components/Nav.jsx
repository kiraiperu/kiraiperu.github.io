import logo from "../assets/kirai.png"

const Nav = (props) => {
    
    
    const botones = props.botones.map((boton) => {
        return <a key={boton.id} href={boton.link} target="_blank"><div className="navbuttoncont"><img className="navbuttonimg" src={boton.img}></img></div></a>
    })

    return(
        <nav className="navcont">
            <img src={logo} className="navlogo"></img>
            {botones}
        </nav>
    )
}

export default Nav