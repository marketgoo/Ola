import { useEffect } from 'react'

const useEventListener = (ref, event, func) => {
  useEffect(() => {
    // Bind the event listener
    if(ref && ref.current) ref.current.addEventListener(event, func)
    return () => {
      // Unbind the event listener on clean up
      if(ref && ref.current) ref.current.removeEventListener(event, func)
    }
  })
}

export default useEventListener
