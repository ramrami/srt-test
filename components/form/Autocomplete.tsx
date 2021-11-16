/* eslint-disable no-use-before-define */
import React from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { TextField } from "@material-ui/core/"

import { FieldAttributes, useField } from "formik"

type AutoCompleteProps = {
  label: string
  setFieldValue: any
  options: { name: string }[]
} & FieldAttributes<{}>

export const AutoCompleteField: React.FC<AutoCompleteProps> = ({
  label,
  setFieldValue,
  options,
  ...props
}) => {
  let [field, meta] = useField(props)

  const handleChange = (event: any) => {
    let setValue = event.target.lastChild?.data || "" //The '?' prevents the null from erroring out when unselected
    setFieldValue("country", setValue)
  }
  const errorText = meta.error && meta.touched ? meta.error : ""
  return (
    <Autocomplete
      id="country-select"
      options={options}
      className="xl:w-96"
      autoHighlight
      onChange={handleChange}
      onBlur={field.onBlur}
      getOptionLabel={(option) => option.name}
      renderOption={(option) => <React.Fragment>{option.name}</React.Fragment>}
      renderInput={(params) => (
        <TextField
          error={!!errorText}
          helperText={errorText}
          {...params}
          label={label}
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  )
}
