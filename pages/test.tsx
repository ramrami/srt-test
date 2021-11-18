
import type { NextPage } from 'next'
import { useState } from 'react';
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod/dist/zod"


const emailSchema = z.object({
  email: z.string().email().nonempty(),
}).required();

const passwordSchema = z.object({
  password: z.string().min(8).regex(/[0-9]/).regex(/[A-Z]/).regex(/[+!%&]/),
}).required();

const accountTypeSchema = z.object({
  accountType: z.enum(["client", "therapist"])
}).required();

const EmailForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<{email: string}>({
    resolver: zodResolver(emailSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Email
        <input type="email" {...register("email")} />
      </label>
      <p>{errors.email?.message}</p>
      
      <input type="submit" value="Next" />
    </form>
  )  
}

const PasswordForm = ({ onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<{password: string}>({
    resolver: zodResolver(passwordSchema)
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Password
        <input type="password" {...register("password")} />
      </label>
      <p>{errors.password?.message}</p>
      
      <input type="submit" value="Next" />
    </form>
  )  
}

const AccountTypeForm = () => {
  return (
    <div>Account type</div>
  )
}

const SignUpPage: NextPage = () => {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmitEmail = (data) => {
    setEmail(data.email);
    setStep("password");
  }

  const handleSubmitPassword = (data) => {
    setPassword(data.password);
    setStep("accountType");
  }

  return (
    <div>
      { step === "email" && <EmailForm onSubmit={handleSubmitEmail} /> }
      { step === "password" && <PasswordForm onSubmit={handleSubmitPassword} /> }
      { step === "accountType" && <AccountTypeForm /> }
    </div>
  )
}

export default SignUpPage