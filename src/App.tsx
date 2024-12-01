import { useEffect } from "react";
import { FlipCard, Footer, Success } from "./components";
import useApp from "./hooks/useApp";
import "./App.css";

const App = () => {
    const { pieces, startGame, onHandleActive, gameLogicForFlipped, isGameFinished } = useApp();
    useEffect(() => {
        startGame();
    }, []);

    useEffect(() => {
        gameLogicForFlipped();
    }, [pieces]);

    return (
        <main>
            <h1>Memory Game in React</h1>
            <div className="container">
                {pieces.map((item, index) => (
                    <FlipCard index={index} data={item} flipped={item.flipped} handleActive={() => onHandleActive(item)} />
                ))}
            </div>

            {isGameFinished && <Success />}

            <Footer />
        </main>
    );
};

export default App;
