import styled, {css} from 'styled-components'

export const Container = styled.div`
  ${({theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    `}
`

export const Row = styled.div`
  ${({theme }) => css`
    display: flex;
    flex-flow: row;
    margin: 0 0;
    `}
`
