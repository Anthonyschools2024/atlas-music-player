function VolumeControls() {
  return (
    <div className="w-full">
      <input
        type="range"
        min="0"
        max="100"
        defaultValue="80"
        className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-neutral-600 accent-white"
        aria-label="Volume"
      />
    </div>
  );
}

export default VolumeControls;
