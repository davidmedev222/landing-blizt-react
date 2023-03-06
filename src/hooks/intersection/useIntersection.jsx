import { useRef, useEffect, useState } from 'react'

const useIntersection = (options = {}, unobserve = false) => {
  const [isIntersecting, updateIsIntersecting] = useState(false)
  const ref = useRef(null)

  const callback = (elements) => elements.forEach((element) => {
    if (element.isIntersecting) {
      updateIsIntersecting(true)
      if (unobserve) {
        observer.unobserve(element.target)
      }
    } else {
      updateIsIntersecting(false)
    }
  })

  const observer = new window.IntersectionObserver(callback, options)

  useEffect(() => {
    const element = ref.current

    if (element) return observer.observe(element)

    return () => element && observer.unobserve(element)
  }, [])

  return [ref, isIntersecting]
}

export { useIntersection }
