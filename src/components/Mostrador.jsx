
import leftimg from "../assets/leftdouble.png"
import rightimg from "../assets/rightdouble.png"


import {useState} from "react"

const Mostrador = (props) => {

    const [index, setIndex] = useState(0)

    const handleLeft = () => {
        if(index-1 < 0) {
            setIndex(props.designs.length-1)
        }
        else {
            setIndex((prev) => prev-1)
        }
    }

    const handleRight = () => {
        if(index+1 > props.designs.length-1) {
            setIndex(0)
        }
        else {
            setIndex((prev) => prev+1)
        }
    }

    return(
        <div className="">
            <div className="mostradorcont">
                <img className="leftarr" src={leftimg} onClick={handleLeft}></img>
                <img className="mostimg" src={props.designs[index].img}></img>
                <img className="rightarr" src={rightimg} onClick={handleRight}></img>
            </div>      
            <nav className="linea">デザイン DESIGNS デザイン</nav>
        </div>
    )
}

export default Mostrador