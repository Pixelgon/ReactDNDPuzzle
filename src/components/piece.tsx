interface IPiece {
    url: string;
    originX: number;
    originY: number;
    actualX: number;
    actualY: number;
}

export const Piece: React.FC<IPiece> = ({url, originX, originY, actualX, actualY}) => {
    return (
        <>

        </>
    );
}

export default Piece;