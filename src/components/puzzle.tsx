        import { Piece } from "./piece";
        import styles from "../styles/Puzzle.module.css"
        import { usePuzzle } from "../utlis/utils";
        import { ActionType } from "../utlis/types";

        export const Puzzle: React.FC = () => {
            const [puzzle, dispatch] = usePuzzle();
            const reset = () => {
                dispatch({ type: ActionType.RESET });
            }
            const pieces = puzzle.pieces.map((piece, index) => (
                <Piece key={index} id={piece.id} />
            ));
            const win: boolean = puzzle.pieces.every(p => p.actualX === p.originX && p.actualY === p.originY);

            return (
                
                <>
                    <div className={styles.puzzle} style={{gridTemplateColumns: `repeat(${puzzle.columns}, 1fr)`, gridTemplateRows: `repeat(${puzzle.rows}, 1fr)` }}>
                        {pieces}
                    </div>
                    
                    <div className={styles.ui}>
                        <p>{win ? "vyhrál si" : `${puzzle.pieces.filter(p => p.actualX !== p.originX || p.actualY !== p.originY).length} dílků je na nesprávném místě.` }</p>
                        {win && <button onClick={reset} className={styles.reset}>Reset</button>}    
                    </div>
                </>
            );
        };
