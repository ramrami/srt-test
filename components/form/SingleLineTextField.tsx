import React from "react"
import { TextField } from "@material-ui/core"
import { FieldAttributes, useField } from "formik"

// props can be isRequired, label, helperText

type SingleLineTextFieldProps = { label: string; startAdornment?: any } & FieldAttributes<{}>

export const SingleLineTextField: React.FC<SingleLineTextFieldProps> = ({
  label,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField(props)
  const errorText = meta.error && meta.touched ? meta.error : ""

  return (
    <TextField
      {...field}
      label={label}
      placeholder={placeholder}
      helperText={errorText}
      error={!!errorText}
      variant="outlined"
      fullWidth
      type={props.type || ""}
      InputProps={{
        startAdornment: props.startAdornment || "",
      }}
    />
  )
}
