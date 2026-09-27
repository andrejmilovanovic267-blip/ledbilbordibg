'use client'

import { useEffect, useRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createLeadFormSchema, type LeadFormData } from '@/lib/validation'
import { cn } from '@/lib/utils'

const regionOptions = [
  'Novi Beograd',
  'Zemun',
  'Vračar',
  'Stari grad',
  'Savski venac',
  'Karaburma',
  'Autoput',
  'Vrnjačka Banja',
  'Kragujevac',
]

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
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false)
  const locationDropdownRef = useRef<HTMLDivElement | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    control,
    watch,
  } = useForm<LeadFormData>({
    resolver: zodResolver(createLeadFormSchema(showLocationSelect)),
    defaultValues: {
      locationInterest: showLocationSelect ? (defaultLocationId ? [defaultLocationId] : []) : [],
      packageInterest: defaultPackageId ?? '',
    },
  })

  const selectedRegions = watch('locationInterest') ?? []

  useEffect(() => {
    if (!isLocationDropdownOpen) return

    const handlePointerDown = (event: MouseEvent) => {
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target as Node)) {
        setIsLocationDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [isLocationDropdownOpen])

  const onSubmit = async (data: LeadFormData) => {
    setSubmitError(null)
    const normalizedLocation = Array.isArray(data.locationInterest)
      ? data.locationInterest.filter(Boolean)
      : typeof data.locationInterest === 'string'
        ? [data.locationInterest].filter(Boolean)
        : []

    const payload = {
      name: data.fullName,
      email: data.email,
      phone: data.phone ?? '',
      location: normalizedLocation,
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
            placeholder="kontakt@ledbilbordibg.rs"
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
            placeholder="061 730 7980"
          />
        </div>

        {showLocationSelect && (
          <div ref={locationDropdownRef}>
            <label htmlFor="locationInterest" className="block text-sm font-medium text-gray-700 mb-1">
              Region oglašavanja *
            </label>
            <Controller
              name="locationInterest"
              control={control}
              render={({ field }) => {
                const currentSelection = Array.isArray(field.value) ? field.value : []

                const toggleRegion = (region: string) => {
                  const nextSelection = currentSelection.includes(region)
                    ? currentSelection.filter((item) => item !== region)
                    : [...currentSelection, region]

                  field.onChange(nextSelection)
                }

                return (
                  <div className="relative">
                    <div
                      id="locationInterest"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          setIsLocationDropdownOpen((prev) => !prev)
                        }
                      }}
                      onClick={() => setIsLocationDropdownOpen((prev) => !prev)}
                      className="input flex min-h-[42px] cursor-pointer items-center justify-between gap-2 text-left"
                      aria-expanded={isLocationDropdownOpen}
                    >
                      <div className="flex min-w-0 flex-wrap items-center gap-1">
                        {currentSelection.length > 0 ? (
                          currentSelection.map((region) => (
                            <span
                              key={region}
                              className="inline-flex items-center gap-1 rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700"
                            >
                              <span>{region}</span>
                              <button
                                type="button"
                                onClick={(event) => {
                                  event.stopPropagation()
                                  toggleRegion(region)
                                }}
                                className="leading-none text-blue-700 hover:text-blue-900"
                                aria-label={`Ukloni ${region}`}
                              >
                                ×
                              </button>
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-500">Odaberite region(e) oglašavanja</span>
                        )}
                      </div>
                      <span className="shrink-0 text-gray-500">{isLocationDropdownOpen ? '▴' : '▾'}</span>
                    </div>

                    {isLocationDropdownOpen && (
                      <div className="absolute z-20 mt-1 w-full rounded-md border border-gray-200 bg-white shadow-lg">
                        {regionOptions.map((region) => {
                          const isSelected = currentSelection.includes(region)

                          return (
                            <button
                              key={region}
                              type="button"
                              onClick={(event) => {
                                event.preventDefault()
                                event.stopPropagation()
                                toggleRegion(region)
                              }}
                              className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm ${
                                isSelected ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
                              }`}
                            >
                              <span>{region}</span>
                              {isSelected && <span className="text-blue-700">✓</span>}
                            </button>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }}
            />
            {errors.locationInterest && (
              <p id="locationInterest-error" className="mt-1 text-sm text-red-600">
                {errors.locationInterest.message}
              </p>
            )}
          </div>
        )}

        <div>
          <label htmlFor="packageInterest" className="block text-sm font-medium text-gray-700 mb-1">
            Interesovanje za paket *
          </label>
          <select
            id="packageInterest"
            {...register('packageInterest')}
            className="input"
            required
            aria-invalid={!!errors.packageInterest}
            aria-describedby={errors.packageInterest ? 'packageInterest-error' : undefined}
          >
            <option value="">Izaberite paket</option>
            <option value="BASIC">BASIC</option>
            <option value="STANDARD">STANDARD</option>
            <option value="PREMIUM">PREMIUM</option>
          </select>
          {errors.packageInterest && (
            <p id="packageInterest-error" className="mt-1 text-sm text-red-600">
              {errors.packageInterest.message}
            </p>
          )}
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
