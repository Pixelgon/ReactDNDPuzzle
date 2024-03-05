import { useState } from "react";
import { puzzleData, puzzleType } from "../utlis/types";
import { Piece } from "./Piece";
import styles from "../styles/Puzzle.module.css"

export const Puzzle: React.FC = () => {
    const [puzzle, setPuzzle] = useState<puzzleType>(puzzleData);

    return (
        <div className={styles.puzzle} style={{gridTemplateColumns: `repeat(${puzzle.columns}, 1fr)`, gridTemplateRows: `repeat(${puzzle.rows}, 1fr)` }}>
            {puzzle.pieces.map((piece, index) => (
                <Piece key={index} piece={piece} />
            ))}
        </div>
    );
};
