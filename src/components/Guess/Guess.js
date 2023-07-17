import React from 'react'
import { checkGuess } from '../../game-helpers'

function Guess({ guess, answer, setIsSolved }) {
  React.useEffect(() => {
    if (guess === answer) {
      setIsSolved(true)
    }
  }, [guess, answer, setIsSolved])

  return checkGuess(guess, answer).map(letter => (
    <span className={`cell ${letter.status}`} key={crypto.randomUUID()}>
      {letter.letter || ' '}
    </span>
  ))
}

export default Guess
