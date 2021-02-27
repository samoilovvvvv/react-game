import React, {Component} from 'react'
import './PlayingField.scss'
import Scoreboard from '../../components/UI/Scoreboard/Scoreboard'
import Row from '../../components/Field/Row/Row'

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
           <Row amount={9}/>
          </main>
        </div>
      </div>
    )
  }
}