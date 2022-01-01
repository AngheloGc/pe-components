import styled, { css } from 'styled-components'

export const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-family: 'Roboto', sans-serif;
`

interface StyledTextFieldProps {
  inputSize?: 'small' | 'medium' | 'large' | 'fullWidth'
}

export const StyledTextField = styled.input<StyledTextFieldProps>`
  font-size: 0.9rem;
  border-radius: 4px;
  border: 1px solid #808080;
  padding: 0.5rem 0.75rem;
  color: #333333;

  &:disabled {
    background-color: #EDEDED;
    color: #ADADAD;
    border: 1px solid #ADADAD;
    user-select: none;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    border: 1px solid #333333;
  }

  ${(props) => props.inputSize === 'fullWidth' && css`
    max-width: 100%;
    width: 100%;
  `}

  ${(props) => props.inputSize === 'large' && css`
    max-width: 20rem;
    width: 20rem;
  `}

  ${(props) => props.inputSize === 'medium' && css`
    max-width: 16rem;
    width: 16rem;
  `}

  ${(props) => props.inputSize === 'small' && css`
    max-width: 12rem;
    width: 12rem;
  `}
`

export const Error = styled.span`
  font-size: 0.8rem;
  color: #FF5050;
`