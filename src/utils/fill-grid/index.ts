import { GRID, NUMBERS } from '../../typings'
import {
  shuffle,
  isInRow,
  isInCol,
  identifySquare,
  isInSquare,
  checkGrid,
} from '../../utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/**
 * Function which does something with Sudoku grid
 * @param grid 9x9 Sudoku grid
 */
function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  let broken = false
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      row = i
      col = j

      if (grid[row][col] === 0) {
        shuffle(numbers)
        for (let value of numbers) {
          if (!isInRow({ grid, row, value })) {
            if (!isInCol({ grid, col, value })) {
              const square = identifySquare({ grid, row, col })
              if (!isInSquare({ square, value })) {
                grid[row][col] = value
                if (checkGrid(grid)) {
                  return true
                } else if (fillGrid(grid)) {
                  return true
                }
              }
            }
          }
        }
        broken = true
        break
      }
    }
    if (broken) {
      break
    }
  }
  grid[row][col] = 0
}

export default fillGrid
