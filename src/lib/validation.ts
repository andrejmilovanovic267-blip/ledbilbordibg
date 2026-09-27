import { z } from 'zod'

const baseLeadFormSchema = z.object({
  fullName: z.string().min(2, 'Ime mora imati najmanje 2 karaktera'),
  company: z.string().optional(),
  email: z.string().email('Nevažeća email adresa'),
  phone: z.string().optional(),
  message: z.string().optional(),
  website: z.string().optional(), // honeypot
})

export function createLeadFormSchema(showLocationSelect: boolean) {
  return baseLeadFormSchema.extend({
    locationInterest: showLocationSelect
      ? z.array(z.string()).min(1, 'Odaberite region(e) oglašavanja.')
      : z.array(z.string()).optional(),
    packageInterest: z.string().min(1, 'Odaberite paket.'),
  })
}

export const leadFormSchema = createLeadFormSchema(true)

export type LeadFormData = z.infer<typeof leadFormSchema>
