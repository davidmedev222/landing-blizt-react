import { useState, useEffect } from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
  const [isLoading, updateIsLoading] = useState(true)

  useEffect(() => {
    const show = setTimeout(() => updateIsLoading(false), 4000)

    return () => clearTimeout(show)
  }, [])

  return isLoading && <Triangle wrapperClass='loader' color='#ffffff' ariaLabel='triangle-loading' />
}

export { Loader }
