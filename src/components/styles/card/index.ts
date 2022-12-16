import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    border-radius: 20px;
    display: flex;
    /* flex: 1; */
    flex-direction: column;
    max-height: fit-content;
    /* max-width: fit-content; */
    padding: 15px;
  `}
`
