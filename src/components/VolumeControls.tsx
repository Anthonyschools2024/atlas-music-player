interface VolumeControlsProps {
  volume: number;
  onVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function VolumeControls({ volume, onVolumeChange }: VolumeControlsProps) {
  return (
    <div className="w-full">
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={onVolumeChange}
        className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-text-secondary/30 accent-primary"
        aria-label="Volume"
      />
    </div>
  );
}

export default VolumeControls;