/* eslint-disable no-use-before-define */
import React from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { TextField } from "@material-ui/core/"
import { countries, CountryType } from "../../helpers/countriesList"
import { FieldAttributes, useField } from "formik"

// ISO 3166-1 alpha-2
// ⚠️ No support for IE 11
function countryToFlag(isoCode: string) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode
}

type CountrySelectFieldProps = { label: string; setFieldValue: any } & FieldAttributes<{}>

export const CountrySelectField: React.FC<CountrySelectFieldProps> = ({
  label,
  setFieldValue,
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
      options={countries as CountryType[]}
      className="xl:w-80"
      autoHighlight
      onChange={handleChange}
      onBlur={field.onBlur}
      getOptionLabel={(option) => option.label}
      renderOption={(option) => (
        <React.Fragment>
          <div className="prose">
            <span>{countryToFlag(option.code)}</span>
            {" " + option.label}
          </div>
        </React.Fragment>
      )}
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
