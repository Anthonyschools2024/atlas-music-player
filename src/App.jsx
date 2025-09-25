import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import useDarkMode from './hooks/useDarkMode';
import './index.css';

function App() {
  // This initializes the dark mode functionality
  useDarkMode();

  return (
    <main className="bg-background">
      <MusicPlayer />
      <Footer />
    </main>
  );
}

export default App;
