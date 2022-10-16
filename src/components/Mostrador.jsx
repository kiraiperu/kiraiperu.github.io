
import leftimg from "../assets/leftdouble.png"
import rightimg from "../assets/rightdouble.png"
import useWindowDimensions from "./windowadjust"
import {useState, useEffect} from "react"

const Mostrador = (props) => {

    const [index, setIndex] = useState(0)
    const [title, setTitle] = useState("デザイン T-SHIRTS デザイン")

    const { height, width } = useWindowDimensions();

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


    const handleAdjust = () => {
        if(width < 1000) {
            return "T-SHIRTS"
        }
        else {
            return "デザイン T-SHIRTS デザイン"
        }
    }

    return(
        <div className="">
            <div className="mostradorcont">
                <img className="leftarr" src={leftimg} onClick={handleLeft}></img>
                <img className="mostimg" src={props.designs[index].img}></img>
                <img className="rightarr" src={rightimg} onClick={handleRight}></img>
            </div>      
            <nav className="linea">
                <span className="lineatext">{handleAdjust()}</span>
            </nav>
        </div>
    )
}

export default Mostrador