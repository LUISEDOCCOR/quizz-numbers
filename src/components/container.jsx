import { useState } from "react"
import sound from "../assets/sound.mp3"
import { SIZEY } from "../hooks/hooks"

export const Conatiner = ({ children, container, movingPiece, setBoard, board }) => {
    const [isDragOver, setDragOver] = useState(false)

    const playSound = () => {
        new Audio(sound).play()
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        if (container.isEmpty) {
            setDragOver(true)
        }
    }

    const handleOnDrop = () => {
        setDragOver(false)
        const PossibleMoves = [
            container.index + SIZEY, 
            container.index - SIZEY, 
            container.index + 1,
            container.index - 1
        ]
        console.log(PossibleMoves)
        if(container.isEmpty && PossibleMoves.includes(movingPiece.index)){
            playSound()
            const $piece = document.getElementById(`piece-${movingPiece.index}`)
            const $container = document.getElementById(`container-${container.index}`)
            console.log(movingPiece)
            $container.appendChild($piece)
            const newBoard = board
            newBoard[container.index - 1].isEmpty = false
            newBoard[movingPiece.index - 1].isEmpty = true
            setBoard(newBoard)
        }
    }

    return (
        <div
            data-is-empty={container.isEmpty}
            id={`container-${container.index}`}
            className={`w-full h-full ${isDragOver ? "bg-neutral-600" : "bg-current"} transition-colors`}
            onDragOver={(e) => { handleDragOver(e)}}
            onDragLeave={() => {setDragOver(false)}}
            onDrop={handleOnDrop}
        >
            {children}
        </div>
    )
}