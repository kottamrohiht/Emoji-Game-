import './index.css'

const WinOrLoseCard = props => {
  const {emojisList, score, playAgain} = props
  const result = emojisList.length === score

  const gameStatus = result ? 'You Won' : 'You Lose'
  const scoreScured = result ? 'Best Score' : 'Score'
  const winOrlose = result
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const onClickButton = () => {
    playAgain()
  }

  return (
    <div className="main-container">
      <div className="para-container">
        <h1 className="you-won"> {gameStatus} </h1>
        <p className="best-score"> {scoreScured} </p>
        <p className="final-score">
          {score}/{emojisList.length}
        </p>
        <button
          onClick={onClickButton}
          type="button"
          className="play-again-button"
        >
          Play Again
        </button>
      </div>
      <img src={winOrlose} alt="win or lose" className="final-img" />
    </div>
  )
}

export default WinOrLoseCard
