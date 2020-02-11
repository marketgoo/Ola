import { useEffect } from 'react'

const useOutsideEvent = (ref, callback) => {

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)){
      callback(ref)
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

}

export default useOutsideEvent
