import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessInput from '../guessInput/GuessInput'
import GuessList from '../guessList/GuessList'

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [isSolved, setIsSolved] = React.useState(false)
  const [answer, setAnswer] = React.useState(() => sample(WORDS))

  console.log('guesses:', guesses)
  console.info({ answer })

  function restartGame() {
    setAnswer(sample(WORDS))
    setGuesses([])
    setIsSolved(false)
  }

  return (
    <>
      <GuessList guesses={guesses} answer={answer} setIsSolved={setIsSolved} />
      <GuessInput
        guesses={guesses}
        setGuesses={setGuesses}
        answer={answer}
        isSolved={isSolved}
        restartGame={restartGame}
      />
    </>
  )
}

export default Game
