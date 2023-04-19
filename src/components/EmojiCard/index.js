import './index.css'

const EmojiCard = props => {
  const {item, shuffledEmojisList} = props
  const {emojiName, emojiUrl, id} = item

  const emojiClicked = () => {
    shuffledEmojisList(id)
  }

  return (
    <li className="item-container">
      <button onClick={emojiClicked} type="button" className="button">
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}
export default EmojiCard
