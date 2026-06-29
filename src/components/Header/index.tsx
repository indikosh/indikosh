import { useEffect, useRef, useState } from 'react'
import { FiMenu, FiShoppingBag, FiUser } from 'react-icons/fi'
import { animate } from 'animejs'
import '@flaticon/flaticon-uicons/css/regular/rounded.css'
import ResponsiveNavbar from './ResponsiveNavbar'
import type { HolidayScope } from '../../types/holiday'
import type { MainNavKey } from '../../types/navigation'
import type { MouseEvent } from 'react'

const NAV_LINKS = [
  { key: 'holidays', label: 'Holidays', iconClass: 'fi-rr-arrow-progress', href: '/holidays/international' },
  { key: 'flights', label: 'Flights', iconClass: 'fi-rr-plane-departure', href: '/flights' },
  { key: 'hotels', label: 'Hotels', iconClass: 'fi-rr-building', href: '/hotels' },
  { key: 'blogs', label: 'Blogs', iconClass: 'fi-rr-blog', href: '/blogs' },
  { key: 'contact', label: 'Contact', iconClass: 'fi-rr-phone', href: '/contact' },
  //{ label: 'Cabs', iconClass: 'fi-rr-car', href: '#', active: false },
  // { label: 'Visa', iconClass: 'fi-rr-passport', href: '#', active: false },
  //{ label: 'Destinations', iconClass: 'fi-rr-globe', href: '/destinations' },
] satisfies Array<{ key: MainNavKey; label: string; iconClass: string; href: string }>

type HeaderProps = {
  activeNav?: MainNavKey
  selectedHolidayScope: HolidayScope
  onHolidayScopeChange: (scope: HolidayScope) => void
  onPageNavigate?: (path: string) => void
  isLoggedIn?: boolean
}

export default function Header({
  activeNav = 'holidays',
  selectedHolidayScope,
  onHolidayScopeChange,
  onPageNavigate,
  isLoggedIn = false,
}: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const isScrolledRef = useRef<boolean | null>(null)
  const [isHolidayMenuDismissed, setIsHolidayMenuDismissed] = useState(false)
  const [isResponsiveNavbarOpen, setIsResponsiveNavbarOpen] = useState(false)

  const handleLoginClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onPageNavigate) return

    event.preventDefault()
    onPageNavigate('/login')
  }

  useEffect(() => {
    const header = headerRef.current
    const nav = navRef.current
    if (!header || !nav) return

    const getRestingPadding = () => (window.matchMedia('(min-width: 768px)').matches ? 40 : 16)

    const animateHeader = (scrolled: boolean, immediate = false) => {
      const duration = immediate ? 0 : 450

      animate(header, {
        top: scrolled ? '0px' : '16px',
        paddingLeft: scrolled ? '0px' : `${getRestingPadding()}px`,
        paddingRight: scrolled ? '0px' : `${getRestingPadding()}px`,
        easing: 'easeOutExpo',
        duration,
      })

      animate(nav, {
        borderRadius: scrolled ? '0px' : '9999px',
        maxWidth: scrolled ? `${window.innerWidth}px` : '1280px',
        boxShadow: scrolled
          ? '0 4px 30px rgba(0,0,0,0.1)'
          : '0 1px 3px rgba(0,0,0,0.08)',
        easing: 'easeOutExpo',
        duration,
      })
    }

    const syncHeader = (immediate = false) => {
      const scrolled = window.scrollY > 80
      if (!immediate && isScrolledRef.current === scrolled) return

      isScrolledRef.current = scrolled
      animateHeader(scrolled, immediate)
    }

    syncHeader(true)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    function onScroll() {
      syncHeader()
    }

    function onResize() {
      syncHeader(true)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 z-50 px-margin-mobile md:px-margin-desktop"
      style={{ top: 16 }}
    >
      <nav
        ref={navRef}
        className="relative z-50 mx-auto h-16 w-full max-w-container-max rounded-full bg-white shadow-sm"
      >
        <div className="mx-auto flex h-full w-full max-w-container-max items-center justify-between px-6">
          <div className="flex-shrink-0">
            <a href="#">
              <img src="/company_logo.png" alt="Indikosh Travels" className="h-6 w-auto"/>
            </a>
          </div>
          <div className="header-nav-strip hidden lg:flex">
            {NAV_LINKS.map((link) => {
              const isHolidaysLink = link.key === 'holidays'
              const isActive = activeNav === link.key

              return (
                <div
                  key={link.label}
                  className={`header-nav-item${isHolidaysLink ? ' header-nav-item--has-menu' : ''}${
                    isHolidaysLink && isHolidayMenuDismissed ? ' header-nav-item--menu-dismissed' : ''
                  }`}
                  onMouseLeave={() => {
                    if (isHolidaysLink) setIsHolidayMenuDismissed(false)
                  }}
                >
                  <a
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    aria-haspopup={isHolidaysLink ? 'menu' : undefined}
                    className={`header-nav-link${isActive ? ' header-nav-link--active' : ''}`}
                    onFocus={() => {
                      if (isHolidaysLink) setIsHolidayMenuDismissed(false)
                    }}
                    onClick={(event) => {
                      if (isHolidaysLink) {
                        event.preventDefault()
                        onHolidayScopeChange(selectedHolidayScope)
                        return
                      }

                      if (onPageNavigate) {
                        event.preventDefault()
                        onPageNavigate(link.href)
                      }
                    }}
                  >
                    <i className={`fi ${link.iconClass} header-nav-link__icon`} aria-hidden="true" />
                    <span className="text-sm">{link.label}</span>
                  </a>
                </div>
              )
            })}
          </div>
          <div className="flex items-center gap-2">
            {isLoggedIn ? (
              <button className="hidden md:flex items-center gap-2 text-on-surface-variant font-semibold hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-primary/5">
                <FiShoppingBag className="text-[18px]" aria-hidden="true" />
                <span className="text-sm">My Bookings</span>
              </button>
            ) : null}
            <a
              href="/login"
              onClick={handleLoginClick}
              className="orange-gradient-btn hidden items-center gap-2 rounded-full px-6 py-2 text-sm font-bold text-white shadow-lg transition-all hover:shadow-xl lg:inline-flex"
            >
              <FiUser className="text-[16px]" aria-hidden="true" />
              <span>Login</span>
            </a>
            <button
              type="button"
              className="lg:hidden p-2 text-primary"
              aria-label="Open menu"
              aria-expanded={isResponsiveNavbarOpen}
              onClick={() => setIsResponsiveNavbarOpen(true)}
            >
              <FiMenu className="text-2xl" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      <ResponsiveNavbar
        activeNav={activeNav}
        isLoggedIn={isLoggedIn}
        isOpen={isResponsiveNavbarOpen}
        onClose={() => setIsResponsiveNavbarOpen(false)}
        onHolidayScopeChange={onHolidayScopeChange}
        onPageNavigate={onPageNavigate}
        selectedHolidayScope={selectedHolidayScope}
      />
    </header>
  )
}
