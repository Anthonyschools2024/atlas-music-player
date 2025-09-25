export interface Song {
  id: number;
  title: string;
  artist: string;
  duration: number; // Duration in seconds
  artwork: string; // This will be the path for the artwork
}

export interface Lyrics {
  lyrics: string;
  timestamp: number;
}