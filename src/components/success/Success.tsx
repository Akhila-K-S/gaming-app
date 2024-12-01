import Confetti from "confetti-react";
import "./Success.css";

const Success = () => {
    return (
        <div className="game-finished">
            <h1 className="success-font">{"CONGRATULATIONS..... YOU WIN THE GAME"}</h1>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
        </div>
    );
};

export default Success;
