import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SEO from '../../components/SEO'
import type { HolidayScope } from '../../types/holiday'

type HotelPageProps = {
  selectedHolidayScope: HolidayScope
  onHolidayScopeChange: (scope: HolidayScope) => void
  onPageNavigate: (path: string) => void
}

export default function HotelPage({
  selectedHolidayScope,
  onHolidayScopeChange,
  onPageNavigate,
}: HotelPageProps) {
  return (
    <>
      <SEO
        title="Hotel Page"
        description="Dummy hotel page for Indikosh."
        canonicalUrl="https://indikosh.com/hotels"
      />
      <Header
        activeNav="hotels"
        selectedHolidayScope={selectedHolidayScope}
        onHolidayScopeChange={onHolidayScopeChange}
        onPageNavigate={onPageNavigate}
      />
      <main className="flex min-h-screen items-center justify-center bg-white px-margin-mobile pt-28 text-primary md:px-margin-desktop">
        <h1 className="font-headline-xl text-4xl font-black md:text-6xl">Hotel Page</h1>
      </main>
      <Footer />
    </>
  )
}
