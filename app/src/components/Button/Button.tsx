import React from 'react'
import { ButtonProps } from './props'
import { Loading } from './Loading'
import { Button as StyledButton } from './styled'

export const Button: React.FC<ButtonProps> = ({
  appearance,
  isDisabled,
  isLoading,
  fullWidth,
  handleClick,
  children,
}) => {
  if(isLoading) {
    return (
      <StyledButton
        disabled
        isDisabled
        appearance={appearance}
        fullWidth={fullWidth}
      >
        <Loading />
      </StyledButton>
    )
  }
  return (
    <StyledButton
      onClick={handleClick}
      isDisabled={isDisabled || isLoading}
      disabled={isDisabled || isLoading}
      fullWidth={fullWidth}
      appearance={appearance || 'primary'}
    >
      {children}
    </StyledButton>
  )
}