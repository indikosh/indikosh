import { useState } from 'react'
import {
  FiArrowLeft,
  FiMenu,
  FiSmartphone,
} from 'react-icons/fi'
import SEO from '../../components/SEO'
import type { ChangeEvent, FormEvent } from 'react'

type LoginPageProps = {
  onHomeNavigate: () => void
}

const LOGIN_HERO_IMAGE = '/homePage_imag/HBG1.png'
const tripFieldClass =
  'h-14 w-full rounded-lg border border-[#dfe5f0] bg-[#f8f9fc] px-4 text-sm font-semibold text-[#303743] outline-none transition placeholder:text-[#687ca9] focus:border-[#216bd6] focus:bg-white focus:ring-4 focus:ring-[#216bd6]/10 sm:h-[58px] sm:px-5'

export default function LoginPage({ onHomeNavigate }: LoginPageProps) {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [destination, setDestination] = useState('')
  const [departureCity, setDepartureCity] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [isDepartureDateFocused, setIsDepartureDateFocused] = useState(false)
  const [message, setMessage] = useState('')

  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const nextPhoneNumber = event.target.value.replace(/\D/g, '').slice(0, 10)

    setPhoneNumber(nextPhoneNumber)
    if (message) setMessage('')
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (phoneNumber.length !== 10) {
      setMessage('Enter a valid 10 digit phone number.')
      return
    }

    setMessage(`OTP sent to +91 ${phoneNumber}`)
  }

  return (
    <>
      <SEO
        title="Login | Indikosh Travels"
        description="Login or create your Indikosh Travels account with phone OTP."
        canonicalUrl="https://indikosh.com/login"
      />
      <main className="grid min-h-screen bg-white text-on-surface lg:grid-cols-[3fr_2fr]">
        <section className="relative hidden min-h-screen overflow-hidden lg:block" aria-label="Travel community">
          <img
            src={LOGIN_HERO_IMAGE}
            alt="Traveler overlooking a mountain valley"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/58" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,30,64,0.74),rgba(0,30,64,0.34)_48%,rgba(0,0,0,0.18))]" />

          <div className="relative z-10 flex min-h-screen max-w-[720px] flex-col justify-center px-14 xl:px-20">
            <p className="mb-7 w-fit rounded-full bg-[#216bd6] px-5 py-2 text-xs font-bold uppercase text-white shadow-lg shadow-primary/25">
              India's #1 Social Travel Community
            </p>
            <h1 className="font-headline-xl text-5xl font-black leading-[0.98] text-white xl:text-7xl">
              Adventure
              <span className="block text-[#88b9ff]">Awaits You</span>
            </h1>
            <p className="mt-7 max-w-[520px] text-lg font-semibold leading-8 text-white">
              Join 80,000+ travelers on curated group trips across Ladakh, Spiti, Bali and beyond.
            </p>

            <dl className="mt-10 grid max-w-[460px] grid-cols-3 gap-8 text-white">
              <div>
                <dt className="text-3xl font-extrabold">80K+</dt>
                <dd className="mt-1 text-xs font-bold uppercase opacity-85">Travelers</dd>
              </div>
              <div>
                <dt className="text-3xl font-extrabold">5261+</dt>
                <dd className="mt-1 text-xs font-bold uppercase opacity-85">Trips</dd>
              </div>
              <div>
                <dt className="text-3xl font-extrabold">10000+</dt>
                <dd className="mt-1 text-xs font-bold uppercase opacity-85">Reviews</dd>
              </div>
            </dl>
          </div>

          <div className="absolute bottom-10 right-10 flex items-center gap-2" aria-hidden="true">
            <span className="h-1.5 w-8 rounded-full bg-[#39adff]" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/45" />
          </div>
        </section>

        <section
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-5 sm:px-8 lg:px-12"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(58, 95, 148, 0.16) 1px, transparent 0)',
            backgroundSize: '18px 18px',
          }}
        >
          <img
            src={LOGIN_HERO_IMAGE}
            alt=""
            className="absolute inset-0 h-full w-full object-cover lg:hidden"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-primary/50 lg:hidden" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(0,30,64,0.16)_45%,rgba(0,10,26,0.72)_100%)] lg:hidden" />

          <div className="relative z-10 flex min-h-[calc(100vh-40px)] w-full max-w-[430px] flex-col justify-center pt-20 lg:min-h-0 lg:block lg:pt-0">
            <div className="fixed left-0 right-0 top-0 z-30 flex h-16 items-center justify-between bg-white px-5 text-[#F57518] shadow-[0_4px_18px_rgba(0,30,64,0.12)] lg:hidden">
              <button type="button" onClick={onHomeNavigate} className="inline-flex" aria-label="Back to trips">
                <img src="/company_logo.png" alt="Indikosh Travels" className="h-10 w-auto" />
              </button>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f76616] text-[#f4f5f6] shadow-lg shadow-primary/20"
                  aria-label="Open menu"
                >
                  <FiMenu className="text-2xl" aria-hidden="true" />
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={onHomeNavigate}
              className="mb-6 hidden items-center gap-2 rounded-full px-1 py-2 text-sm font-bold text-primary transition-colors hover:text-secondary lg:inline-flex"
            >
              <FiArrowLeft aria-hidden="true" />
              Back to trips
            </button>

            <form
              onSubmit={handleSubmit}
              className="rounded-[22px] border border-white/70 bg-white/95 p-7 shadow-[0_22px_70px_rgba(5,23,52,0.24)] sm:p-10 lg:rounded-lg lg:border-[#d8e9fb] lg:bg-white lg:shadow-[0_22px_70px_rgba(28,96,170,0.13)]"
            >
              <div className="mb-10 flex justify-center lg:mb-12">
                <img src="/company_logo.png" alt="Indikosh Travels" className="h-8 w-auto sm:h-10" />
              </div>

              <h2 className="font-headline-md text-2xl font-extrabold text-[#2f3338] sm:text-3xl">
                Welcome Traveler!
              </h2>
              <p className="mt-2 text-sm font-medium text-[#5d86d4]">
                Login or create your Indikosh account
              </p>

              <div className="mt-8 grid gap-3">
                <div className="grid grid-cols-[64px_minmax(0,1fr)] gap-3">
                  <div
                    className="flex h-14 flex-col justify-center rounded-lg border border-[#dfe5f0] bg-[#f8f9fc] px-3 text-[#303743] sm:h-[58px]"
                    aria-label="Country code India"
                  >
                    <span className="text-[11px] font-bold uppercase leading-none text-[#687ca9]">ISD</span>
                    <span className="mt-1 text-base font-semibold leading-none">+91</span>
                  </div>

                  <label className="sr-only" htmlFor="phone">
                    Mobile number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                    placeholder="Mobile number"
                    className={tripFieldClass}
                    aria-describedby={message ? 'login-message' : undefined}
                  />
                </div>

                <label className="sr-only" htmlFor="destination">
                  Choose where you want to go
                </label>
                <input
                  id="destination"
                  name="destination"
                  type="text"
                  autoComplete="off"
                  value={destination}
                  onChange={(event) => {
                    setDestination(event.target.value)
                    if (message) setMessage('')
                  }}
                  placeholder="Choose where you want to go"
                  className={tripFieldClass}
                />

                <label className="sr-only" htmlFor="departure-city">
                  Choose departure city
                </label>
                <input
                  id="departure-city"
                  name="departureCity"
                  type="text"
                  autoComplete="address-level2"
                  value={departureCity}
                  onChange={(event) => {
                    setDepartureCity(event.target.value)
                    if (message) setMessage('')
                  }}
                  placeholder="Choose departure city"
                  className={tripFieldClass}
                />

                <label className="sr-only" htmlFor="departure-date">
                  Departure date
                </label>
                <input
                  id="departure-date"
                  name="departureDate"
                  type={isDepartureDateFocused || departureDate ? 'date' : 'text'}
                  value={departureDate}
                  onChange={(event) => {
                    setDepartureDate(event.target.value)
                    if (message) setMessage('')
                  }}
                  onFocus={() => setIsDepartureDateFocused(true)}
                  onBlur={() => setIsDepartureDateFocused(false)}
                  placeholder="Departure date"
                  className={tripFieldClass}
                />
              </div>

              <button
                type="submit"
                className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#216bd6] px-5 text-sm font-extrabold text-white shadow-lg shadow-[#216bd6]/20 transition hover:bg-[#185fc6] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#216bd6]"
              >
                <FiSmartphone aria-hidden="true" />
                Send OTP
              </button>

              {message ? (
                <p id="login-message" className="mt-4 text-center text-sm font-semibold text-primary">
                  {message}
                </p>
              ) : null}

              <p className="mt-6 text-center text-xs font-medium text-[#9db9e8]">
                By continuing you agree to our{' '}
                <a href="/privacy-policy" className="font-bold text-[#216bd6] underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
