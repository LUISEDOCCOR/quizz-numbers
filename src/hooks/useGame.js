const createGame = () => {

  var game = []
  const SIZEX = 4
  const SIZEY = 4
  var indexCounter =  1


  const getColor = (row, index) => {
    row + 1
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

  for(let i = 0; i < SIZEY; i++){
    var row = []  
    for(let j = 0; j < SIZEX; j++){
        row.push({  
          row: i,
          column: j,
          index: indexCounter,
          isEmpty: indexCounter == SIZEX * SIZEY ? true : false,
          color: getColor(i, indexCounter)
          
        })
      indexCounter ++
      }
    game.push(row)
  }
  return game 
}


export const useGame = () => {
  const game = createGame()
  return { game }
}



