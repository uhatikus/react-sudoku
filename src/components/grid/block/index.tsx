import React, { FC, Children } from 'react'
import { useSelector } from 'react-redux'

import { IReducer } from '../../../reducers'
import { N } from '../../../typings'

import { Container } from './styles'

interface IProps {
  colIndex: number
  rowIndex: number
}

interface IState {
  value: N
}

const Block: FC<IProps> = ({ rowIndex, colIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid }) => ({
    value: grid ? grid[rowIndex][colIndex] : 0,
    // value: 0,
  }))
  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}>
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
