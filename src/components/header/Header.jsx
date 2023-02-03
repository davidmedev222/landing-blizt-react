import { Link } from 'react-router-dom'; // COMPONENT
import { Button } from '../button/Button';
import { Theme } from '../theme/Theme';
import { useTheme } from '../../hooks/theme/useTheme';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header data-fade className="header">
      {/* TITLE */}
      <h2 className="header-title">blizt</h2>
      {/* NAVBAR */}
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link className="nav-a" to={'/'}>
              services
            </Link>
            <svg className="nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </li>
          <li className="nav-li">
            <Link className="nav-a" to={'/'}>
              projects
            </Link>
            <svg className="nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </li>
          <li className="nav-li">
            <Link className="nav-a" to={'/'}>
              about
            </Link>
          </li>
        </ul>
      </nav>
      {/* BUTTON */}
      <Button className="header-btn">contact us</Button>
      {/* DARK MODE */}
      <Theme toggleTheme={toggleTheme} theme={theme} />
    </header>
  );
};

export { Header };
