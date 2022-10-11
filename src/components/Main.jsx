import Design from "./Design"
import designs from "../Designs.js"
import Mostrador from "./Mostrador"


const Main = () => {

    const designelems = designs.map((design) => {
        return <><Design {...design} />{design.id != 3 }</>
    })

    return(
        <main className="maincont">
            <Mostrador designs={designs}/>
            {designelems}
        </main>
    )
}

export default Main