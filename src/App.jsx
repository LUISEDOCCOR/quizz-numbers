import { usePieces, useBoard } from "./hooks/hooks"
import { Conatiner } from "./components/container"
import { Piece } from "./components/piece"
import { useState } from "react"
import { SIZEX, SIZEY } from "./hooks/hooks"


function App() {

  const [ pieces, setPieces ] = usePieces()
  const [ board, setBoard ] = useBoard() 
  const [movingPiece, setMovingPiece] = useState()

  return (
    <>
      <main className="absolute inset-0 h-full w-full bg-cBlack 
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] 
        bg-[size:24px_24px] flex justify-center items-center"
      > 
        {/* Grid */}
        <section className="bg-neutral-800 rounded-sm grid overflow-hidden 
        grid-cols-4 grid-rows-4 w-[95vw] h-[95vw] xl:w-[40vw] xl:h-[40vw] border-[1px] border-neutral-600">
          {
            board.map((container) => {
              const piece = pieces.find(p => p.index == container.index)
              return (
                <Conatiner board={board} setBoard={setBoard} movingPiece={movingPiece} key={container.index} container={container}>
                  {container.index != (SIZEX * SIZEY) && (
                    <Piece setMovingPiece={setMovingPiece}  key={piece.index} piece={piece}/>
                  )}
                </Conatiner> 
              )
            })
          }
        </section>
      </main>
    </> 
  )
}

export default App
