import React from "react"
import { TextField } from "@material-ui/core"

export default function PasswordTextField() {
  return (
    <TextField
      required
      id="outlined-password-input"
      label="Password"
      type="password"
      autoComplete="current-password"
      variant="outlined"
    />
  )
}
