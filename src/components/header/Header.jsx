import { ThemeContext } from '../../context/theme/ThemeContext'
import { Navbar, Button } from '../export'
import { Theme } from '../theme/Theme'
import { useContext } from 'react'

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header data-fade className='header'>
      {/* TITLE */}
      <h2 className='header-title'>blizt</h2>
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
