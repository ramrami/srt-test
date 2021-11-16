/* eslint-disable no-use-before-define */
import { languagesArray } from "../../helpers/languageList"

import React from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { Chip, TextField } from "@material-ui/core"
import { FieldAttributes, useField } from "formik"

type LanguageSettingInputProps = { label: string; setFieldValue: any } & FieldAttributes<{}>

export const LanguageSettingInput: React.FC<LanguageSettingInputProps> = ({
  label,
  setFieldValue,
  ...props
}) => {
  let [field, meta] = useField(props)

  const handleChange = (_event: any, value: string[]) => {
    setFieldValue("preferredLanguages", value)
  }

  const errorText = meta.error && meta.touched ? meta.error : ""
  return (
    <div className="w-96">
      <Autocomplete
        multiple
        id="tags-outlined"
        options={languagesArray.map((option) => option.value)}
        defaultValue={[languagesArray[0]!.value]}
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
            {...params}
            variant="filled"
            label={label}
            placeholder="Languages"
            error={!!errorText}
            helperText={errorText}
          />
        )}
      />
    </div>
  )
}
