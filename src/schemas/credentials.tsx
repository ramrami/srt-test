import { z } from "zod";

export const credentialsNestedSchema = () => {
  return z
    .object({
      major: z.string(),
      level: z.string(),
      type: z.string().optional(),
      description: z.string(),
      location: z.string(),
      yearAchieved: z.string(),
      display: z.boolean(),
      photoUrl: z.string(),
    })
    .array();
};
