import { useCallback, useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { FiChevronDown, FiX } from 'react-icons/fi'
import type { HolidayScope } from '../../../types/holiday'

type TripPlanPopupProps = {
  holidayScope: HolidayScope
}

const TRIP_POPUP_DELAY_MS = 150000
const TRIP_POPUP_DISMISSED_KEY = 'indikosh-trip-plan-popup-dismissed'
const PROMO_IMAGE =
  'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1400&q=85'

const destinationOptions: Record<HolidayScope, string[]> = {
  international: ['Bhutan', 'Bali', 'Thailand', 'Dubai', 'Singapore', 'Vietnam', 'Sri Lanka', 'Malaysia'],
  domestic: ['Kashmir', 'Himachal', 'Kerala', 'Goa', 'Rajasthan', 'Uttarakhand', 'Andaman'],
}

const fieldClass =
  'h-12 w-full rounded-md border border-[#d8d8d8] bg-white px-3.5 text-sm font-medium text-[#202020] outline-none transition-colors placeholder:text-[#747984] focus:border-[#1f6be3] md:h-[50px] md:text-base'

const selectClass =
  'h-12 w-full appearance-none rounded-md border border-[#1f6be3] bg-white px-3.5 pr-10 text-sm font-medium text-[#111111] outline-none md:h-[50px] md:text-base'

const legendClass = 'ml-3 px-1 text-sm font-bold leading-none text-[#0f62fe]'

export default function TripPlanPopup({ holidayScope }: TripPlanPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  const closePopup = useCallback(() => {
    window.sessionStorage.setItem(TRIP_POPUP_DISMISSED_KEY, 'true')
    setIsVisible(false)
  }, [])

  useEffect(() => {
    if (window.sessionStorage.getItem(TRIP_POPUP_DISMISSED_KEY) === 'true') {
      return undefined
    }

    const timerId = window.setTimeout(() => {
      setIsVisible(true)
    }, TRIP_POPUP_DELAY_MS)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [])

  useEffect(() => {
    if (!isVisible) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closePopup()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('overflow-hidden')

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('overflow-hidden')
    }
  }, [closePopup, isVisible])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    closePopup()
  }

  if (!isVisible) {
    return null
  }

  const destinations = destinationOptions[holidayScope]

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/60 px-3 py-5 backdrop-blur-sm md:px-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePopup()
        }
      }}
    >
      <section
        className="grid max-h-[calc(100vh-40px)] w-full max-w-[1180px] overflow-y-auto rounded-2xl bg-white text-[#111111] shadow-[0_28px_90px_rgba(0,0,0,0.42)] lg:grid-cols-[0.92fr_1fr]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="trip-plan-popup-title"
      >
        <div className="relative min-h-[280px] overflow-hidden rounded-t-2xl bg-[#072f3d] lg:min-h-[650px] lg:rounded-l-2xl lg:rounded-tr-none">
          <img
            className="h-full w-full object-cover"
            src={PROMO_IMAGE}
            alt="Mountain valley trip"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#003247]/35 via-transparent to-black/72" />
          <div className="absolute inset-x-0 top-0 px-7 py-8 text-white md:px-10">
            <p className="text-sm font-black uppercase tracking-widest md:text-base">Bike &amp; Backpacking Trips</p>
            <h2 className="mt-2 font-serif text-5xl font-black uppercase leading-none text-cyan-300 md:text-7xl">
              Zanskar
            </h2>
            <p className="font-serif text-4xl italic leading-none text-white md:text-6xl">Valley</p>
          </div>
          <div className="absolute inset-x-0 bottom-0 px-7 py-8 text-white md:px-10">
            <p className="max-w-[300px] text-2xl font-black uppercase leading-none tracking-wide md:text-3xl">
              Starting From Rs 28,000
            </p>
            <p className="mt-1 text-sm font-black uppercase tracking-widest">Per Person</p>
          </div>
        </div>

        <div className="relative px-5 py-6 md:px-10 md:py-9">
          <button
            type="button"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-2xl text-black transition-colors hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6be3]"
            aria-label="Close trip plan form"
            onClick={closePopup}
          >
            <FiX aria-hidden="true" />
          </button>

          <div className="mb-8 flex items-center gap-4 border-b border-[#dedede] pb-3 pr-12">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#e9f5ff]">
              <img className="h-7 w-7 object-contain" src="/company_logo.png" alt="" />
            </span>
            <h2 id="trip-plan-popup-title" className="text-2xl font-black leading-tight text-black md:text-3xl">
              Plan Your Next Trip
            </h2>
          </div>

          <form className="grid gap-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="sr-only">First Name</span>
                <input className={fieldClass} name="firstName" placeholder="First Name *" required />
              </label>

              <label className="block">
                <span className="sr-only">Last Name</span>
                <input className={fieldClass} name="lastName" placeholder="Last Name" />
              </label>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="sr-only">Email</span>
                <input className={fieldClass} name="email" type="email" placeholder="Email" />
              </label>

              <div className="flex h-12 overflow-hidden rounded-md border border-[#1f6be3] bg-white md:h-[50px]">
                <label className="sr-only" htmlFor="trip-plan-country-code">
                  Country Code
                </label>
                <select
                  id="trip-plan-country-code"
                  className="w-[68px] border-r border-[#d8d8d8] bg-[#f6f7f9] px-2 text-sm font-bold text-[#1b1b1b] outline-none"
                  name="countryCode"
                  defaultValue="+91"
                >
                  <option value="+91">IN</option>
                  <option value="+1">US</option>
                  <option value="+44">UK</option>
                  <option value="+971">UAE</option>
                </select>
                <label className="flex-1">
                  <span className="sr-only">Phone Number</span>
                  <input
                    className="h-full w-full px-4 text-sm font-medium text-[#111111] outline-none placeholder:text-[#747984] md:text-base"
                    name="phone"
                    inputMode="tel"
                    placeholder="+91"
                  />
                </label>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="sr-only">Departure City</span>
                <input className={fieldClass} name="departureCity" placeholder="Departure City *" required />
              </label>

              <fieldset className="relative rounded-md border border-[#1f6be3]">
                <legend className={legendClass}>Number of Pax *</legend>
                <select className={selectClass} name="pax" defaultValue="" required>
                  <option value="" disabled>
                    Select Pax
                  </option>
                  <option value="1">1 Pax</option>
                  <option value="2">2 Pax</option>
                  <option value="3-4">3-4 Pax</option>
                  <option value="5-8">5-8 Pax</option>
                  <option value="9+">9+ Pax</option>
                </select>
                <FiChevronDown
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-lg text-[#111111]"
                  aria-hidden="true"
                />
              </fieldset>
            </div>

            <fieldset className="relative rounded-md border border-[#1f6be3]">
              <legend className={legendClass}>What kind of trip do you prefer? *</legend>
              <select className={selectClass} name="tripType" defaultValue="Backpacking Trips" required>
                <option>Backpacking Trips</option>
                <option>Family Holidays</option>
                <option>Honeymoon Packages</option>
                <option>Luxury Escapes</option>
                <option>Custom Trip</option>
              </select>
              <FiChevronDown
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-lg text-[#111111]"
                aria-hidden="true"
              />
            </fieldset>

            <fieldset className="relative rounded-md border border-[#1f6be3]">
              <legend className={legendClass}>Where do you want to go?</legend>
              <select className={selectClass} name="destination" defaultValue={destinations[0]}>
                {destinations.map((destination) => (
                  <option key={destination}>{destination}</option>
                ))}
              </select>
              <FiChevronDown
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-lg text-[#111111]"
                aria-hidden="true"
              />
            </fieldset>

            <label className="flex items-start gap-3 text-sm font-medium leading-tight text-black md:text-base">
              <input
                className="mt-0.5 h-6 w-6 shrink-0 rounded accent-[#1f6be3]"
                name="marketingConsent"
                type="checkbox"
                defaultChecked
              />
              <span>Keep me updated with offers, trips, and travel inspiration via email, SMS, and WhatsApp</span>
            </label>

            <div className="flex justify-center pt-5">
              <button
                type="submit"
                className="inline-flex h-12 min-w-[146px] items-center justify-center rounded-md bg-[#1f6be3] px-7 text-base font-black text-white transition-colors hover:bg-[#1658c7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f6be3]"
              >
                Let's Travel
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}
