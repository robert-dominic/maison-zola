import { Skeleton } from '@/components/ui/skeleton'

export function CollectionPieceSkeleton() {
  return (
    <div className="px-5 pt-12 pb-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-center gap-2">
          <Skeleton className="h-3 w-20 bg-cream-muted/65" />
          <Skeleton className="h-2 w-2 rounded-full bg-cream-muted/65" />
          <Skeleton className="h-3 w-32 bg-cream-muted/65" />
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-16">
          <div className="overflow-hidden rounded-lg border border-border bg-cream">
            <Skeleton className="h-[68vh] min-h-[26rem] w-full rounded-none bg-cream-muted/80 sm:h-[72vh] md:h-[78vh] lg:h-full" />
          </div>

          <div className="space-y-8 rounded-xl border border-border p-4 lg:flex lg:h-full lg:flex-col lg:pt-4">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <Skeleton className="h-px w-4 rounded-full bg-gold/35" />
                <Skeleton className="h-3 w-24 bg-cream-muted/65" />
              </div>
              <Skeleton className="h-8 w-2/3 bg-cream-muted/75 sm:h-12" />
            </div>

            <Skeleton className="h-px w-full rounded-full bg-cream-muted/65" />

            <div className="space-y-3">
              <Skeleton className="h-4 w-full bg-cream-muted/65" />
              <Skeleton className="h-4 w-full bg-cream-muted/65" />
              <Skeleton className="h-4 w-5/6 bg-cream-muted/65" />
            </div>

            <div className="rounded-lg border border-border bg-cream-muted/60 p-5">
              <Skeleton className="h-3 w-24 bg-cream-muted/75" />
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Skeleton className="h-3 w-16 bg-cream-muted/65" />
                  <Skeleton className="h-5 w-28 bg-cream-muted/75" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-3 w-14 bg-cream-muted/65" />
                  <Skeleton className="h-5 w-20 bg-cream-muted/75" />
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <Skeleton className="h-13 w-full bg-cream-muted/80" />
              <Skeleton className="h-13 w-full bg-cream-muted/70" />
            </div>

            <Skeleton className="h-3 w-5/6 bg-cream-muted/65" />
          </div>
        </div>

        <div className="mt-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Skeleton className="h-px w-4 rounded-full bg-gold/35" />
                <Skeleton className="h-3 w-28 bg-cream-muted/65" />
              </div>
              <Skeleton className="h-7 w-40 bg-cream-muted/75" />
            </div>
            <Skeleton className="h-3 w-16 bg-cream-muted/65" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-cream"
              >
                <Skeleton className="aspect-[4/5] w-full rounded-none bg-cream-muted/80" />
                <div className="flex flex-1 flex-col p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Skeleton className="h-px w-4 rounded-full bg-gold/35" />
                    <Skeleton className="h-3 w-28 bg-cream-muted/65" />
                  </div>
                  <Skeleton className="h-7 w-3/4 bg-cream-muted/70" />
                  <Skeleton className="mt-3 h-4 w-full bg-cream-muted/65" />
                  <Skeleton className="mt-2 h-4 w-5/6 bg-cream-muted/65" />
                  <Skeleton className="mt-auto h-4 w-24 bg-cream-muted/65 pt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
