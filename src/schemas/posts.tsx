import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import * as z from "zod";
import { specializedIssuesNestedSchema } from "./issues";

export const CreatePostSchema = z
  .object({
    expectations: z.string().min(100),
    problems: z.string().min(100),
    furtherInfo: z.string(),
    minBudget: z.number().positive(),
    maxBudget: z.number().positive(),
    settingPreference: z.string(),
    specializedIssues: specializedIssuesNestedSchema(),
    isInsured: z.boolean(),
    outOfPocketOnly: z.boolean(),
    anonymize: z.boolean(),
    anonymizationDate: z.date(),
  })
  .refine(
    ({ minBudget, maxBudget }) => minBudget <= maxBudget,
    "Minimum budget must be less than or equal to max budget"
  )
  .refine(
    (props) => !!!props.anonymizationDate != !!!props.anonymize,
    "You must select how many days  to anonymize post or to check you want to anonymize data"
  );
