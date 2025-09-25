import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import useDarkMode from './hooks/useDarkMode';
import './index.css';

function App() {
  // Initialize the hook here to set the theme on initial page load
  useDarkMode();

  return (
    <main className="bg-background">
      <MusicPlayer />
      <Footer />
    </main>
  );
}

export default App;
