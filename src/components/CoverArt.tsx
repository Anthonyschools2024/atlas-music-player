import { useState } from 'react';
import { Song } from '../types';
import { fetchLyrics } from '../api';

interface CoverArtProps {
  song: Song | null;
}

function CoverArt({ song }: CoverArtProps) {
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isLoadingLyrics, setIsLoadingLyrics] = useState<boolean>(false);

  const handleMouseEnter = async () => {
    setIsHovering(true);
    if (!lyrics && song) {
        setIsLoadingLyrics(true);
        try {
            const fetchedLyrics = await fetchLyrics(song.id);
            setLyrics(fetchedLyrics.lyrics);
        } catch (error) {
            console.error("Failed to fetch lyrics:", error);
            setLyrics("Lyrics not available.");
        } finally {
            setIsLoadingLyrics(false);
        }
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  
  if (!song) {
    return <div className="aspect-square w-full rounded-xl bg-surface/50 animate-pulse"></div>;
  }

  return (
    <div 
      className="relative w-full overflow-hidden rounded-xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={song.artwork}
        alt={`${song.title} by ${song.artist}`}
        className="aspect-square w-full object-cover transition-transform duration-300"
      />
      {isHovering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
            <p className="whitespace-pre-wrap text-center text-sm text-white">
                {isLoadingLyrics ? 'Loading lyrics...' : lyrics}
            </p>
        </div>
      )}
    </div>
  );
}

export default CoverArt;