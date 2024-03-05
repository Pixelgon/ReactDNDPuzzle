import React, { PropsWithChildren, createContext, useState } from 'react';
import { puzzleData, puzzleType } from "../utlis/types";

// Vytvoření kontextu
export const PuzzleContext = createContext<{
    puzzle: puzzleType;
    setPuzzle: React.Dispatch<React.SetStateAction<puzzleType>>;
} | undefined>(undefined);

// Vytvoření poskytovatele kontextu
export const PuzzleProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [puzzle, setPuzzle] = useState<puzzleType>(puzzleData);

    return (
        <PuzzleContext.Provider value={{ puzzle, setPuzzle }}>
            {children}
        </PuzzleContext.Provider>
    );
};
