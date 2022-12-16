import React, {FC, Children} from 'react'
import {Container} from './styles'

interface IProps {
    colIndex: number
    rowIndex: number
}

const Block: FC<IProps> = ({rowIndex, colIndex}) => {
    return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}/>
    )
}

export default Block