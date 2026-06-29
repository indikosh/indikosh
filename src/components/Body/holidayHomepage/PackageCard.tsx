import { FaStar } from 'react-icons/fa'
import {
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiClock,
  FiHeart,
  FiMapPin,
  FiPhone,
  FiUsers,
} from 'react-icons/fi'
import type { PackageDestination } from '../../../data/holidayPageContent'

type PackageCardProps = {
  packageItem: PackageDestination
  durationLabel: string
  peopleLabel?: string
}

const DESTINATION_ROUTE_STOPS: Record<string, string[]> = {
  Thailand: ['Phuket', 'Krabi', 'Bangkok'],
  Singapore: ['Sentosa', 'Marina Bay', 'Gardens'],
  Bali: ['Ubud', 'Nusa Dua', 'Kintamani'],
  'Sri Lanka': ['Colombo', 'Kandy', 'Bentota'],
  Vietnam: ['Hanoi', 'Ha Long', 'Da Nang'],
  Dubai: ['Marina', 'Desert Safari', 'Burj Khalifa'],
  Malaysia: ['Kuala Lumpur', 'Genting', 'Langkawi'],
  Goa: ['North Goa', 'Panjim', 'South Goa'],
  Kerala: ['Munnar', 'Thekkady', 'Alleppey'],
  Rajasthan: ['Jaipur', 'Jodhpur', 'Udaipur'],
  Uttarakhand: ['Rishikesh', 'Mussoorie', 'Nainital'],
  Himachal: ['Shimla', 'Manali', 'Dharamshala'],
  Kashmir: ['Srinagar', 'Gulmarg', 'Pahalgam'],
  Andaman: ['Port Blair', 'Havelock', 'Neil Island'],
}

function getPriceParts(price: string) {
  const normalizedPrice = price.trim()

  if (normalizedPrice.toLowerCase().startsWith('from ')) {
    return {
      prefix: 'From',
      value: normalizedPrice.slice(5),
    }
  }

  return {
    prefix: 'From',
    value: normalizedPrice,
  }
}

function getRouteStops(packageName: string, fallbackLocation: string) {
  const cleanName = packageName.replace(/\s+(Trip|Holiday|Escape|Getaway|Adventure)$/i, '')
  const mappedStops = DESTINATION_ROUTE_STOPS[cleanName]

  if (mappedStops) {
    return mappedStops
  }

  const routeSource = fallbackLocation.includes(' curated route') ? cleanName : fallbackLocation

  return routeSource
    .split(/,|&|\|/)
    .map((stop) => stop.trim())
    .filter(Boolean)
    .slice(0, 3)
}

function getPackageTitle(packageName: string) {
  if (/\b(Trip|Holiday|Tour|Package|Escape|Adventure|Getaway)\b/i.test(packageName)) {
    return packageName
  }

  return `${packageName} Group Holiday Package`
}

