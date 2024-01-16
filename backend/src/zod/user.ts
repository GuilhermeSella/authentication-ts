import {z} from 'zod'

export const schemaAuthenticateValidationUser = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(4)
})