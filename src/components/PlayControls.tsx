import { Shuffle, SkipBack, Play, Pause, SkipForward, Gauge } from 'lucide-react';

interface PlayControlsProps {
  isPlaying: boolean;
  isShuffling: boolean;
  playbackSpeed: number;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  onShuffle: () => void;
  onChangeSpeed: () => void;
}

function PlayControls({ 
  isPlaying, 
  isShuffling, 
  playbackSpeed,
  isNextDisabled,
  isPrevDisabled,
  onPlayPause, 
  onNext, 
  onPrev, 
  onShuffle, 
  onChangeSpeed 
}: PlayControlsProps) {
  return (
    <div className="flex items-center justify-center gap-x-6">
      <button 
        onClick={onChangeSpeed}
        className="w-10 text-text-secondary transition-colors duration-200 hover:text-text-primary"
      >
        {playbackSpeed}x
      </button>

      <button onClick={onPrev} disabled={isPrevDisabled} className="text-text-secondary transition-colors duration-200 hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed">
        <SkipBack size={24} fill="currentColor" />
      </button>

      <button
        onClick={onPlayPause}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-background transition hover:scale-105"
      >
        {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
      </button>

      <button onClick={onNext} disabled={isNextDisabled} className="text-text-secondary transition-colors duration-200 hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed">
        <SkipForward size={24} fill="currentColor" />
      </button>

      <button 
        onClick={onShuffle} 
        className={`transition-colors duration-200 ${isShuffling ? 'text-primary' : 'text-text-secondary hover:text-text-primary'}`}
      >
        <Shuffle size={20} />
      </button>
    </div>
  );
}

export default PlayControls;