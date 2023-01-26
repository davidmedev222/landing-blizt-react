import { Link } from 'react-router-dom'; // COMPONENT
import { useToggle } from '../../hooks/toggle/useToggle';
import { Button } from '../button/Button';

const Header = () => {
  const { toggle, onToggle } = useToggle();

  return (
    <header className="header">
      {/* TITLE */}
      <h2 className="header-title">blizt</h2>
      {/* MENU */}
      <button onClick={onToggle} className="header-menu">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
      {/* NAVBAR */}
      <nav className={`nav ${toggle ? 'nav-active' : ''}`}>
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
    </header>
  );
};

export { Header };
