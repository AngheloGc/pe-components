import styled, { css } from 'styled-components'

const buttonCommonStyles = css`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  padding: 0.65rem 1.25rem;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  font-weight: 400;
  transition: all 0.1s ease-in-out;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(0.8);
  }
`

interface ButtonProps {
  appearance?: 'primary' | 'secondary' | 'tertiary' | 'subtle' | 'link' | 'subtle-link'
  isDisabled?: boolean
  fullWidth?: boolean
}

export const Button = styled.button`
  ${buttonCommonStyles}

  ${({ appearance }: ButtonProps) => appearance === 'primary' && css`
    background-color: #333333;
    color: #ffffff;
    border: 1px solid #333333;
  `}

  ${({ appearance }: ButtonProps) => appearance === 'secondary' && css`
    background-color: #ffffff;
    color: #505050;
    border: 1px solid #505050;
  `}

  ${({ appearance }: ButtonProps) => appearance === 'tertiary' && css`
    background-color: #5082CB;
    color: #ffffff;
    border: 1px solid #5082CB;
  `}

  ${({ isDisabled }: ButtonProps) => isDisabled && css`
    background-color: #A1A1A1;
    color: #ffffff;
    border: 1px solid #A1A1A1;

    cursor: not-allowed;

    &:hover {
      filter: brightness(1);
    }

    &:active {
      filter: brightness(1);
    }
  `}

  ${({ fullWidth }: ButtonProps) => fullWidth && css`
    width: 100%;
  `}
`


export const LoadingWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;

  & div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  & div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  & div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`

export const LoadingItem = styled.div`
  position: absolute;
  top: -10px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
`