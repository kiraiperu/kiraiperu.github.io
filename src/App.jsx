import botones from "./botones.js"
import Nav from "./components/Nav"
import Main from "./components/Main"


function App() {

  const botoneslist = botones

  return (
    <div className="App">
      <Nav botones={botones}/>
      <Main />
    </div>
  )
}

export default App
