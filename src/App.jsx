import { useEffect } from "react"
import { useGame } from "./hooks/useGame"
import { useState } from "react"



function App() {

  const { game } = useGame()

  const [movingPiece, setMovingPiece] = useState()


  useEffect(() => {
    if(movingPiece){
      console.log(movingPiece)
    }
  })

  return (
    <>
      <main className="absolute inset-0 h-full w-full bg-cBlack 
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
        bg-[size:24px_24px] flex justify-center items-center"
      > 
        {/* Grid */}
        <section className="bg-neutral-800 rounded-sm grid overflow-hidden 
        grid-cols-4 grid-rows-4 w-[95vw] h-[95vw] xl:w-[40vw] xl:h-[40vw]">
          {
            game.map((row) => (
              row.map((piece) => (
                <div 
                  className={`flex justify-center items-center border-[1px] border-red-400
                  text-5xl text-white font-semibold ${!piece.isEmpty && (piece.color == "red" ? "bg-red-500" : "bg-blue-500")}`}
                  key={piece.index}
                  draggable={!piece.isEmpty}
                  onDragStart={() => {setMovingPiece(piece)}}
                >
                  {!piece.isEmpty && piece.index}
                </div>
              ))
            ))
          }
        </section>
      </main>
    </> 
  )
}

export default App
