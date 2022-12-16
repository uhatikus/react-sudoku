import { GRID, NUMBERS } from "../../typings"
import {shuffle} from '../../utils'

const gridExample = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
/**
 * Function which does something with Sudoku grid
 * @param grid 9x9 Sudoku grid
 */
function FillGrid(grid: GRID){
    let row = 0;
    let col = 0;

    for (let i = 0; i < 9; i++){
        for (let j = 0; j < 9; j++){
            row = i;
            col = j;

            if (grid[row][col] === 0){
                shuffle(numbers)
                for (let value of numbers){
                    // is it not in the grid row?
                    // is it not in the grid col?
                    // is it not in the grid square?
                    // if this is te case
                    grid[row][col] = value
                    // 
                }
            }
        }
    }
}

export default FillGrid