import { useState } from "react"
import sound from "../assets/sound.mp3"
import { useEffect } from "react"

export const Conatiner = ({ children, container, movingPiece }) => {
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
        if(container.isEmpty){
            playSound()
            const $piece = document.getElementById(`piece-${movingPiece.index}`)
            const $container = document.getElementById(`container-${container.index}`)
            console.log(movingPiece)
            $container.appendChild($piece)
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