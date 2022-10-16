import Design from "./Design"
import designs from "../Designs.js"
import Mostrador from "./Mostrador"


const Main = () => {
    
    const designelems = designs.map((design) => {
        return <div key={design.id}><Design  {...design} />{design.id != 3}</div>
    })

    return(
        <main className="maincont">
            <Mostrador designs={designs}/>
            {designelems}
        </main>
    )
}

export default Main