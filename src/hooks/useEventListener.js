import { useEffect } from 'react'

const useEventListener = (ref, event, func) => {
  useEffect(() => {
    // Bind the event listener
    ref && ref.addEventListener(event, func)
    return () => {
      // Unbind the event listener on clean up
      ref && ref.removeEventListener(event, func)
    }
  })
}

export default useEventListener
