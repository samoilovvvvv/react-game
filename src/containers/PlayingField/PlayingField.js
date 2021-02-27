import React, {Component} from 'react'
import './PlayingField.scss'
import Scoreboard from '../../components/UI/Scoreboard/Scoreboard'

export default class PlayingField extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
    
    }
  }
  
  render() {
    return (
      <div className={'PlayingField'}>
        <div>
          <header>
            <Scoreboard
              value={10}
            />
            <button>&#128515;</button>
            <Scoreboard
              value={0}
            />
          </header>
          <main>
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
            <div>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
            </div>
          </main>
        </div>
      </div>
    )
  }
}