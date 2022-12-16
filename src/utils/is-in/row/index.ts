import { GRID, NUMBERS } from '../../../typings'

interface IInput {
    grid: GRID
    row: number
    value: NUMBERS
}
/**
 * Function that returns true is the value is already being used in the current grid row
 * @param input Object with 9x9 Sudoku Grid, row index and vale
 * @returns 
 */
function isInRow({grid, row, value}: IInput): boolean {
    return grid[row].includes(value)
}

export default isInRow