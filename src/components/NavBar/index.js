import './index.css'

const NavBar = props => {
  const {score, topScore, hideEmojiCard} = props
  return (
    <div className="nav-container">
      <div className="emoji-game-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="emoji-game">Emoji Game</h1>
      </div>
      {hideEmojiCard === true && (
        <div className="score-container">
          <p className="score"> Score: {score} </p>
          <p className="score">Top Score: {topScore} </p>
        </div>
      )}
    </div>
  )
}
export default NavBar
