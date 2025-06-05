import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";

const Wordle = ({solution, getNewWord}) => {
    const {currentGuess, handleKeyup, turn, guesses, usedKeys, isCorrect, resetGame} = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyup);

        if (isCorrect || turn > 5) {
            window.removeEventListener('keyup', handleKeyup);
        }

        return () => window.removeEventListener(
            'keyup',
            handleKeyup
        );
    }, [handleKeyup, isCorrect, turn]);

    
    const onNewGameClickHandler = ()  => {
        getNewWord();
        resetGame();
    }

    return (
        <>  
            { isCorrect && <h3 className="won-title">you won</h3> }
            { turn > 5 && <h3 className="lost-title">you lost</h3>}
            { (isCorrect || turn > 5) && <button onClick={onNewGameClickHandler}>start new game</button>}
            { !isCorrect && turn <= 5 && <h3> current guess --- {currentGuess} </h3>}
            <Grid 
                currentGuess={currentGuess} 
                guesses={guesses} 
                turn={turn}
            />
            <Keypad usedKeys={usedKeys}/>
        </>
        
    )
};

export default Wordle;