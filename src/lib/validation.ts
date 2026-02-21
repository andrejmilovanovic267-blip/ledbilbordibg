import { z } from 'zod'

export const leadFormSchema = z.object({
  fullName: z.string().min(2, 'Ime mora imati najmanje 2 karaktera'),
  company: z.string().optional(),
  email: z.string().email('Nevažeća email adresa'),
  phone: z.string().optional(),
  message: z.string().optional(),
  locationInterest: z.string().optional(),
  packageInterest: z.string().optional(),
})

export type LeadFormData = z.infer<typeof leadFormSchema>
