import { z } from "zod";

export const licensesNestedSchema = () => {
  return z
    .object({
      name: z.string(),
      state: z.string().optional(),
      country: z.string(),
      photoUrl: z.string(),
    })
    .array();
};
