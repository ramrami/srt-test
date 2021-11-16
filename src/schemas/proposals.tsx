import * as z from "zod";
import { zodIdObject } from "./schemaHelpers";

export const proposalSchema = z.object({
  message: z.string().nonempty({ message: "Required" }),
});
export const proposalCreateSchema = z.object({
  message: z.string().nonempty({ message: "Required" }),
});
