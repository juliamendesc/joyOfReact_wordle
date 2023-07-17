import React from 'react'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessInput({ guesses, setGuesses, answer, isSolved, restartGame }) {
  const [guess, setGuess] = React.useState('')

  function submitGuess(event) {
    event.preventDefault()
    setGuesses([...guesses, guess])

    setGuess('')
  }

  const happyBanner = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  )

  const sadBanner = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  )

  return (
    <form onSubmit={submitGuess} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess: </label>
      <div className="input-wrapper">
        {NUM_OF_GUESSES_ALLOWED === guesses.length && !isSolved ? (
          sadBanner
        ) : isSolved ? (
          happyBanner
        ) : (
          <input
            id="guess-input"
            type="text"
            value={guess}
            onChange={event => {
              setGuess(event.target.value.toUpperCase())
            }}
            pattern=".{5,}"
            required
            title="5 to 10 characters"
            maxLength={5}
          />
        )}
        <button className="restart-button" type="submit" onClick={restartGame}>
          Restart
        </button>
      </div>
    </form>
  )
}

export default GuessInput
