import { Song, Lyrics } from './types';

const API_BASE_URL = '/api';

export const fetchPlaylist = async (): Promise<Song[]> => {
  const response = await fetch(`${API_BASE_URL}/playlist`);
  if (!response.ok) {
    throw new Error('Failed to fetch playlist');
  }
  const data = await response.json();
  // The API returns a path like /images/artwork.jpg
  // The proxy will now correctly handle this relative path.
  return data;
};

export const fetchLyrics = async (songId: number): Promise<Lyrics> => {
    const response = await fetch(`${API_BASE_URL}/songs/${songId}/lyrics`);
    if (!response.ok) {
      throw new Error('Failed to fetch lyrics');
    }
    return response.json();
}