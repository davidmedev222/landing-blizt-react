import { Link } from 'react-router-dom'
import { IconArrow } from '../export.jsx'

const Navbar = () => {
  return (
    <nav className='nav'>
      <ul className='nav-ul'>
        <li className='nav-li'>
          <Link className='nav-a' to='/services'>
            services
          </Link>
          <IconArrow className='nav-arrow' />
        </li>
        <li className='nav-li'>
          <Link className='nav-a' to='/projects'>
            projects
          </Link>
          <IconArrow className='nav-arrow' />
        </li>
        <li className='nav-li'>
          <Link className='nav-a' to='/about'>
            about
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export { Navbar }
