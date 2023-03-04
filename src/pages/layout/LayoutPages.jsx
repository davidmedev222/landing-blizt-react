import { Outlet } from 'react-router-dom'
import { Header, Loader } from '../../components/export'

const LayoutPages = () => {
  return (
    <>
      <Loader />
      <Header />
      <Outlet />
    </>
  )
}

export { LayoutPages }
