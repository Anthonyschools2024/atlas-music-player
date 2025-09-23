import { coverArt } from '../assets';

function CoverArt() {
  return (
    <div className="w-full">
      <img
        src={coverArt}
        alt="Album cover art"
        className="aspect-square w-full rounded-xl object-cover"
      />
    </div>
  );
}

export default CoverArt;
