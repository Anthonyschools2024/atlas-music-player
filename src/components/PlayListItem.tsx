import { Song } from '../types';
import { formatDuration } from '../utils';

interface PlayListItemProps {
  song: Song;
}

function PlayListItem({ song }: PlayListItemProps) {
  return (
    <div className="flex w-full items-center justify-between p-3 text-left">
      <div className="flex flex-col">
        <span className="text-sm font-medium text-text-primary">{song.title}</span>
        <span className="text-xs text-text-secondary">{song.artist}</span>
      </div>
      <span className="text-xs text-text-secondary">{formatDuration(song.duration)}</span>
    </div>
  );
}

export default PlayListItem;