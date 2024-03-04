import { pieceType } from "../utlis/types";

export interface IPuzzle {
    rows: number;
    collumns: number;
    puzzle: pieceType[];
}

export const Puzzle: React.FC<IPuzzle> = ({rows, collumns, puzzle}) => {
    return (
        <>
        
        </>
    );
}