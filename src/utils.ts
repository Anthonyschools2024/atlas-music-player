/**
 * Formats a duration in seconds into a MM:SS string.
 * @param seconds - The duration in seconds.
 * @returns A string in MM:SS format.
 */
export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
};