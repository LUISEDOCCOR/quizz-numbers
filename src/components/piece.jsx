export const Piece = ({piece, setMovingPiece}) => {
    return (
        <div 
            className={`w-full h-full text-white font-semibold
            flex justify-center items-center border-[1px] border-neutral-100
            ${piece.color == "red" ? "bg-red-500" : "bg-blue-500"} text-2xl xl:text-5xl`}
            draggable="true" 
            onDragStart={() => {setMovingPiece(piece)}}
            id={`piece-${piece.index}`}
            >
                {piece.index}
        </div>
    )
}