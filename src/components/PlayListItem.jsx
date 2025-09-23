function PlayListItem({ title = 'Song Title', artist = 'Artist Name', duration = '3:45' }) {
  return (
    <div className="flex w-full items-center justify-between p-3 text-left">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-text-primary">{title}</span>
        <span className="text-xs text-text-secondary">{artist}</span>
      </div>
      <span className="text-xs text-text-secondary">{duration}</span>
    </div>
  );
}

export default PlayListItem;
