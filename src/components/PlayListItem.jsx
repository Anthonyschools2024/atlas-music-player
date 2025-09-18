function PlayListItem({ title, artist, duration }) {
  return (
    <button className="flex w-full cursor-pointer items-center justify-between rounded-xl p-3 text-left transition-colors duration-200 hover:bg-primary/10">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-text-primary">{title}</span>
        <span className="text-xs text-text-secondary">{artist}</span>
      </div>
      <span className="text-xs text-text-secondary">{duration}</span>
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
