import CoverArt from './CoverArt';
import PlayControls from './PlayControls';
import SongTitle from './SongTitle';
import VolumeControls from './VolumeControls';

function CurrentlyPlaying() {
  return (
    <div className="flex flex-col gap-y-6 rounded-xl bg-surface p-6 shadow-lg">
      <CoverArt />
      <SongTitle title="Come Together" artist="The Beatles" />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}

export default CurrentlyPlaying;
