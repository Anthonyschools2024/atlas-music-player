import { Song } from '../types';
import CoverArt from './CoverArt';
import PlayControls from './PlayControls';
import SongTitle from './SongTitle';
import VolumeControls from './VolumeControls';

interface CurrentlyPlayingProps {
  song: Song;
  isPlaying: boolean;
  playbackSpeed: number;
  isShuffling: boolean;
  volume: number;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  onChangeSpeed: () => void;
  onShuffle: () => void;
  onVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function CurrentlyPlaying(props: CurrentlyPlayingProps) {
  return (
    <div className="flex flex-col gap-y-6 rounded-xl bg-surface p-6 shadow-lg">
      <CoverArt song={props.song} />
      <SongTitle title={props.song.title} artist={props.song.artist} />
      <PlayControls
        isPlaying={props.isPlaying}
        isShuffling={props.isShuffling}
        playbackSpeed={props.playbackSpeed}
        isNextDisabled={props.isNextDisabled}
        isPrevDisabled={props.isPrevDisabled}
        onPlayPause={props.onPlayPause}
        onNext={props.onNext}
        onPrev={props.onPrev}
        onChangeSpeed={props.onChangeSpeed}
        onShuffle={props.onShuffle}
      />
      <VolumeControls volume={props.volume} onVolumeChange={props.onVolumeChange} />
    </div>
  );
}

export default CurrentlyPlaying;