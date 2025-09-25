// A helper component to avoid repeating the playlist item skeleton
const PlaylistItemSkeleton = () => (
  <div className="flex w-full items-center justify-between">
    <div className="flex flex-col gap-2">
      <div className="h-4 w-48 rounded bg-surface/50"></div>
      <div className="h-3 w-32 rounded bg-surface/50"></div>
    </div>
    <div className="h-3 w-8 rounded bg-surface/50"></div>
  </div>
);

function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background p-4 font-sans md:p-8">
      <div className="mx-auto flex max-w-7xl animate-pulse flex-col gap-8 md:flex-row">
        
        {/* Left Column: Currently Playing Skeleton */}
        <div className="flex w-full flex-col gap-y-6 md:w-2/5">
          <div className="aspect-square w-full rounded-xl bg-surface/50"></div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-6 w-3/5 rounded-md bg-surface/50"></div>
            <div className="h-4 w-2/5 rounded-md bg-surface/50"></div>
          </div>
          <div className="flex items-center justify-center gap-x-6">
            <div className="h-5 w-5 rounded-full bg-surface/50"></div>
            <div className="h-6 w-6 rounded-full bg-surface/50"></div>
            <div className="h-12 w-12 rounded-full bg-surface/50"></div>
            <div className="h-6 w-6 rounded-full bg-surface/50"></div>
            <div className="h-5 w-5 rounded-full bg-surface/50"></div>
          </div>
          <div className="h-1 w-full rounded-lg bg-surface/50"></div>
        </div>

        {/* Right Column: Playlist Skeleton */}
        <div className="flex w-full flex-col gap-y-4 md:w-3/5">
          <div className="h-7 w-32 rounded-md bg-surface/50 px-3"></div>
          <div className="flex flex-col gap-y-4">
            {/* Create an array of 10 items to map over for the skeleton list */}
            {Array.from({ length: 10 }).map((_, index) => (
              <PlaylistItemSkeleton key={index} />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default LoadingSkeleton;
