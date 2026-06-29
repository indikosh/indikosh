import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SEO from '../../components/SEO'
import type { HolidayScope } from '../../types/holiday'

type FlightPageProps = {
  selectedHolidayScope: HolidayScope
  onHolidayScopeChange: (scope: HolidayScope) => void
  onPageNavigate: (path: string) => void
}

export default function FlightPage({
  selectedHolidayScope,
  onHolidayScopeChange,
  onPageNavigate,
}: FlightPageProps) {
  return (
    <>
      <SEO
        title="Flight Page"
        description="Dummy flight page for Indikosh."
        canonicalUrl="https://indikosh.com/flights"
      />
      <Header
        activeNav="flights"
        selectedHolidayScope={selectedHolidayScope}
        onHolidayScopeChange={onHolidayScopeChange}
        onPageNavigate={onPageNavigate}
      />
      <main className="flex min-h-screen items-center justify-center bg-white px-margin-mobile pt-28 text-primary md:px-margin-desktop">
        <h1 className="font-headline-xl text-4xl font-black md:text-6xl">Flight Page</h1>
      </main>
      <Footer />
    </>
  )
}
