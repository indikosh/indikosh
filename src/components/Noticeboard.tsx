type NoticeboardOffer = {
  destination: string
  brandLabel: string
  title: string
  subtitle: string
  dateLabel: string
  badgeLabel: string
  image: string
}

type NoticeboardProps = {
  offer: NoticeboardOffer
  imageOnly?: boolean
}

export default function Noticeboard({ offer, imageOnly = false }: NoticeboardProps) {
  if (imageOnly) {
    return (
      <article className="overflow-hidden rounded-[28px] bg-primary shadow-[0_22px_46px_rgba(15,23,42,0.14)] md:rounded-[36px]">
        <img src={offer.image} alt={offer.title} className="block h-auto w-full" />
      </article>
    )
  }

  return (
    <article className="relative isolate min-h-[220px] overflow-hidden rounded-[28px] bg-primary shadow-[0_22px_46px_rgba(15,23,42,0.14)] md:min-h-[360px] md:rounded-[36px]">
      <img src={offer.image} alt={offer.title} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,174,25,0.6),transparent_24%),linear-gradient(90deg,rgba(38,0,0,0.92),rgba(142,0,0,0.76)_48%,rgba(25,5,0,0.5))]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />

      <div className="relative z-10 flex min-h-[220px] flex-col justify-between px-12 py-7 text-white md:min-h-[360px] md:px-32 md:py-9">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-black">
            {offer.destination.slice(0, 2).toUpperCase()}
          </span>
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em]">{offer.destination}</p>
            <p className="text-[10px] font-semibold text-white/74">{offer.brandLabel}</p>
          </div>
        </div>

        <div className="max-w-[760px] py-4 md:py-6">
          <p className="mb-2 text-xs font-black uppercase tracking-[0.24em] text-[#ffd76b] md:text-sm">
            Limited Time Offer
          </p>
          <h2 className="font-headline-xl text-[24px] font-black uppercase leading-[0.92] tracking-wide text-[#ffe26a] drop-shadow-[0_3px_0_rgba(83,26,0,0.7)] md:text-[62px]">
            {offer.title}
          </h2> 
          <p className="mt-3 max-w-2xl text-sm font-extrabold uppercase tracking-wide text-white md:text-xl">
            {offer.subtitle}
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="w-max rounded-2xl border border-dashed border-white/35 bg-black/72 px-6 py-3 text-center shadow-lg md:px-10 md:py-4">
            <p className="text-sm font-black text-[#ffe26a] md:text-2xl">Starting from</p>
            <p className="mt-1 text-sm font-semibold md:text-2xl">{offer.dateLabel.replace('Starting from ', '')}</p>
          </div>
          <span className="w-max rounded-full border border-white/70 bg-white/10 px-4 py-2 text-[10px] font-black uppercase tracking-wide text-white backdrop-blur md:px-6">
            {offer.badgeLabel}
          </span>
        </div>
      </div>
    </article>
  )
}
