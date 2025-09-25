import { Sun, Moon } from 'lucide-react';
import useDarkMode from '../hooks/useDarkMode';

function Footer() {
  const [theme, setTheme] = useDarkMode();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <footer className="flex flex-col items-center justify-center gap-4 bg-background py-8 text-text-secondary">
      <p>&copy; 2024 Atlas School</p>
      <button
        onClick={toggleTheme}
        className="rounded-full p-2 text-text-primary transition-colors duration-200 hover:bg-surface"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </footer>
  );
}

export default Footer;
