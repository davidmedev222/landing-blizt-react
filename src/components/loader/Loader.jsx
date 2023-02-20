import { useEffect, useState } from 'react'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
  const [loader, updateLoader] = useState({
    class: 'loader',
    view: true
  })

  useEffect(() => {
    setTimeout(() => {
      updateLoader({ ...loader, class: 'loader loader-off' })
    }, 3000)
    setTimeout(() => {
      updateLoader({ ...loader, view: false })
    }, 3500)
  }, [])

  return loader.view && <Triangle wrapperClass={loader.class} color='#ffffff' ariaLabel='triangle-loading' />
}

export { Loader }
