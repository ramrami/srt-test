import * as z from "zod";
import { credentialsNestedSchema } from "./credentials";
import { licensesNestedSchema } from "./licenses";

export const therapistUpdateSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  languages: z
    .string()
    .array()
    .nonempty(),
  description: z
    .string()
    .min(250, { message: "Must be 250 or more characters long" }),
  profileImageUrl: z.string().url({ message: "Invalid url" }),
  therapyProcess: z
    .string()
    .min(250, { message: "Must be 250 or more characters long" }),
  websiteUrl: z.string().url({ message: "Invalid url" }),
  phone: z.string(),
  modalities: z
    .string()
    .array()
    .nonempty(),
  demographics: z
    .string()
    .array()
    .nonempty(),
  specializedIssues: z
    .string()
    .array()
    .nonempty(),
  country: z.string(),
  onboardingStep: z.number(),
  licenses: licensesNestedSchema(),
  credentials: credentialsNestedSchema(),
});
