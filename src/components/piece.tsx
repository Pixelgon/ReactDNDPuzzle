import { useEffect, useRef } from "react";
import styles from "../styles/Piece.module.css"
import { ActionType, ItemTypes, pieceType } from "../utlis/types";
import { usePuzzle } from "../utlis/utils";
import { useDrag, useDrop } from 'react-dnd';

interface IPiece {
    id: number;
}

export const Piece: React.FC<IPiece> = ({id}) => {
    const [puzzle, setPuzzle] = usePuzzle();
    const p = puzzle.pieces.find((p: pieceType) => p.id === id) as pieceType;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.PIECE,
        item: {id: p.id},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        }),
        canDrag: () => {
            return !originPos;
        }
      }))

    const [, drop] = useDrop({
        accept: ItemTypes.PIECE,
        drop: (item: pieceType) => {
            //console.log('dropped', item.id, id);
            if((p?.actualX === p.originX && p.actualY === p.originY) || originPos || item.id === p.id ) {
                return;
            }

            setPuzzle(
                {
                    type: ActionType.SWAP,
                    payload: {
                        pieceSourceID: item.id,
                        pieceDestID: p.id
                    }
                }
            );
        
        },
        collect: (monitor) => ({
            canDrop: monitor.canDrop(),
            isOver: !!monitor.isOver(),
        }),
    });

    const ref = useRef(null);
    drop(drag(ref));

    const originPos = p.actualX === p.originX && p.actualY === p.originY;

    useEffect(() => {
        //disable right click
        const currentRef = ref.current as HTMLImageElement | null;
        if (currentRef) {
            currentRef.addEventListener('contextmenu', (e: Event) => {
                e.preventDefault();
            });
        }
        return () => {
            if (currentRef) {
                currentRef.removeEventListener('contextmenu', (e: Event) => {
                    e.preventDefault();
                });
            }
        }
    }, [ref]);


    return (
        <img className={styles.puzzle__piece} ref={ref} src={p?.url} style={{gridArea:`${p.actualY} / ${p.actualX}`, opacity: isDragging ? '0.5' : '1', filter: originPos ? 'none' : 'grayscale(100%) ', cursor: originPos ? 'not-allowed' : (isDragging ? 'grabbing' : 'grab')}} />
    );
};