export interface TextFieldProps {
  label?: string
  placeholder?: string
  defaultValue?: string
  disabled?: boolean
  inputSize?: 'small' | 'medium' | 'large' | 'fullWidth'
  pattern?: 'onlyNumbers' | 'onlyLetters' | 'onlyLettersAndNumbers'
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}