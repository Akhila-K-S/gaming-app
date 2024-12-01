import { useMemo, useState } from "react";
import emojiData from "../const/emoji.data.json";

export interface IGameIconProps {
    emoji: string;
    flipped: boolean;
    solved: boolean;
    position: number;
}

const useApp = () => {
    const [pieces, setPieces] = useState<IGameIconProps[]>([]);
    const startGame = () => {
        const duplicateGameIcons = [...emojiData, ...emojiData];
        const newGameIcons = [];

        while (newGameIcons.length < emojiData.length * 2) {
            const randomIndex = Math.floor(Math.random() * duplicateGameIcons.length);
            newGameIcons.push({
                emoji: duplicateGameIcons[randomIndex],
                flipped: false,
                solved: false,
                position: newGameIcons.length,
            });
            duplicateGameIcons.splice(randomIndex, 1);
        }

        setPieces(newGameIcons);
    };

    //
    const onHandleActive = (data: IGameIconProps) => {
        const flippedData = pieces.filter((data) => data.flipped && !data.solved);
        if (flippedData.length === 2) return; // can't select more than 2 items

        const newPieces = pieces.map((piece) => {
            if (piece.position === data.position) {
                piece.flipped = !piece.flipped;
            }
            return piece;
        });
        setPieces(newPieces);
    };

    // Function for Flipped
    const gameLogicForFlipped = () => {
        const flippedData = pieces.filter((data) => data.flipped && !data.solved);

        if (flippedData.length === 2) {
            setTimeout(() => {
                if (flippedData[0].emoji === flippedData[1].emoji) {
                    setPieces(
                        pieces.map((piece) => {
                            if (piece.position === flippedData[0].position || piece.position === flippedData[1].position) {
                                piece.solved = true;
                            }
                            return piece;
                        })
                    );
                } else {
                    setPieces(
                        pieces.map((piece) => {
                            if (piece.position === flippedData[0].position || piece.position === flippedData[1].position) {
                                piece.flipped = false;
                            }
                            return piece;
                        })
                    );
                }
            }, 800);
        }
    };

    // check game finished or not
    const isGameFinished = useMemo(() => {
        if (pieces.length > 0 && pieces.every((piece) => piece.solved)) {
            return true;
        }
    }, [pieces]);

    //  Return values
    return { startGame, pieces, onHandleActive, gameLogicForFlipped, isGameFinished };
};
export default useApp;
