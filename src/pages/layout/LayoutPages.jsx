import { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'
import { Header, Loader } from '../../components/export'

const LayoutPages = () => {
  const [isLoading, updateIsLoading] = useState(true)

  useEffect(() => {
    const show = setTimeout(() => updateIsLoading(false), 4000)

    return () => clearTimeout(show)
  }, [])

  return isLoading ? <Loader /> : <> <Header /> <Outlet /> </>
}

export { LayoutPages }
