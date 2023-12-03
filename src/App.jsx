
import { useState } from "react"
import "./App.css";
import BlackButton from "./components/BlackButton";

const App = () =>{
  const[isWhite, setWhite] = useState(false);
  const Black = () =>{
    setWhite(!isWhite);
  }
  return(
    <div className={`app  ${isWhite ? "night-mode" : "day-mode"}`}>
      <h1>{isWhite ? "Modalità Notte" : "Modalità Giorno"}</h1>
      <BlackButton onClick={Black} />
    </div>
    
   
    
  )
}


export default App;
