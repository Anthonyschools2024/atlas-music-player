import CoverArt from './CoverArt';
import PlayControls from './PlayControls';
import SongTitle from './SongTitle';
import VolumeControls from './VolumeControls';

function CurrentlyPlaying() {
  return (
    <div className="flex flex-col gap-y-6 rounded-lg bg-neutral-900 p-6">
      <CoverArt />
      <SongTitle title="Come Together" artist="The Beatles" />
      <PlayControls />
      <VolumeControls />
    </div>
  );
}

export default CurrentlyPlaying;
