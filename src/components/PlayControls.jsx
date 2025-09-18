import { Shuffle, SkipBack, Play, SkipForward, Gauge } from 'lucide-react';

function PlayControls() {
  return (
    <div className="flex items-center justify-center gap-x-6">
      {/* Speed Button */}
      <button className="text-text-secondary transition-colors duration-200 hover:text-text-primary">
        <Gauge size={20} />
      </button>

      {/* Back Button */}
      <button className="text-text-secondary transition-colors duration-200 hover:text-text-primary">
        <SkipBack size={24} fill="currentColor" />
      </button>

      {/* Play Button */}
      <button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-text-primary transition hover:scale-105">
        <Play size={28} fill="currentColor" className="ml-1" />
      </button>

      {/* Forward Button */}
      <button className="text-text-secondary transition-colors duration-200 hover:text-text-primary">
        <SkipForward size={24} fill="currentColor" />
      </button>

      {/* Shuffle Button */}
      <button className="text-text-secondary transition-colors duration-200 hover:text-text-primary">
        <Shuffle size={20} />
      </button>
    </div>
  );
}

export default PlayControls;
