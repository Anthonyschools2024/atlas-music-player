import { useState } from 'react';
import PlayListItem from './PlayListItem';

const songs = [
  { id: 1, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
  { id: 2, title: 'Fading Shadows', artist: 'The Emberlight', duration: '5:55' },
  { id: 3, title: 'Cosmic Drift', artist: 'Solar Flare', duration: '6:30' },
];

function Playlist() {
  const [selectedSongId, setSelectedSongId] = useState(2);

  return (
    <div className="flex flex-col gap-y-1 rounded-xl bg-surface p-4 shadow-lg">
      <h3 className="px-3 pb-2 text-lg font-bold text-text-primary">Playlist</h3>
      {songs.map((song) => (
        <div
          key={song.id}
          className={`cursor-pointer rounded-lg transition-colors duration-200 hover:bg-primary/10 ${
            selectedSongId === song.id ? 'bg-primary/20' : 'bg-transparent'
          }`}
          onClick={() => setSelectedSongId(song.id)}
        >
          <PlayListItem {...song} />
        </div>
      ))}
    </div>
  );
}

export default Playlist;
