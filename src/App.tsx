import { useState } from "react";
import Simulator from "./components/simulator";
import BeginButton from "./components/BeginButton";


function App() {

  const [isPlaying, setisPlaying] = useState(false)


  return (
    <>
      { isPlaying ? <Simulator /> : <BeginButton/> }
    </>
  );
}

export default App;
