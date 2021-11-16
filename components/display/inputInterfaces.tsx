export interface InputProps {
  name: string
  label: string
  placeholder: string
  helperText?: string
  id?: string
  isRequired?: boolean
  rows?: number
  size?: "small"
  onChange: any
  onBlur: any
  value: any
}

export interface MultiselectProps {
  name: string
  options: {
    value: string | number
  }[]
  placeholder: string
  label: string
  isRequired?: boolean
  onChange: any
  onBlur: any
  value: any
}

export interface CheckboxProps {
  name: string
  label: string
  icon?: JSX.Element
  checkedIcon?: JSX.Element
  onChange: any
  onBlur: any
  value: any
  checked?: boolean
}

export interface SwitchInputProps {
  label: string
  name: string
  isDisabled?: boolean
  color?: "default" | "primary" | "secondary" | undefined
  isChecked?: boolean
  onChange: any
  onBlur: any
  value: any
}

export interface CountrySelectionProps {
  label: string
  onChange: any
  onBlur: any
  value: any
}
