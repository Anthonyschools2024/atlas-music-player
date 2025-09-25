import { useState, useEffect } from 'react';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import LoadingSkeleton from './components/LoadingSkeleton';
import useDarkMode from './hooks/useDarkMode';
import { fetchPlaylist } from './api';
import { Song } from './types';
import './index.css';

function App() {
  const [playlist, setPlaylist] = useState<Song[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  useDarkMode();

  useEffect(() => {
    // Simulate a longer fetch to see the skeleton
    const timer = setTimeout(() => {
      const loadPlaylist = async () => {
        try {
          const data = await fetchPlaylist();
          setPlaylist(data);
        } catch (err) {
          setError('Failed to load playlist. Please make sure the API server is running.');
          console.error(err);
        }
      };
      loadPlaylist();
    }, 3000); // Show skeleton for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    if (error) {
      return <div className="flex h-screen items-center justify-center bg-background p-4 text-center text-text-primary">{error}</div>;
    }
    // Show the skeleton if the playlist is not yet loaded
    if (!playlist) {
      return <LoadingSkeleton />;
    }
    return <MusicPlayer initialPlaylist={playlist} />;
  };

  return (
    <main className="bg-background">
      {renderContent()}
      <Footer />
    </main>
  );
}

export default App;