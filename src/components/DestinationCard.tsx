interface DestinationCardProps {
  name: string
  description: string
  price: string
  image: string
  badges?: { label: string; className: string }[]
}

export default function DestinationCard({
  name,
  description,
  price,
  image,
  badges,
}: DestinationCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative h-[420px]">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          src={image}
          alt={name}
        />
        {badges && (
          <div className="absolute top-4 left-4 flex gap-2">
            {badges.map((badge) => (
              <span
                key={badge.label}
                className={`${badge.className} px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-headline-md text-headline-md text-white mb-1">{name}</h3>
          <p className="text-white/80 text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-xs uppercase tracking-tighter">Starts at</p>
              <p className="font-price-display text-price-display text-white">{price}</p>
            </div>
            <button className="bg-white text-primary p-3 rounded-xl hover:bg-secondary hover:text-white transition-all shadow-lg cursor-pointer">
              <span className="material-symbols-outlined">arrow_outward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
