/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    list: [this.props],
    count: [],
    hideEmojiCard: true,
    score: 0,
    topScore: 0,
  }

  playAgain = () => {
    this.setState({
      count: [],
      score: 0,
      hideEmojiCard: true,
    })
  }

  shuffledEmojisList = id => {
    const {emojisList} = this.props
    const {count} = this.state
    const countLen = count.length
    const shuffle = emojisList.sort(() => Math.random() - 0.5)

    if (count.includes(id) === false) {
      if (countLen !== emojisList.length) {
        this.setState(prevState => ({
          list: [{emojisList: shuffle}],
          count: [...prevState.count, id],
          score: prevState.score + 1,
          topScore:
            prevState.score >= prevState.topScore
              ? prevState.score + 1
              : prevState.topScore,
        }))
      }
      if (countLen + 1 === emojisList.length) {
        this.setState(prevState => ({
          count: [...prevState.count, id],
          hideEmojiCard: false,
        }))
      }
    } else {
      this.setState({hideEmojiCard: false})
    }
  }

  render() {
    const {list, hideEmojiCard, score, topScore} = this.state
    const {emojisList} = list[0]

    return (
      <div className="app-container">
        <NavBar
          score={score}
          topScore={topScore}
          hideEmojiCard={hideEmojiCard}
        />
        {hideEmojiCard && (
          <ul className="emoji-item-container">
            {emojisList.map(each => (
              <EmojiCard
                item={each}
                key={each.id}
                shuffledEmojisList={this.shuffledEmojisList}
              />
            ))}
          </ul>
        )}

        {!hideEmojiCard && (
          <WinOrLoseCard
            playAgain={this.playAgain}
            score={score}
            emojisList={emojisList}
          />
        )}
      </div>
    )
  }
}

export default EmojiGame
