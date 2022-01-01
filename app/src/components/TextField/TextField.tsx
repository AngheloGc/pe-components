import { useUniqueId } from '../../hooks'
import { Label } from '../Label'
import { REGULAR_EXPRESSIONS } from './constants'
import { TextFieldProps } from './props'
import { Error, StyledTextField, TextFieldWrapper } from './styled'

export const TextField: React.FC<TextFieldProps> = ({
  label,
  disabled,
  defaultValue,
  placeholder,
  error,
  onChange,
  pattern: patternType,
  inputSize,
}) => {
  const uuid = useUniqueId()
  const pattern = patternType && REGULAR_EXPRESSIONS[patternType].toString()

  return(
    <TextFieldWrapper>
      {label && <Label forInput={uuid}>{label}</Label>}
      <StyledTextField
        id={uuid}
        type="text"
        {...{ defaultValue, placeholder, disabled, onChange, pattern, inputSize }}
      />
      {error && <Error>{error}</Error>}
    </TextFieldWrapper>
  )
}