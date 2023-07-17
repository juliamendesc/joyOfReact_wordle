import React from 'react'
import Guess from '../Guess/Guess'

function GuessList({ guesses, answer, setIsSolved }) {
  return (
    <div className="guess-results">
      {guesses.map(guess => {
        return (
          <p className="guess" key={crypto.randomUUID()}>
            <Guess guess={guess} answer={answer} setIsSolved={setIsSolved} />
          </p>
        )
      })}
    </div>
  )
}

export default GuessList
