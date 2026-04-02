import { Skeleton } from '@/components/ui/skeleton'

export function CollectionsGridSkeleton() {
  return (
    <div className="space-y-10">
      <div className="flex flex-wrap items-center gap-2 md:gap-3">
        {['w-14', 'w-16', 'w-20', 'w-28', 'w-32'].map((width) => (
          <Skeleton
            key={width}
            className={`h-9 rounded-full bg-cream-muted/70 ${width}`}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-cream"
          >
            <Skeleton className="aspect-[4/5] w-full rounded-none bg-cream-muted/80" />
            <div className="flex flex-1 flex-col p-4">
              <div className="mb-3 flex items-center gap-2">
                <Skeleton className="h-px w-4 rounded-full bg-gold/35" />
                <Skeleton className="h-3 w-32 bg-cream-muted/70" />
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
  )
}
