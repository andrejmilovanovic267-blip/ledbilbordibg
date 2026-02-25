'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { leadFormSchema, type LeadFormData } from '@/lib/validation'
import { locationsData } from '@/lib/locationsData'
import { cn } from '@/lib/utils'

interface LeadFormProps {
  className?: string
  showLocationSelect?: boolean
  title?: string
  description?: string
  /** When true, omit card wrapper and title/description (for embedding in a two-column layout). */
  embedded?: boolean
  /** Preselect this location id in the "Interesovanje za lokaciju" select (must match locationsData id). */
  defaultLocationId?: string
  /** Preselect this package value in the "Interesovanje za paket" select (e.g. BASIC, STANDARD, PREMIUM). */
  defaultPackageId?: string
}

export function LeadForm({
  className,
  showLocationSelect = true,
  title = 'Pošaljite upit',
  description,
  embedded = false,
  defaultLocationId,
  defaultPackageId,
}: LeadFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      locationInterest: defaultLocationId ?? '',
      packageInterest: defaultPackageId ?? '',
    },
  })

  const onSubmit = async (data: LeadFormData) => {
    setSubmitError(null)
    const payload = {
      name: data.fullName,
      email: data.email,
      phone: data.phone ?? '',
      location: data.locationInterest ?? '',
      package: data.packageInterest ?? '',
      message: data.message ?? '',
      website: data.website ?? '',
      pageUrl: typeof window !== 'undefined' ? window.location.href : '',
    }
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok) {
        setSubmitError('Došlo je do greške. Pokušajte ponovo.')
        return
      }
      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch {
      setSubmitError('Došlo je do greške. Pokušajte ponovo.')
    }
  }

  if (isSubmitted) {
    const successContent = (
      <>
        <div className="text-green-600 text-4xl mb-4">✓</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Hvala vam!
        </h3>
        <p className="text-gray-600">
          Vaš upit je uspešno poslat. Javićemo vam se uskoro.
        </p>
      </>
    )
    if (embedded) {
      return <div className={cn('py-2 text-center', className)}>{successContent}</div>
    }
    return (
      <div className={cn('card p-8 text-center', className)}>
        {successContent}
      </div>
    )
  }

  const formContent = (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          type="text"
          {...register('website')}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden
        />
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Ime i prezime *
          </label>
          <input
            id="fullName"
            type="text"
            {...register('fullName')}
            className="input"
            placeholder="Ivan Petrović"
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Firma
          </label>
          <input
            id="company"
            type="text"
            {...register('company')}
            className="input"
            placeholder="Naziv firme"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            {...register('email')}
            className="input"
            placeholder="ivan@primer.rs"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <input
            id="phone"
            type="tel"
            {...register('phone')}
            className="input"
            placeholder="+381 11 123 4567"
          />
        </div>

        {showLocationSelect && (
          <div>
            <label htmlFor="locationInterest" className="block text-sm font-medium text-gray-700 mb-1">
              Interesovanje za lokaciju
            </label>
            <select
              id="locationInterest"
              {...register('locationInterest')}
              className="input"
            >
              <option value="">Izaberite lokaciju</option>
              {locationsData.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          <label htmlFor="packageInterest" className="block text-sm font-medium text-gray-700 mb-1">
            Interesovanje za paket
          </label>
          <select
            id="packageInterest"
            {...register('packageInterest')}
            className="input"
          >
            <option value="">Izaberite paket</option>
            <option value="BASIC">BASIC (199€ mesečno)</option>
            <option value="STANDARD">STANDARD (249€ mesečno)</option>
            <option value="PREMIUM">PREMIUM (399€ mesečno)</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Poruka (opciono)
          </label>
          <textarea
            id="message"
            {...register('message')}
            rows={4}
            className="input"
            placeholder="Vaša poruka..."
          />
          <p className="mt-1 text-sm text-gray-500">
            Napišite dodatne informacije ako imate specifične zahteve
          </p>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {submitError && (
          <p className="text-sm text-red-600">{submitError}</p>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Slanje...' : 'Pošaljite upit'}
        </button>
      </form>
  )

  if (embedded) {
    return <div className={cn('min-w-0', className)}>{formContent}</div>
  }

  return (
    <div className={cn('card p-6 sm:p-8', className)}>
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        {description && (
          <p className="text-gray-600 mb-6">{description}</p>
        )}
      </div>
      {formContent}
    </div>
  )
}