export default function PackageCard({
  packageItem,
  durationLabel,
  peopleLabel = '15',
}: PackageCardProps) {
  const { prefix, value } = getPriceParts(packageItem.price)
  const packageTitle = getPackageTitle(packageItem.name)
  const location = packageItem.location ?? `${packageItem.name} curated route`
  const routeStops = getRouteStops(packageItem.name, location)
  const remainingStops = Math.max(routeStops.length - 2, 0)
  const rating = packageItem.rating ?? '4.8'
  const reviewCount = packageItem.reviewCount ?? '10k+'
  const discountLabel = packageItem.discountLabel ?? 'Group Tour'
  const savingsLabel = packageItem.originalPrice ? 'SAVE 5,000' : 'Upto 7000 off'

  return (
    <article className="group flex h-full min-h-[456px] flex-col overflow-hidden rounded-lg border border-[#e4e8df] bg-white shadow-[0_14px_34px_rgba(12,25,38,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(12,25,38,0.18)]">
      <div className="relative h-[210px] overflow-hidden bg-surface-container">
        <img
          src={packageItem.image}
          alt={packageItem.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/18 to-black/10" />

        <div className="absolute left-3 top-3 flex flex-col items-start gap-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-black px-3 py-1.5 text-xs font-extrabold text-white">
            <FiUsers className="h-3.5 w-3.5 text-[#8b5cf6]" aria-hidden="true" />
            {discountLabel}
            <span className="rounded-sm bg-white/18 px-1.5 py-0.5 text-[10px]">{peopleLabel}</span>
          </span>
          <span className="inline-flex items-center gap-1 rounded-md bg-[#16a85c] px-3 py-1.5 text-xs font-black text-white">
            <FaStar className="h-3 w-3" aria-hidden="true" />
            {rating}
          </span>
        </div>

        <div className="absolute right-3 top-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/18 text-white shadow-lg backdrop-blur transition-colors hover:bg-white hover:text-[#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Save ${packageTitle}`}
            title="Save package"
          >
            <FiHeart className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          className="absolute left-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/86 text-[#0f172a] shadow-md transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={`Previous ${packageTitle} photo`}
          title="Previous photo"
        >
          <FiChevronLeft aria-hidden="true" />
        </button>
        <button
          type="button"
          className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/86 text-[#0f172a] shadow-md transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label={`Next ${packageTitle} photo`}
          title="Next photo"
        >
          <FiChevronRight aria-hidden="true" />
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2" aria-hidden="true">
          <span className="h-1.5 w-8 rounded-full bg-white" />
          <span className="h-1.5 w-2 rounded-full bg-white/75" />
          <span className="h-1.5 w-2 rounded-full bg-white/75" />
          <span className="h-1.5 w-2 rounded-full bg-white/75" />
        </div>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-white/70 bg-black/28 px-3 py-1 text-xs font-extrabold text-white backdrop-blur">
              <FiMapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {routeStops[0] ?? packageItem.name}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#ff4e2f]">
              {durationLabel.replace(' days', 'N')} / {Number.parseInt(durationLabel, 10) + 1 || 7}D
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col">
        <div className="px-4 pb-4 pt-4">
          <h3 className="line-clamp-2 min-h-[52px] font-headline-md text-lg font-black leading-snug text-[#07152d]">
            {packageTitle}
          </h3>

          <div className="mt-3 flex flex-wrap items-center gap-2 rounded-md bg-[#fff8ee] px-3 py-2 text-xs font-extrabold text-[#4d4d4d]">
            {routeStops.slice(0, 2).map((stop, index) => (
              <span key={`${packageItem.name}-${stop}`} className="flex items-center gap-2">
                {index > 0 ? <span className="h-1.5 w-1.5 rounded-full bg-[#1f2937]" aria-hidden="true" /> : null}
                {index + 1}D {stop}
              </span>
            ))}
            {remainingStops > 0 ? (
              <span className="font-black text-[#ff4e2f]">+{remainingStops}</span>
            ) : null}
          </div>

          <div className="mt-2 flex items-center justify-between gap-3 border-t border-[#edf0f4] pt-3 text-sm font-bold text-[#1f2937]">
            <span className="inline-flex items-center gap-1">
              <FiClock className="h-4 w-4 text-[#07152d]" aria-hidden="true" />
              {durationLabel}
            </span>
            <span className="inline-flex items-center gap-1">
              <FiCalendar className="h-4 w-4 text-[#07152d]" aria-hidden="true" />
              Jul - Sep
            </span>
            <span className="inline-flex items-center gap-1">
              <FaStar className="h-4 w-4 text-[#ffb000]" aria-hidden="true" />
              ({reviewCount})
            </span>
          </div>
        </div>

        <div className="border-t border-[#edf0f4] bg-white px-4 py-4">
          <div className="mb-3 flex items-end justify-between gap-3">
            <p className="min-w-0 text-[#07152d]">
              <span className="block text-xs font-semibold text-[#4b5563]">{prefix}</span>
              <span className="font-price-display text-2xl font-black leading-none">{value}</span>
              {packageItem.originalPrice ? (
                <span className="ml-2 text-sm font-bold text-[#7b818c] line-through">{packageItem.originalPrice}</span>
              ) : null}
              <span className="block text-xs font-semibold text-[#4b5563]">{durationLabel} / person</span>
            </p>

            <span className="rounded-md bg-[#dfffe8] px-3 py-2 text-xs font-black uppercase text-[#009b4e]">
              {savingsLabel}
            </span>
          </div>

          <div className="grid grid-cols-[44px_1fr] gap-3">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-md bg-[#ff5a3c] text-white transition-colors hover:bg-[#e94629] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff5a3c]"
              aria-label={`Call about ${packageTitle}`}
              title="Call package expert"
            >
              <FiPhone className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="min-h-11 rounded-md bg-[#05b86b] px-4 text-sm font-black text-white transition-colors hover:bg-[#049e5d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#05b86b]"
            >
              View Itinerary
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
