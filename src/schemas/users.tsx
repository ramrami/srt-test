import * as z from "zod";

export const userCreateSchema = z.object({
  name: z.string().nonempty({ message: "Required" }),
  age: z.number().min(10),
});
export const userSignInSchema = z.object({
  name: z.string().nonempty({ message: "Required" }),
  age: z.number().min(10),
});
