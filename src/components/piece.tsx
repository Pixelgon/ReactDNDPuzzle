import { useDrop } from "react-dnd";
import { ItemTypes } from "../utlis/types";
import styles from "../styles/Piece.module.css"
import { useEffect, useState } from "react";

interface IPiece {
    piece: {
        url: string;
        originX: number;
        originY: number;
        actualX: number;
        actualY: number;
    }
}

export const Piece: React.FC<IPiece> = ({ piece }) => {
    const { url, originX, originY, actualX, actualY } = piece;
    const [currentX, setCurrentX] = useState(originX);
    const [currentY, setCurrentY] = useState(originY);
    const [, drop] = useDrop({
        accept: ItemTypes.PIECE,
        drop: (item: { actualX: number, actualY: number }) => {
            setCurrentX(item.actualX);
            setCurrentY(item.actualY);
        },
    });

    useEffect(() => {
        setCurrentX(actualX);
        setCurrentY(actualY);
    }, [actualX, actualY]);

    return (
        <div
            ref={drop}
            className={styles.puzzle__piece}
            style={{ gridArea: `${currentY} / ${currentX}` }}
        >
            <img src={url} alt="piece" />
        </div>
    );
};