import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

function MusicPlayer() {
  return (
    <div className="min-h-screen bg-background p-4 text-text-primary md:p-8 border-2 border-accent rounded-2xl">
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Left Column: Currently Playing */}
        <div className="w-full md:w-2/5">
          <CurrentlyPlaying />
        </div>

        {/* Right Column: Playlist */}
        <div className="w-full md:w-3/5">
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
