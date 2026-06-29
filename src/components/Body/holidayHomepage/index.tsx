import HeroSection from './HeroSection'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import TripPlanPopup from './TripPlanPopup'
import type { HolidayScope } from '../../../types/holiday'

type BodyProps = {
  holidayScope: HolidayScope
}

export default function Body({ holidayScope }: BodyProps) {
  return (
    <>
      <HeroSection key={holidayScope} holidayScope={holidayScope} />
      <SecondSection holidayScope={holidayScope} />
      <ThirdSection holidayScope={holidayScope} />
      <TripPlanPopup holidayScope={holidayScope} />
    </>
  )
}
