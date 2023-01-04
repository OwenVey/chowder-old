import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from '.';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      icon={theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
      variant="subtle"
      color="gray"
    />
  );
};

export default ThemeToggler;
