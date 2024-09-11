import { useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { selectDarkMode, toggleDarkMode } from './darkModeSlice';

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(selectDarkMode);

  console.log(isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [isDarkMode]);

  return (
    <button
      className='max-w-max py-2'
      onClick={() => dispatch(toggleDarkMode())}
    >
      {isDarkMode ? <Moon size={30} /> : <Sun size={30} />}
    </button>
  );
};

export default ThemeSwitcher;
