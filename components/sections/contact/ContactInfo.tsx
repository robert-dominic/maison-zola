const info = [
  {
    label: 'Location',
    value: 'Monrovia, Liberia',
    detail: 'Consultations by appointment only',
  },
  {
    label: 'Email',
    value: 'hello@maisonzola.com',
    detail: 'We respond within 48 hours',
  },
  {
    label: 'Instagram',
    value: '@maisonzola',
    detail: 'Follow our latest work',
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6 lg:pt-1">
      {info.map((item) => (
        <div
          key={item.label}
          className="rounded-lg border border-border bg-cream p-5 space-y-1.5"
        >
          <p className="font-sans-body text-[9px] tracking-[0.24em] uppercase text-gold">
            {item.label}
          </p>
          <p className="font-serif-display text-lg text-ink">{item.value}</p>
          <p className="font-sans-body text-[11px] leading-5 text-stone">{item.detail}</p>
        </div>
      ))}

      <div className="rounded-lg border border-border bg-cream-muted/60 p-5">
        <p className="font-sans-body text-[11px] leading-6 text-stone">
          Maison Zola operates by appointment. Walk-ins are not available. All consultations
          are private and held at our Monrovia studio.
        </p>
      </div>
    </div>
  )
}