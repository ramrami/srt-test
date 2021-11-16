import React from "react"
import { FormControlLabel, Switch } from "@material-ui/core"
import { SwitchInputProps } from "../../helpers/inputInterfaces"

export default function SwitchInput(props: SwitchInputProps) {
  const [state, setState] = React.useState({
    checked: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.id]: event.target.checked })
  }

  return (
    <FormControlLabel
      control={
        <Switch
          disabled={props.isDisabled || false}
          checked={state.checked}
          onChange={handleChange}
          name={props.name}
          color={props.color}
          id="checked"
        />
      }
      label={props.label}
    />
  )
}
