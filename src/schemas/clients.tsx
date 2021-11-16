import * as z from "zod";

export const CreateClient = z.object({
  country: z.string(),
  isInsured: z.boolean(),
  isTakingMeds: z.boolean(),
  hadSeenTherapist: z.boolean(),
  languages: z
    .string()
    .array()
    .nonempty(),
  onboardingStep: z.number(),
  city: z.string(),
  state: z.string(),
  birthDate: z.string(),
  faithId: z.number(),
});
