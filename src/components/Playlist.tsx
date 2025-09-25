import { Song } from '../types';
import PlayListItem from './PlayListItem';

interface PlaylistProps {
  songs: Song[];
  currentSongId: number;
  onSelectSong: (index: number) => void;
}

function Playlist({ songs, currentSongId, onSelectSong }: PlaylistProps) {
  return (
    <div className="flex flex-col gap-y-1 rounded-xl bg-surface p-4 shadow-lg">
      <h3 className="px-3 pb-2 text-lg font-bold text-text-primary">Playlist</h3>
      {songs.map((song, index) => (
        <div
          key={song.id}
          className={`cursor-pointer rounded-lg transition-colors duration-200 hover:bg-primary/10 ${
            currentSongId === song.id ? 'bg-primary/20' : 'bg-transparent'
          }`}
          onClick={() => onSelectSong(index)}
        >
          <PlayListItem song={song} />
        </div>
      ))}
    </div>
  );
}

export default Playlist;