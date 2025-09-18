import { useState } from 'react';
import PlayListItem from './PlayListItem';

// Sample data for the playlist
const songs = [
  { id: 1, title: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: '8:02' },
  { id: 2, title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' },
  { id: 3, title: 'Hotel California', artist: 'Eagles', duration: '6:30' },
  { id: 4, title: 'Like a Rolling Stone', artist: 'Bob Dylan', duration: '6:13' },
  { id: 5, title: 'Smells Like Teen Spirit', artist: 'Nirvana', duration: '5:01' },
  { id: 6, title: 'Imagine', artist: 'John Lennon', duration: '3:01' },
];

function Playlist() {
  // State to track the currently selected song ID. Default to the second song.
  const [selectedSongId, setSelectedSongId] = useState(2);

  return (
    <div className="flex flex-col gap-y-2 rounded-xl bg-surface p-4 shadow-lg">
      <h3 className="px-2 pb-2 text-lg font-bold text-text-primary">Playlist</h3>
      {songs.map((song) => (
        <div
          key={song.id}
          // Apply a background color if the song is selected
          className={`rounded-xl transition-colors duration-200 ${
            selectedSongId === song.id ? 'bg-primary/20' : 'bg-transparent'
          }`}
          // Update the selected song ID on click
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
