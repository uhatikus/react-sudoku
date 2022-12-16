import { GRID, NUMBERS } from '../../../typings'

interface IInput {
  grid: GRID
  col: number
  value: NUMBERS
}
/**
 * Function that returns true is the value is already being used in the current grid col
 * @param input Object with 9x9 Sudoku Grid, col index and vale
 * @returns
 */
function isInCol({ grid, col, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) {
      return true
    }
  }
  return false
}

export default isInCol
