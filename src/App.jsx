import { useState, useEffect } from 'react';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import LoadingSkeleton from './components/LoadingSkeleton';
import useDarkMode from './hooks/useDarkMode';
import './index.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useDarkMode();

  // Simulate a data fetch on initial component load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show skeleton for 3 seconds

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, []); // The empty array ensures this effect runs only once

  return (
    <main className="bg-background">
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <MusicPlayer />
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
