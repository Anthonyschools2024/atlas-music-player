import { useState } from 'react';
import PlayListItem from './PlayListItem';

// Sample data for the playlist
const songs = [
  { id: 1, title: 'Tidal Drift', artist: 'Echoes of the Sea', duration: '8:02' },
  { id: 2, title: 'Fading Shadows', artist: 'The Emberlight', duration: '5:55' },
  { id: 3, title: 'Cosmic Drift', artist: 'Solar Flare', duration: '6:30' },
  { id: 4, title: 'Urban Serenade', artist: 'Midnight Groove', duration: '6:13' },
  { id: 5, title: 'Whispers in the Wind', artist: 'Lost & Ruin', duration: '5:01' },
  { id: 6, title: 'Electric Fever', artist: 'Neon Jungle', duration: '3:01' },
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
            selectedSongId === song.id ? 'bg-primary/10' : 'bg-transparent'
          }`}
          onClick={() => setSelectedSongId(song.id)}
        >
          <PlayListItem
            title={song.title}
            artist={song.artist}
            duration={song.duration}
          />
        </div>
      ))}
    </div>
  );
}

export default Playlist;
