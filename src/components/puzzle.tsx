import { useState } from "react";
import { puzzleData, puzzleType } from "../utlis/types";
import { Piece } from "./Piece";
import styles from "../styles/Puzzle.module.css"

export const Puzzle: React.FC = () => {
    const [puzzle,] = useState<puzzleType>(puzzleData);

    const pieces = puzzle.pieces.map((piece, index) => (
        <Piece key={index} url={piece.url} actualX={piece.actualX} originX={piece.originX} originY={piece.originY} actualY={piece.actualY} />
    ));

    return (
        <div className={styles.puzzle} style={{gridTemplateColumns: `repeat(${puzzle.columns}, 1fr)`, gridTemplateRows: `repeat(${puzzle.rows}, 1fr)` }}>
            {pieces}
        </div>
    );
};
