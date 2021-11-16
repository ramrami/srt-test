import React from "react"
import { FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from "@material-ui/core"
import { FieldAttributes } from "formik"

type TherapySettingInputProps = { name: any; setFieldValue: any } & FieldAttributes<{}>
enum Options {
  "online",
  "in-person",
  "either",
}

const TherapySettingInput: React.FC<TherapySettingInputProps> = ({ setFieldValue, ...props }) => {
  const [selectedValue, setSelectedValue] = React.useState("online")
  const handleChange = (event, value) => {
    setSelectedValue(value)
    setFieldValue("settingPreference", value)
  }
  return (
    <FormControl component="fieldset">
      <FormLabel required component="legend">
        Where would you like to do therapy?
      </FormLabel>
      <RadioGroup
        row
        aria-label="position"
        name="position"
        defaultValue="top"
        onChange={handleChange}
      >
        <FormControlLabel
          value="online"
          control={<Radio checked={selectedValue == "online"} required={true} color="primary" />}
          label="Online"
          labelPlacement="start"
        />
        <FormControlLabel
          value="inPerson"
          control={<Radio checked={selectedValue == "inPerson"} required={true} color="primary" />}
          label="In Person"
          labelPlacement="start"
        />
        <FormControlLabel
          value="either"
          control={<Radio checked={selectedValue == "either"} required={true} color="primary" />}
          label="Either"
          labelPlacement="start"
        />
      </RadioGroup>
    </FormControl>
  )
}

export default TherapySettingInput
