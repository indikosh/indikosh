import Header from '../../components/Header'
import Body from '../../components/Body/holidayHomepage'
import Footer from '../../components/Footer'
import SEO from '../../components/SEO'
import { HOLIDAY_PAGE_META } from '../../data/holidayPageContent'
import type { HolidayScope } from '../../types/holiday'

type HolidayPageProps = {
  holidayScope: HolidayScope
  onHolidayScopeChange: (scope: HolidayScope) => void
  onPageNavigate: (path: string) => void
}

export default function HolidayPage({ holidayScope, onHolidayScopeChange, onPageNavigate }: HolidayPageProps) {
  const meta = HOLIDAY_PAGE_META[holidayScope]

  return (
    <>
      <SEO title={meta.title} description={meta.description} canonicalUrl={meta.canonicalUrl} />
      <Header
        activeNav="holidays"
        selectedHolidayScope={holidayScope}
        onHolidayScopeChange={onHolidayScopeChange}
        onPageNavigate={onPageNavigate}
      />
      <Body holidayScope={holidayScope} />
      <Footer />
    </>
  )
}
