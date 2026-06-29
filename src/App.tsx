import { useCallback, useEffect, useState } from 'react'
import LoginPage from './app/(auth)/login'
import FlightPage from './app/(flight)/flight'
import HolidayPage from './app/(holidayPackage)/HolidayPage'
import HotelPage from './app/(hotel)/hotel'
import AppPreloader from './components/AppPreloader'
import { getHolidayScopeFromPath, HOLIDAY_PATHS } from './data/holidayPageContent'
import type { HolidayScope } from './types/holiday'
import type { MainNavKey } from './types/navigation'

const PRELOADER_VISIBLE_MS = 3000

function isLoginPath(pathname: string) {
  return pathname.toLowerCase() === '/login'
}

function getActivePageFromPath(pathname: string): MainNavKey {
  const path = pathname.toLowerCase()

  if (path.includes('/flights') || path === '/flight') {
    return 'flights'
  }

  if (path.includes('/hotels') || path === '/hotel') {
    return 'hotels'
  }

  return 'holidays'
}

function App() {
  const [currentPathname, setCurrentPathname] = useState(() => window.location.pathname)
  const [activePage, setActivePage] = useState<MainNavKey>(() => getActivePageFromPath(window.location.pathname))
  const [holidayScope, setHolidayScope] = useState<HolidayScope>(() => getHolidayScopeFromPath(window.location.pathname))
  const [isPreloaderActive, setIsPreloaderActive] = useState(true)
  const [isPreloaderReady, setIsPreloaderReady] = useState(false)
  const [preloaderRunId, setPreloaderRunId] = useState(0)

  const syncRouteState = useCallback(() => {
    const pathname = window.location.pathname

    setCurrentPathname(pathname)
    setActivePage(getActivePageFromPath(pathname))
    setHolidayScope(getHolidayScopeFromPath(pathname))
  }, [])

  const startPreloader = useCallback(() => {
    setIsPreloaderReady(false)
    setIsPreloaderActive(true)
    setPreloaderRunId((currentRunId) => currentRunId + 1)
  }, [])

  const markPreloaderReady = useCallback(() => {
    setIsPreloaderReady(true)
  }, [])

  useEffect(() => {
    if (!isPreloaderActive || !isPreloaderReady) return

    const preloaderTimerId = window.setTimeout(() => {
      setIsPreloaderActive(false)
    }, PRELOADER_VISIBLE_MS)

    return () => {
      window.clearTimeout(preloaderTimerId)
    }
  }, [isPreloaderActive, isPreloaderReady, preloaderRunId])

  useEffect(() => {
    const handlePopState = () => {
      syncRouteState()
      startPreloader()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [startPreloader, syncRouteState])

  const navigateToPath = (path: string) => {
    const shouldChangePath = window.location.pathname !== path

    if (shouldChangePath) {
      window.history.pushState(null, '', path)
      syncRouteState()
      startPreloader()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const navigateHolidayScope = (scope: HolidayScope) => {
    navigateToPath(HOLIDAY_PATHS[scope])
  }

  const navigateHome = () => {
    navigateToPath(HOLIDAY_PATHS[holidayScope])
  }

  if (isPreloaderActive) {
    return <AppPreloader key={preloaderRunId} onReady={markPreloaderReady} />
  }

  if (isLoginPath(currentPathname)) {
    return <LoginPage onHomeNavigate={navigateHome} />
  }

  if (activePage === 'flights') {
    return (
      <FlightPage
        selectedHolidayScope={holidayScope}
        onHolidayScopeChange={navigateHolidayScope}
        onPageNavigate={navigateToPath}
      />
    )
  }

  if (activePage === 'hotels') {
    return (
      <HotelPage
        selectedHolidayScope={holidayScope}
        onHolidayScopeChange={navigateHolidayScope}
        onPageNavigate={navigateToPath}
      />
    )
  }

  return (
    <HolidayPage
      holidayScope={holidayScope}
      onHolidayScopeChange={navigateHolidayScope}
      onPageNavigate={navigateToPath}
    />
  )
}

export default App
