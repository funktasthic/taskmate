import { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';

export const Header = () => {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='logo' />
        <span>Taskmate</span>
      </div>
      <div className='themeSelector'>
        <span
          onClick={() => setTheme('light')}
          className={`${theme === 'light' ? 'activeTheme' : ''} light`}
        ></span>
        <span
          onClick={() => setTheme('dark')}
          className={`${theme === 'dark' ? 'activeTheme' : ''} dark`}
        ></span>
      </div>
    </header>
  );
};
