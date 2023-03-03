import { useEffect, useState } from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
  const [show, updateShow] = useState(true)

  useEffect(() => {
    const show = setTimeout(() => updateShow(false), 4000)

    return () => clearTimeout(show)
  }, [])

  return show && <Triangle wrapperClass='loader' color='#ffffff' ariaLabel='triangle-loading' />
}

export { Loader }
