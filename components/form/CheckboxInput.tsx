import React from "react"
import { FormControlLabel, Checkbox } from "@material-ui/core"
import { CheckboxProps } from "../../helpers/inputInterfaces"

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank"
import CheckBoxIcon from "@material-ui/icons/CheckBox"

export const CheckboxInput = (props: CheckboxProps) => {
  const [state, setState] = React.useState({
    checkbox: false,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.id]: event.target.checked })
  }

  return (
    <FormControlLabel
      control={
        <Checkbox
          icon={props.icon || <CheckBoxOutlineBlankIcon />}
          checkedIcon={props.checkedIcon || <CheckBoxIcon />}
          {...props}
        />
      }
      label={props.label}
    />
  )
}
