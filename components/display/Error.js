import { Field } from "react-final-form"
const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) => (touched && error ? <span>{error}</span> : null)}
  />
)

const required = (value) => (value ? undefined : "Required")
export { Error, required }
