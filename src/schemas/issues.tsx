import { z } from "zod";
import { zodIdObject } from "./schemaHelpers";

export const specializedIssuesNestedSchema = () => {
  return z
    .object({
      id: zodIdObject(),
    })
    .array();
};
