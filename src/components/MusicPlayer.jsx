import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

function MusicPlayer() {
  return (
    <div className="bg-background p-4 font-sans text-text-primary md:p-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row">
        <div className="w-full md:w-2/5">
          <CurrentlyPlaying />
        </div>
        <div className="w-full md:w-3/5">
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
