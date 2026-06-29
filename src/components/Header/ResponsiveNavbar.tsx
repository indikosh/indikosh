import { useCallback, useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import {
  FiBriefcase,
  FiChevronDown,
  FiGrid,
  FiMap,
  FiPhoneCall,
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiX,
} from 'react-icons/fi'
import { HOLIDAY_PATHS } from '../../data/holidayPageContent'
import type { HolidayScope } from '../../types/holiday'
import type { MainNavKey } from '../../types/navigation'

type ResponsiveNavbarProps = {
  activeNav: MainNavKey
  isLoggedIn: boolean
  isOpen: boolean
  onClose: () => void
  onHolidayScopeChange: (scope: HolidayScope) => void
  onPageNavigate?: (path: string) => void
  selectedHolidayScope: HolidayScope
}

type MenuItem = {
  accent: 'blue' | 'green' | 'orange' | 'slate'
  chip?: string
  href?: string
  icon: typeof FiShoppingBag
  label: string
  scope?: HolidayScope
}

const itineraryPrompts = ['Ladakh', 'Bali', 'Kashmir', 'Thailand', 'Vietnam', 'Spiti']
const CLOSE_ANIMATION_MS = 320
const menuItems: MenuItem[] = [
  {
    accent: 'orange',
    chip: 'Group Trips',
    icon: FiShoppingBag,
    label: 'Fixed Departures',
    scope: 'international',
  },
  {
    accent: 'green',
    chip: 'Private Trips',
    icon: FiMap,
    label: 'Customized Tours',
    scope: 'domestic',
  },
  {
    accent: 'orange',
    chip: 'Fixed Departures',
    icon: FiShoppingBag,
    label: 'Trending',
    scope: 'international',
  },
  {
    accent: 'slate',
    icon: FiBriefcase,
    label: 'Corporate',
    href: '/contact',
  },
  {
    accent: 'orange',
    chip: 'About & blog',
    icon: FiGrid,
    label: 'More',
    href: '/blogs',
  },
]
const accentClasses: Record<MenuItem['accent'], { chip: string; icon: string }> = {
  blue: {
    chip: 'bg-[#eaf3ff] text-[#2b73e0]',
    icon: 'text-[#1f6be3]',
  },
  green: {
    chip: 'bg-[#eaf8ef] text-[#3baf69]',
    icon: 'text-[#2f9e57]',
  },
  orange: {
    chip: 'bg-[#fff0e8] text-[#e4560b]',
    icon: 'text-[#e4560b]',
  },
  slate: {
    chip: 'bg-[#eef2f7] text-[#607085]',
    icon: 'text-[#5b6470]',
  },
}

export default function ResponsiveNavbar({
  activeNav,
  isLoggedIn,
  isOpen,
  onClose,
  onHolidayScopeChange,
  onPageNavigate,
  selectedHolidayScope,
}: ResponsiveNavbarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [itineraryIndex, setItineraryIndex] = useState(0)
  const [isClosing, setIsClosing] = useState(false)
  const closeTimerRef = useRef<number | undefined>(undefined)

  const startClose = useCallback(
    (afterClose?: () => void) => {
      if (closeTimerRef.current) {
        return
      }

      setIsClosing(true)
      closeTimerRef.current = window.setTimeout(() => {
        setIsClosing(false)
        closeTimerRef.current = undefined
        onClose()
        afterClose?.()
      }, CLOSE_ANIMATION_MS)
    },
    [onClose],
  )

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        startClose()
      }
    }

    document.body.classList.add('overflow-hidden')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('overflow-hidden')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, startClose])

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const timerId = window.setInterval(() => {
      setItineraryIndex((currentIndex) => (currentIndex + 1) % itineraryPrompts.length)
    }, 1600)

    return () => {
      window.clearInterval(timerId)
    }
  }, [isOpen])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current)
      }
    }
  }, [])

  if (!isOpen) {
    return null
  }

  const navigateToPath = (path: string) => {
    startClose(() => {
      if (onPageNavigate) {
        onPageNavigate(path)
      } else {
        window.location.href = path
      }
    })
  }

  const navigateToScope = (scope: HolidayScope) => {
    startClose(() => {
      onHolidayScopeChange(scope)
    })
  }

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (searchTerm.trim()) {
      navigateToPath(HOLIDAY_PATHS[selectedHolidayScope])
    }
  }

  return (
    <div
      className={`mobile-nav-overlay fixed inset-0 z-40 flex flex-col bg-[#f7fbff]/96 pt-[82px] text-[#202733] lg:hidden ${
        isClosing ? 'mobile-nav-overlay--closing' : ''
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
    >
      <div
        className={`mobile-nav-sheet mx-auto flex min-h-0 w-full max-w-[430px] flex-1 flex-col overflow-hidden rounded-t-[28px] border-t-2 border-[#183b66] bg-white shadow-[0_-18px_70px_rgba(0,30,64,0.18)] ${
          isClosing ? 'mobile-nav-sheet--closing' : ''
        }`}
      >
        <div className="flex-none border-b border-[#e4edf9] bg-white px-4 pb-3 pt-3">
          <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-[#dfe5ee]" />
          <div className="grid grid-cols-[42px_1fr_42px] items-center">
            <span aria-hidden="true" />
            <h2 className="text-center text-lg font-black">Menu</h2>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#fff0e8] text-[#202733] transition-colors hover:bg-[#ffe2d3] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#e4560b]"
              aria-label="Close menu"
              onClick={() => startClose()}
            >
              <FiX className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-[#f8fbff] pb-5">
          <div className="bg-[#eef8ff] px-4 pb-4 pt-3">
            <form onSubmit={handleSearchSubmit} role="search" aria-label="Search packages and destinations">
              <label className="sr-only" htmlFor="mobile-nav-search">
                Search packages and destinations
              </label>
              <div className="flex h-11 items-center gap-3 rounded-xl border-2 border-[#ffd1b8] bg-white px-3 shadow-[0_6px_18px_rgba(228,86,11,0.13)] focus-within:border-[#e4560b]">
                <input
                  id="mobile-nav-search"
                  className="min-w-0 flex-1 bg-transparent text-sm font-extrabold text-[#263242] outline-none placeholder:text-[#263242]"
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder={`Explore Best Itineraries For ${itineraryPrompts[itineraryIndex]}`}
                  autoComplete="off"
                />
                <button type="submit" className="text-[#263242]" aria-label="Search">
                  <FiSearch className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
              <p className="mt-2 text-center text-xs font-extrabold text-[#e4560b]">Search packages & destinations</p>
            </form>
          </div>

          <div className="divide-y divide-[#edf1f6] bg-white">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isCurrent =
                (item.scope && activeNav === 'holidays' && item.scope === selectedHolidayScope) ||
                (item.href?.includes(activeNav) ?? false)

              return (
                <button
                  key={item.label}
                  type="button"
                  className={`flex min-h-[56px] w-full items-center gap-3 px-5 text-left transition-colors hover:bg-[#f7fbff] focus-visible:bg-[#f7fbff] focus-visible:outline-none ${
                    isCurrent ? 'bg-[#f7fbff]' : ''
                  }`}
                  onClick={() => {
                    if (item.scope) {
                      navigateToScope(item.scope)
                      return
                    }

                    if (item.href) {
                      navigateToPath(item.href)
                    }
                  }}
                >
                  <Icon className={`h-5 w-5 flex-none ${accentClasses[item.accent].icon}`} aria-hidden="true" />
                  <span className="min-w-0 flex-1 text-sm font-black text-[#333c48]">{item.label}</span>
                  {item.chip ? (
                    <span className={`rounded-md px-2.5 py-1 text-xs font-extrabold ${accentClasses[item.accent].chip}`}>
                      {item.chip}
                    </span>
                  ) : null}
                  <FiChevronDown className="h-4 w-4 flex-none text-[#7a8795]" aria-hidden="true" />
                </button>
              )
            })}
          </div>

          <div className="mt-3 space-y-3 px-4">
            <div className="flex items-center gap-3 rounded-xl bg-[#dff1ff] p-3">
              <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-white text-[#e4560b]">
                <FiUser className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-black text-[#374151]">Hey, Traveller!</p>
                <p className="mt-0.5 text-xs font-semibold text-[#8090a3]">
                  {isLoggedIn ? 'View bookings & saved trips' : 'Log in to view bookings & saved trips'}
                </p>
              </div>
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center rounded-lg bg-[#e4560b] px-4 text-sm font-black text-white shadow-[0_8px_20px_rgba(228,86,11,0.24)] transition-colors hover:bg-[#f26722]"
                onClick={() => navigateToPath('/login')}
              >
                Login
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <a
                href="https://wa.me/"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#31b755] px-3 text-xs font-black text-white shadow-[0_8px_16px_rgba(49,183,85,0.22)]"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <button
                type="button"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#e4560b] px-3 text-xs font-black text-white shadow-[0_8px_16px_rgba(228,86,11,0.22)] transition-colors hover:bg-[#f26722]"
                onClick={() => navigateToPath('/contact')}
              >
                <FiPhoneCall className="h-4 w-4" aria-hidden="true" />
                Request Callback
              </button>
            </div>

            <div className="rounded-xl border border-[#edf1f6] bg-white p-4 text-center shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
              <p className="text-[10px] font-black uppercase tracking-wide text-[#8a9098]">Follow Indikosh</p>
              <div className="mt-3 flex items-center justify-center gap-4">
                {[
                  { icon: FaFacebookF, label: 'Facebook', className: 'bg-[#1877f2]' },
                  { icon: FaXTwitter, label: 'X', className: 'bg-[#1da1f2]' },
                  { icon: FaInstagram, label: 'Instagram', className: 'bg-[#e4405f]' },
                  { icon: FaLinkedinIn, label: 'LinkedIn', className: 'bg-[#0a66c2]' },
                  { icon: FaYoutube, label: 'YouTube', className: 'bg-[#ff0000]' },
                ].map((social) => {
                  const SocialIcon = social.icon

                  return (
                    <a
                      key={social.label}
                      href="#"
                      className={`inline-flex h-8 w-8 items-center justify-center rounded-md text-white ${social.className}`}
                      aria-label={social.label}
                    >
                      <SocialIcon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
