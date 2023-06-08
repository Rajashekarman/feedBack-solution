import {Component} from 'react'

class Feedback extends Component {
  feedback = () => {
    console.log('hi')
  }

  render() {
    const {resources} = this.props
    // const {emojis} = resources
    return (
      <div>
        <h1>How satisfied are you with our customer support performance</h1>
        <ul>
          {resources.emojis.map(emoji => (
            <li key={emoji.id}>
              <p>{emoji.name}</p>
              <img
                src={emoji.imageUrl}
                alt={emoji.name}
                onChange={this.feedback}
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Feedback
