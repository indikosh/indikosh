import { useState } from 'react'
import Noticeboard from '../../Noticeboard'
import PackageCard from './PackageCard'
import {
  DURATION_TABS,
  SECOND_SECTION_CONTENT,
  type DurationKey,
  type FeatureDestination,
} from '../../../data/holidayPageContent'
import type { HolidayScope } from '../../../types/holiday'

const FIRST_NOTICEBOARD_IMAGE = '/Noticeboard/bali_kachak_dance.png'
const PACKAGE_DURATION_LABELS: Record<DurationKey, string> = {
  short: '5 days',
  medium: '8 days',
  long: '12 days',
}

function SectionTitleTab({ title }: { title: string }) {
  return (
    <h2
      className="inline-flex min-h-10 items-center gap-2 rounded-l-xl border border-[#ff9a62] bg-[#d94b00] py-2 pl-4 pr-8 font-headline-md text-sm font-extrabold uppercase leading-none text-white shadow-[0_12px_24px_rgba(217,75,0,0.32)] md:text-base"
      style={{ clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)' }}
    >
      {title}
    </h2>
  )
}

function SectionHeader({ title }: { title: string }) {
  return (
    <>
      <div className="mb-3 flex items-center justify-between gap-4 md:mb-6">
        <SectionTitleTab title={title} />
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#eadfce] text-[#c39c6a] transition-colors hover:border-secondary hover:text-secondary"
            aria-label={`Previous ${title.toLowerCase()}`}
          >
            <span className="material-symbols-outlined text-[22px]">chevron_left</span>
          </button>
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#eadfce] text-[#c39c6a] transition-colors hover:border-secondary hover:text-secondary"
            aria-label={`Next ${title.toLowerCase()}`}
          >
            <span className="material-symbols-outlined text-[22px]">chevron_right</span>
          </button>
        </div>
      </div>
    </>
  )
}

function DestinationTile({ destination }: { destination: FeatureDestination }) {
  return (
    <>
      <article className="group relative h-[128px] min-w-[150px] overflow-hidden rounded-md bg-primary shadow-sm md:h-[180px] md:min-w-0 md:rounded-lg">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/28 to-transparent" />
        <div className="absolute inset-x-2 bottom-3 text-center text-white md:inset-x-4 md:bottom-4">
          <p className="font-label-caps text-[8px] font-extrabold uppercase tracking-wider md:text-[11px]">
            {destination.eyebrow}
          </p>
          <h3 className="mt-1 font-headline-md text-xl font-semibold leading-none md:text-3xl">{destination.name}</h3>
        </div>
      </article>
    </>
  )
}

export default function SecondSection({ holidayScope }: { holidayScope: HolidayScope }) {
  const [activeDuration, setActiveDuration] = useState<DurationKey>('short')
  const content = SECOND_SECTION_CONTENT[holidayScope]
  const firstNoticeboardOffer = { ...content.offer, image: FIRST_NOTICEBOARD_IMAGE }

  return (
    <>
      <section className="bg-white px-margin-mobile py-8 md:px-margin-desktop md:py-14">
        <div className="mx-auto max-w-container-max space-y-7 md:space-y-11">
          <Noticeboard offer={firstNoticeboardOffer} imageOnly />

          <div>
            <SectionHeader title={content.trending.title} />
            <div className="grid auto-cols-[150px] grid-flow-col gap-3 overflow-x-auto pb-2 md:auto-cols-[216px] md:grid-flow-row md:grid-cols-3 md:gap-6 md:overflow-visible lg:grid-cols-5">
              {content.trending.destinations.map((destination) => (
                <DestinationTile key={destination.name} destination={destination} />
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title={content.featured.title} />
            <div className="grid auto-cols-[150px] grid-flow-col gap-3 overflow-x-auto pb-2 md:auto-cols-[216px] md:grid-flow-row md:grid-cols-3 md:gap-6 md:overflow-visible lg:grid-cols-5">
              {content.featured.destinations.map((destination) => (
                <DestinationTile key={destination.name} destination={destination} />
              ))}
            </div>
          </div>

          <div>
            <Noticeboard offer={content.offer} />

            <div id="holiday-packages" className="mt-7 scroll-mt-28 md:mt-11">
              <div className="mb-3 md:mb-4">
                <SectionTitleTab title="Packages By Duration" />
              </div>
              <div className="mb-4 flex flex-wrap gap-2 md:mb-6">
                {DURATION_TABS.map((tab) => {
                  const isActive = activeDuration === tab.value

                  return (
                    <button
                      key={tab.value}
                      type="button"
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors md:px-5 md:py-2 md:text-sm ${
                        isActive
                          ? 'border-[#073f34] bg-[#073f34] text-white'
                          : 'border-outline-variant bg-white text-[#4c257b] hover:border-secondary hover:text-secondary'
                      }`}
                      onClick={() => setActiveDuration(tab.value)}
                    >
                      {tab.label}
                    </button>
                  )
                })}
              </div>

              <div className="grid auto-rows-fr grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {content.packages[activeDuration].map((destination) => (
                  <PackageCard
                    key={destination.name}
                    packageItem={destination}
                    durationLabel={PACKAGE_DURATION_LABELS[activeDuration]}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
