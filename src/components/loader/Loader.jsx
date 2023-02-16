import { useEffect, useState } from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
  const [loaderClass, updateLoaderClass] = useState('loader')

  useEffect(() => {
    setTimeout(() => {
      updateLoaderClass('loader loader-active')
    }, 3000)
  }, [])

  return <Triangle wrapperClass={loaderClass} color='#ffffff' ariaLabel='triangle-loading' />
}

export { Loader }
