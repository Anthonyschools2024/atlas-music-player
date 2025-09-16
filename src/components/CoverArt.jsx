import coverArtPlaceholder from '../assets/cover-art-placeholder.png';

function CoverArt() {
  return (
    <div className="w-full">
      <img
        src={coverArtPlaceholder}
        alt="Album cover art"
        className="aspect-square w-full rounded-lg object-cover"
      />
    </div>
  );
}

export default CoverArt;
