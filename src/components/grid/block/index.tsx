import React, { FC, Children } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Dispatch, AnyAction } from 'redux'

import { IReducer, selectBlock } from '../../../reducers'
import { INDEX, N } from '../../../typings'

import { Container } from './styles'

interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  isActive: boolean
  isPuzzle: boolean
  value: N
}

const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
  const state = useSelector<IReducer, IState>(
    ({ challengeGrid, selectedBlock, workingGrid }) => ({
      isActive: selectedBlock
        ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
        : false,
      isPuzzle:
        challengeGrid && challengeGrid[rowIndex][colIndex] !== 0 ? true : false,
      value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
    })
  )
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  function handleClieck() {
    if (!state.isActive) {
      dispatch(selectBlock([rowIndex, colIndex]))
    }
  }

  return (
    <Container
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClieck}
      puzzle={state.isPuzzle}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
