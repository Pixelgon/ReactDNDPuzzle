export type pieceType = {
    id: number,
    url: string,
    originX: number,
    originY: number,
    actualX: number,
    actualY: number
}

export type puzzleType = {
    rows: number,
    columns: number,
    pieces: pieceType[],
}

export enum ActionType{
    RESET,
    SWAP,
}

export type PuzzleAction = { type: ActionType.RESET, } | { type: ActionType.SWAP, payload: {pieceSourceID: number, pieceDestID: number} }

export const ItemTypes = {
    PIECE: 'piece'
};


export const puzzleData = {   
    "rows": 4,
    "columns": 5,
    "pieces": [
        {
            "url": "/img/img_001.jpg",
            "originX": 1,
            "originY": 1,
            "actualX": 1,
            "actualY": 1
        },
        {
            "url": "/img/img_002.jpg",
            "originX": 2,
            "originY": 1,
            "actualX": 2,
            "actualY": 1
        },
        {
            "url": "/img/img_003.jpg",
            "originX": 3,
            "originY": 1,
            "actualX": 3,
            "actualY": 1
        },
        {
            "url": "/img/img_004.jpg",
            "originX": 4,
            "originY": 1,
            "actualX": 4,
            "actualY": 1
        },
        {
            "url": "/img/img_005.jpg",
            "originX": 5,
            "originY": 1,
            "actualX": 5,
            "actualY": 1
        },
        {
            "url": "/img/img_006.jpg",
            "originX": 1,
            "originY": 2,
            "actualX": 1,
            "actualY": 2
        },
        {
            "url": "/img/img_007.jpg",
            "originX": 2,
            "originY": 2,
            "actualX": 2,
            "actualY": 2
        },
        {
            "url": "/img/img_008.jpg",
            "originX": 3,
            "originY": 2,
            "actualX": 3,
            "actualY": 2
        },
        {
            "url": "/img/img_009.jpg",
            "originX": 4,
            "originY": 2,
            "actualX": 4,
            "actualY": 2
        },
        {
            "url": "/img/img_010.jpg",
            "originX": 5,
            "originY": 2,
            "actualX": 5,
            "actualY": 2
        },
        {
            "url": "/img/img_011.jpg",
            "originX": 1,
            "originY": 3,
            "actualX": 1,
            "actualY": 3
        },
        {
            "url": "/img/img_012.jpg",
            "originX": 2,
            "originY": 3,
            "actualX": 2,
            "actualY": 3
        },
        {
            "url": "/img/img_013.jpg",
            "originX": 3,
            "originY": 3,
            "actualX": 3,
            "actualY": 3
        },
        {
            "url": "/img/img_014.jpg",
            "originX": 4,
            "originY": 3,
            "actualX": 4,
            "actualY": 3
        },
        {
            "url": "/img/img_015.jpg",
            "originX": 5,
            "originY": 3,
            "actualX": 5,
            "actualY": 3
        },
        {
            "url": "/img/img_016.jpg",
            "originX": 1,
            "originY": 4,
            "actualX": 1,
            "actualY": 4
        },
        {
            "url": "/img/img_017.jpg",
            "originX": 2,
            "originY": 4,
            "actualX": 2,
            "actualY": 4
        },
        {
            "url": "/img/img_018.jpg",
            "originX": 3,
            "originY": 4,
            "actualX": 3,
            "actualY": 4
        },
        {
            "url": "/img/img_019.jpg",
            "originX": 4,
            "originY": 4,
            "actualX": 4,
            "actualY": 4
        },
        {
            "url": "/img/img_020.jpg",
            "originX": 5,
            "originY": 4,
            "actualX": 5,
            "actualY": 4
        }
    ]
}