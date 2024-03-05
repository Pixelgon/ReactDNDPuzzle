import styles from "../styles/Piece.module.css"
import { usePuzzle } from "../utlis/utils";

interface IPiece {
        url: string;
        originX: number;
        originY: number;
        actualX: number;
        actualY: number;
}

export const Piece: React.FC<IPiece> = ({url, originX, originY, actualX, actualY}) => {
    const [, setPuzzle] = usePuzzle();

    


    return (
        <img className={styles.puzzle__piece} src={url} alt="piece" />
    );
};