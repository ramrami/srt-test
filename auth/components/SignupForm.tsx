import { useMutation } from "blitz"
import { LabeledTextField } from "app/core/components/form/LabeledTextField"
import { Form, FORM_ERROR } from "app/core/components/form/Form"
import signup from "app/auth/mutations/signup"
import { Signup } from "app/auth/validations"
import { Field } from "react-final-form"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)

  return (
    <div>
      <Form
        submitText="Create Account"
        schema={Signup}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          try {
            await signupMutation(values)
            props.onSuccess?.()
          } catch (error) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              // This error comes from Prisma
              return { email: "This email is already being used" }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >
        <LabeledTextField
          name="email"
          label="Email"
          placeholder="Email"
          className={
            "block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          }
        />
        <LabeledTextField
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          className={
            "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          }
        />

        <div className="mt-5 space-y-2 text-gray-700 ">
          <p>Are you a client or a therapist?</p>
          <div className="space-x-3 ">
            <label>
              <Field name="role" component="input" type="radio" value="client" />
              {" Client"}
            </label>
            <label>
              <Field name="role" component="input" type="radio" value="therapist" /> {" Therapist"}
            </label>
          </div>
        </div>
      </Form>
    </div>
  )
}

export default SignupForm
