import Logo from '../assets/logo.svg';

export const Header = () => {
  return (
    <header>
      <div className='logo'>
        <img src={Logo} alt='logo' />
        <span>Taskmate</span>
      </div>
      <div className='themeSelector'>
        <span className='light'></span>
        <span className='dark activeTheme'></span>
      </div>
    </header>
  );
};
