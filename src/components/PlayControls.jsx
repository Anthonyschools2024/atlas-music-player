import { useState } from 'react';
import { Shuffle, SkipBack, Play, Pause, SkipForward, Gauge } from 'lucide-react';

function PlayControls() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex items-center justify-center gap-x-6">
      <button className="text-text-secondary transition-colors duration-200 hover:text-text-primary"><Gauge size={20} /></button>
      <button className="text-text-secondary transition-colors duration-200 hover:text-text-primary"><SkipBack size={24} fill="currentColor" /></button>
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-background transition hover:scale-105"
      >
        {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
      </button>
      <button className="text-text-secondary transition-colors duration-200 hover:text-text-primary"><SkipForward size={24} fill="currentColor" /></button>
      <button className="text-text-secondary transition-colors duration-200 hover:text-text-primary"><Shuffle size={20} /></button>
    </div>
  );
}

export default PlayControls;
