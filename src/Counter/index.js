import React from 'react'

const Counter = ({ character, maxCharacter }) => {  
  const charRemain = maxCharacter - character
  const showError = (maxCharacter && character === maxCharacter)    
  return (
    <span className={ showError ? 'ola_counter-error' : null}>{`${charRemain} / ${maxCharacter}`}</span>
  )
}

export default Counter