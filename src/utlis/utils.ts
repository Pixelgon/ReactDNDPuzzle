import { useContext } from "react";
import { PuzzleContext } from "../providers/PuzzleProvider";

// Hook pro použití kontextu
export const usePuzzle = () => {
    const context = useContext(PuzzleContext);
    if (context === undefined) {
        throw new Error('usePuzzle must be used within a PuzzleProvider');
    }
    return context;
};