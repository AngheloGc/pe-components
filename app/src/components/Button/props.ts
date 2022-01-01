export interface ButtonProps {
  appearance?: 'primary' | 'secondary' | 'tertiary' | 'subtle' | 'link' | 'subtle-link'
  isDisabled?: boolean
  isLoading?: boolean
  fullWidth?: boolean
  handleClick?: () => void
}