function PlayListItem({ title, artist, duration }) {
  return (
    <button className="flex w-full cursor-pointer items-center justify-between rounded-lg p-2 text-left transition hover:bg-neutral-800">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-white">{title}</span>
        <span className="text-xs text-neutral-400">{artist}</span>
      </div>
      <span className="text-xs text-neutral-400">{duration}</span>
    </button>
  );
}

// Adding default props for easy demonstration
PlayListItem.defaultProps = {
  title: 'Song Title',
  artist: 'Artist Name',
  duration: '3:45',
};

export default PlayListItem;
