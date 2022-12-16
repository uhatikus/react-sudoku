import styled, { css } from 'styled-components'

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    max-top: 0;
    text-align: center;
  `}
`
