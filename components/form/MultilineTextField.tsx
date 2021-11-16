import React from "react"

import { TextField } from "@material-ui/core"
import { FieldAttributes, useField } from "formik"
// props can be isRequired, label, helperText, rows

type MultiLineTextFieldProps = {
  label: string
  isRequired?: boolean
  helperText?: string
  rows?: number
} & FieldAttributes<{}>

export const MultiLineTextField: React.FC<MultiLineTextFieldProps> = ({
  isRequired,
  helperText,
  rows,
  label,
  ...props
}) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""
  return (
    <TextField
      multiline
      fullWidth
      {...field}
      error={!!errorText}
      label={label}
      required={isRequired || false}
      helperText={errorText || helperText || null}
      variant="outlined"
      rows={rows || 7}
      className={""}
      placeholder={props.placeholder || ""}
    />
  )
}
