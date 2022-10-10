
const Design = (props) => {
    
    return(
        <div className="designcont">
            <img className="designimg" src={props.img}></img>
            <div className="textcont">
                <div className="texttext">
                    <span className="oldprice"> S/ {props.oldprice}</span>
                    <span className="newprice"> S/ {props.price}</span>
                </div>
                <span className="inspiracion">{props.text}</span>
            </div>
        </div>
    )
}

export default Design