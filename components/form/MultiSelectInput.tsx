/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { Chip, TextField } from "@material-ui/core"
import { FieldAttributes, useField } from "formik"

type MultiSelectInputProps = {
  label: string
  placeholder: string
  name: string
  setFieldValue: any
  options: { value: string }[]
  isRequired?: boolean
  helperText?: string
  className?: string
} & FieldAttributes<{}>

export const MultiSelectInput: React.FC<MultiSelectInputProps> = ({
  isRequired,
  helperText,
  placeholder,
  setFieldValue,
  label,
  options,
  className = "",
  ...props
}) => {
  const [field, meta] = useField(props)
  const [selectedValues, setSelectedValues] = useState([])
  const handleChange = (event: any, value: any) => {
    setSelectedValues(value)
    setFieldValue(props.name, value)
  }

  useEffect(() => {
    setFieldValue(props.name, [])
  }, [options, props.name, setFieldValue])

  const errorText = meta.error && meta.touched ? meta.error : helperText
  return (
    <div className={className}>
      <Autocomplete
        multiple
        id={`${props.name}-field`}
        options={options.map((option) => option.value)}
        freeSolo
        {...field}
        onChange={handleChange}
        renderTags={(value: string[], getTagProps) =>
          value.map((option: string, index: number) => (
            <Chip variant="outlined" label={option} key={index} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField
            // onChange={handleChange}
            {...params}
            inputProps={{
              ...params.inputProps,
              required: selectedValues.length === 0,
            }}
            error={!!errorText}
            helperText={errorText}
            variant="outlined"
            label={label}
            placeholder={placeholder}
            required={isRequired || false}
            InputLabelProps={{ required: true }}
          />
        )}
      />
    </div>
  )
}
