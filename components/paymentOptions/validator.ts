import { paymentMethodsNestedSchema } from "app/payment-methods/validator"
import { zodIdObject } from "app/validators/helpers/validationHelpers"
import { z } from "zod"

export const paymentOptionsNestedSchema = () => {
  z.object({
    id: zodIdObject().optional(),
    settingType: z.string(),
    slidingScale: z.boolean(),
    minRate: z.number(),
    maxRate: z.number().optional(),
    category: z.string(),
    paymentMethods: paymentMethodsNestedSchema(),
  })
}
