import { useState } from "react";
import BeginButton from "./BeginButton";
import { ClipLoader } from "react-spinners";

function Simulator() {
  type State = "loading" | "preSim" | "playing";

  const [currentState, setCurrentState] = useState<State>("loading");
  
  const stateSwitch = (currentState: State) => {
    switch (currentState) {
      case "loading":
        return <ClipLoader color="red" />;
      case "preSim":
        return <BeginButton />;
      case "playing":
        return (
          <video
            width="100%"
            height="100%"
            poster="https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png"
          >
            <source src="../assets/video.mp4" />
            Susan Sontag just called. Your browser has terrible taste in camp.
            Or it doesn't support the video tag. One of the two.
          </video>
        );
    }
  };

  return <>{stateSwitch(currentState)}</>;

}

export default Simulator;
