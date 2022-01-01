import { LabelProps } from './props'
import { StyledLabel } from './styled'

export const Label: React.FC<LabelProps> = ({ forInput, children }) => {
  return(
    <StyledLabel htmlFor={forInput}>
      {children}
    </StyledLabel>
  )
}