import { z } from "zod";

export const zodIdObject = () => {
  return z.number().positive({ message: "Needs an ID" });
};
export const zodIdOptional = () => {
  return zodIdObject().optional();
};
