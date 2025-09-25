import { useState } from 'react';
import { Song } from '../types';
import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

interface MusicPlayerProps {
  initialPlaylist: Song[];
}

function MusicPlayer({ initialPlaylist }: MusicPlayerProps) {
  const [playlist, setPlaylist] = useState<Song[]>(initialPlaylist);
  const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(50);

  const currentSong = playlist[currentSongIndex];

  const handleSelectSong = (index: number) => {
    setCurrentSongIndex(index);
    setIsPlaying(true); // Auto-play when a new song is selected
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    if (isShuffling) {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * playlist.length);
      } while (randomIndex === currentSongIndex); // Ensure we don't play the same song twice
      setCurrentSongIndex(randomIndex);
    } else {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    }
  };

  const handlePrevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
  };
  
  const handleChangeSpeed = () => {
    const speeds = [1, 1.5, 2, 0.5];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIndex]);
  };

  const handleToggleShuffle = () => {
    setIsShuffling(!isShuffling);
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(event.target.value));
  };
  
  const isPrevDisabled = currentSongIndex === 0 && !isShuffling;
  const isNextDisabled = currentSongIndex === playlist.length - 1 && !isShuffling;

  return (
    <div className="bg-background p-4 font-sans text-text-primary md:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row">
        <div className="w-full md:w-2/5">
          <CurrentlyPlaying
            song={currentSong}
            isPlaying={isPlaying}
            playbackSpeed={playbackSpeed}
            isShuffling={isShuffling}
            volume={volume}
            isPrevDisabled={isPrevDisabled}
            isNextDisabled={isNextDisabled}
            onPlayPause={handlePlayPause}
            onNext={handleNextSong}
            onPrev={handlePrevSong}
            onChangeSpeed={handleChangeSpeed}
            onShuffle={handleToggleShuffle}
            onVolumeChange={handleVolumeChange}
          />
        </div>
        <div className="w-full md:w-3/5">
          <Playlist
            songs={playlist}
            currentSongId={currentSong.id}
            onSelectSong={handleSelectSong}
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;