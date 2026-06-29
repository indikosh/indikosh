import { useEffect, useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { FiSearch } from 'react-icons/fi'
import { SECOND_SECTION_CONTENT } from '../../../data/holidayPageContent'
import type { HolidayScope } from '../../../types/holiday'

type HeroSectionProps = {
  holidayScope: HolidayScope
}

type TypewriterState = {
  wordIndex: number
  characterCount: number
  isDeleting: boolean
}


const TYPE_SPEED_MS = 95
const DELETE_SPEED_MS = 55
const WORD_HOLD_MS = 1200
const PLACEHOLDER_TYPE_SPEED_MS = 82
const PLACEHOLDER_DELETE_SPEED_MS = 45
const PLACEHOLDER_HOLD_MS = 950
const MAX_VISIBLE_SEARCH_OPTIONS = 6
const PACKAGES_SECTION_ID = 'holiday-packages'

function useTypewriter(words: string[], typeSpeedMs = TYPE_SPEED_MS, deleteSpeedMs = DELETE_SPEED_MS, holdMs = WORD_HOLD_MS) {
  const [typewriter, setTypewriter] = useState<TypewriterState>({
    wordIndex: 0,
    characterCount: 0,
    isDeleting: false,
  })

  useEffect(() => {
    if (words.length === 0) {
      return undefined
    }

    const currentWord = words[typewriter.wordIndex % words.length]
    const hasTypedWord = !typewriter.isDeleting && typewriter.characterCount === currentWord.length
    const delay = hasTypedWord ? holdMs : typewriter.isDeleting ? deleteSpeedMs : typeSpeedMs

    const timerId = window.setTimeout(() => {
      setTypewriter((current) => {
        const word = words[current.wordIndex % words.length]

        if (!current.isDeleting && current.characterCount === word.length) {
          return { ...current, isDeleting: true }
        }

        if (current.isDeleting && current.characterCount === 0) {
          return {
            wordIndex: (current.wordIndex + 1) % words.length,
            characterCount: 0,
            isDeleting: false,
          }
        }

        return {
          ...current,
          characterCount: current.characterCount + (current.isDeleting ? -1 : 1),
        }
      })
    }, delay)

    return () => {
      window.clearTimeout(timerId)
    }
  }, [deleteSpeedMs, holdMs, typeSpeedMs, typewriter, words])

  const currentWord = words[typewriter.wordIndex % words.length] ?? ''

  return {
    wordIndex: typewriter.wordIndex,
    typedText: currentWord.slice(0, typewriter.characterCount),
  }
}

function getDestinationSearchOptions(holidayScope: HolidayScope) {
  const content = SECOND_SECTION_CONTENT[holidayScope]
  const destinations = [
    content.offer.destination,
    ...content.trending.destinations.map((destination) => destination.name),
    ...content.featured.destinations.map((destination) => destination.name),
    ...Object.values(content.packages).flatMap((packages) => packages.map((packageItem) => packageItem.name)),
  ]

  return Array.from(new Set(destinations))
}

function findDestinationMatch(destinationOptions: string[], searchTerm: string) {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase()

  if (!normalizedSearchTerm) {
    return undefined
  }

  return (
    destinationOptions.find((destination) => destination.toLowerCase() === normalizedSearchTerm) ??
    destinationOptions.find((destination) => destination.toLowerCase().startsWith(normalizedSearchTerm)) ??
    destinationOptions.find((destination) => destination.toLowerCase().includes(normalizedSearchTerm))
  )
}

export default function HeroSection({ holidayScope }: HeroSectionProps) {
  const [destinationSearch, setDestinationSearch] = useState('')
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const destinationOptions = useMemo(() => getDestinationSearchOptions(holidayScope), [holidayScope])
  const placeholderTypewriter = useTypewriter(
    destinationOptions,
    PLACEHOLDER_TYPE_SPEED_MS,
    PLACEHOLDER_DELETE_SPEED_MS,
    PLACEHOLDER_HOLD_MS,
  )
  
  const searchPlaceholder = placeholderTypewriter.typedText
    ? `Search ${placeholderTypewriter.typedText}`
    : 'Search '
  const filteredDestinationOptions = useMemo(() => {
    const normalizedSearchTerm = destinationSearch.trim().toLowerCase()

    if (!normalizedSearchTerm) {
      return destinationOptions.slice(0, MAX_VISIBLE_SEARCH_OPTIONS)
    }

    return destinationOptions
      .filter((destination) => destination.toLowerCase().includes(normalizedSearchTerm))
      .slice(0, MAX_VISIBLE_SEARCH_OPTIONS)
  }, [destinationOptions, destinationSearch])

  const selectDestination = (destination: string) => {
    setDestinationSearch(destination)
    setIsSearchFocused(false)

    window.setTimeout(() => {
      document.getElementById(PACKAGES_SECTION_ID)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 0)
  }

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const destinationMatch = findDestinationMatch(destinationOptions, destinationSearch)

    if (destinationMatch) {
      selectDestination(destinationMatch)
    }
  }

  return (
    <section
      className="relative isolate min-h-screen overflow-hidden bg-[#061a22] px-margin-mobile py-28 text-white md:px-margin-desktop md:py-36"
      data-holiday-scope={holidayScope}
    >
      <img
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/homePage_imag/HBG1.png"
        alt="Mountain adventure traveller overlooking a valley"
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#051c25] via-[#071d25]/88 to-[#071d25]/16" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-14rem)] max-w-container-max items-center">
        <div className="max-w-[840px]">
          <p className="meow-script-regular text-4xl leading-none text-[#EF6C22] md:text-5xl">
            Explore the world
          </p>

          <h1 className="mt-8 max-w-[880px] text-4xl font-black uppercase leading-[1.18] tracking-wide text-white md:text-5xl">
            Book Your <span className="text-[#EF6C22]">Dream </span>
            Trip to <span className="text-[#EF6C22]">INDIKOSH </span>
          </h1>
          <div>
          {isSearchFocused ? (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 overflow-hidden rounded-md border border-white/25 bg-white text-[#11242b] shadow-[0_24px_48px_rgba(2,8,12,0.34)]">
              {filteredDestinationOptions.length > 0 ? (
                filteredDestinationOptions.map((destination) => (
                  <button
                    key={destination}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-extrabold transition-colors hover:bg-[#fff1e8] focus-visible:bg-[#fff1e8] focus-visible:outline-none md:px-5"
                    onMouseDown={(event) => {
                      event.preventDefault()
                      selectDestination(destination)
                    }}
                  >
                    <span>{destination}</span>
                    <span className="text-xs font-black uppercase text-[#d35108]">Packages</span>
                  </button>
                ))
              ) : (
                <p className="px-4 py-3 text-sm font-bold text-[#61727a] md:px-5">No destinations found</p>
              )}
            </div>
          ) : null}
          </div>

          <div className="relative mt-8 max-w-[690px]">
            <form onSubmit={handleSearchSubmit} role="search" aria-label="Search holiday destinations">
              <label className="sr-only" htmlFor="hero-destination-search">
                Search
              </label>
              <div className="flex min-h-16 flex-col overflow-hidden rounded-md border border-white/25 bg-white/95 shadow-[0_20px_50px_rgba(2,8,12,0.32)] backdrop-blur md:flex-row">
                <div className="flex min-h-16 flex-1 items-center gap-3 px-4 md:px-5">
                  <FiSearch className="h-5 w-5 flex-none text-[#d35108]" aria-hidden="true" />
                  <input
                    id="hero-destination-search"
                    className="min-w-0 flex-1 bg-transparent text-base font-bold text-[#11242b] outline-none placeholder:text-[#61727a]"
                    type="search"
                    value={destinationSearch}
                    onChange={(event) => setDestinationSearch(event.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    placeholder={searchPlaceholder}
                    autoComplete="off"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex min-h-14 items-center justify-center gap-2 bg-[#d35108] px-6 text-sm font-black uppercase tracking-wide text-white transition-colors hover:bg-[#EF6C22] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white md:min-h-16 md:px-8"
                >
                  <FiSearch className="h-4 w-4" aria-hidden="true" />
                  Search
                </button>
              </div>
            </form>

            
          </div>

          <p className="mt-10 max-w-[650px] text-base font-semibold leading-8 text-white/92 md:text-lg">
            Design your dream journey with our intelligent itinerary builder. Customize every detail,
            from destinations and hotels to daily activities, and enjoy a seamless travel planning experience.
          </p>
        </div>
      </div>
    </section>
  )
}
