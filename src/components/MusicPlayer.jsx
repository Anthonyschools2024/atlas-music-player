import CurrentlyPlaying from './CurrentlyPlaying';
import Playlist from './Playlist';

function MusicPlayer() {
  return (
    <div className="min-h-screen bg-black p-4 text-white md:p-8">
      <div className="flex flex-col gap-4 md:flex-row">
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
