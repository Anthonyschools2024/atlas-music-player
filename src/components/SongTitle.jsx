function SongTitle({ title, artist }) {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-xl font-bold text-text-primary">{title}</h2>
      <p className="text-sm text-text-secondary">{artist}</p>
    </div>
  );
}

// Adding default props for easy demonstration
SongTitle.defaultProps = {
  title: 'Song Title',
  artist: 'Artist Name',
};

export default SongTitle;
