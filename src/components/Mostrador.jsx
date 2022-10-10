
import leftimg from "../assets/leftdouble.png"
import rightimg from "../assets/rightdouble.png"


import {useState} from "react"

const Mostrador = (props) => {

    const [index, setIndex] = useState(0)
    const [showimg, setShowimg] = useState(props.designs[index].img);

    const handleLeft = () => {
        if(index-1 < 0) {
            setIndex(props.designs.length-1)
        }
        else {
            setIndex((prev) => prev-1)
        }
        setShowimg(props.designs[index].img)
    }

    const handleRight = () => {
        if(index+1 > props.designs.length-1) {
            setIndex(0)
        }
        else {
            setIndex((prev) => prev+1)
        }
        setShowimg(props.designs[index].img)
    }

    return(
        <div className="">
            <div className="mostradorcont">
                <img className="leftarr" src={leftimg} onClick={handleLeft}></img>
                <img className="mostimg" src={showimg}></img>
                <img className="rightarr" src={rightimg} onClick={handleRight}></img>
            </div>      
            <nav className="linea"></nav>
        </div>
    )
}

export default Mostrador