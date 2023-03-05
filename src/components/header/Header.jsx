import { ThemeContext } from '../../context/theme/ThemeContext'
import { Navbar, Button } from '../export'
import { Theme } from '../theme/Theme'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useIntersection } from '../../hooks/intersection/useIntersection'

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const [elementRef, isIntersecting] = useIntersection({
    threshold: 1
  }, true)

  return (
    <header ref={elementRef} data-fade={isIntersecting} className='header'>
      {/* TITLE */}
      <Link to='/' className='header-a'>blizt</Link>
      {/* NAVBAR */}
      <Navbar />
      {/* BUTTON */}
      <Button className='header-btn'>contact us</Button>
      {/* DARK MODE */}
      <Theme toggleTheme={toggleTheme} theme={theme} />
    </header>
  )
}

export { Header }
