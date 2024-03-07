import { Dispatch, FC, PropsWithChildren, createContext, useReducer } from 'react';
import { ActionType, PuzzleAction, pieceType, puzzleData, puzzleType } from "../utlis/types";

export const PuzzleReducer: React.Reducer<puzzleType, PuzzleAction> = (state: puzzleType, action: PuzzleAction): puzzleType => {
    if(action.type === ActionType.SWAP) {
        const source = state.pieces.find(p => p.id === action.payload.pieceSourceID) as pieceType;
        const dest = state.pieces.find(p => p.id === action.payload.pieceDestID) as pieceType;
        if((source.actualX == source.originX && source.actualY === source.originY) || (dest.actualX === dest.originX && dest.actualY === dest.originY)) {
            return state;
        }
        else {
            return {...state, pieces: state.pieces.map(p => {
                if(p.id === source.id) {
                    return {...source, actualX: dest.actualX, actualY: dest.actualY};
                }
                else if(p.id === dest.id) {
                    return {...dest, actualX: source.actualX, actualY: source.actualY};
                }
                else {
                    return p;
                }
            } )}
        }
    }
    else if(action.type === ActionType.RESET) {
        const p = puzzleData.pieces.map((piece, ix) => {
            return { id: ix, originX: piece.originX, originY: piece.originY, actualX: piece.actualX, actualY: piece.actualY, url: piece.url } as pieceType;
        });
        const newState = {...state};
        p.sort(() => Math.random() - 0.5);
        for(let i = 0; i < p.length; i++) {
            newState.pieces[i].actualX = p[i].originX;
            newState.pieces[i].actualY = p[i].originY;
        }
        return newState;
    }
    else {
        return state;
    }
};

let initialPuzzle: puzzleType = {...(puzzleData as puzzleType)};
for(let i = 0; i < initialPuzzle.pieces.length; i++) {
    initialPuzzle.pieces[i].id = i+1;
}

initialPuzzle = PuzzleReducer(initialPuzzle, { type: ActionType.RESET });
  
export const PuzzleContext = createContext<[puzzleType, Dispatch<PuzzleAction>]>([puzzleData as puzzleType, () => {}]);

export const PuzzleProvider: FC<PropsWithChildren> = ({ children }) => {
    const reducer = useReducer(PuzzleReducer, initialPuzzle);
    return <PuzzleContext.Provider value={reducer}>{children}</PuzzleContext.Provider>;
};
