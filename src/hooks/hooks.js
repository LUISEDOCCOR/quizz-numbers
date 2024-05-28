import { useState } from "react"

const SIZEX = 4
const SIZEY = 4

const createPieces = () => {

  const getColor = (index) => {
    const row = Math.floor(index / SIZEX);    
    if(row % 2 === 0){
      if(index % 2 == 0){
        return "red"
      }else {
        return "blue"
      }
    }else{
      if(index % 2 == 0){
        return "blue"
      }else {
        return "red"
      }
    }
  }

  var pieces = [] 
  for(let i = 0; i < ((SIZEX * SIZEY) - 1); i++){
    pieces.push({
      index: i + 1,
      color: getColor(i)
    })
  }
  return pieces
  
  
}

const createBoard = () => {
  var board = [] 
  for(let i = 0; i < (SIZEX * SIZEY); i++){
    board.push({
      isEmpty: i == 16 - 1 ? true: false,
      index: i + 1
    })
  }
  return board
}

export const usePieces = () => {
  const [pieces, setPieces] = useState(() => createPieces())
  return [ pieces, setPieces ]
}

export const useBoard = () => {
  const [board, setBoard] = useState(() => createBoard())
  return [ board, setBoard ]
}

