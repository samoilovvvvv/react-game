import React, {Component} from 'react'
import './PlayingField.scss'
import Scoreboard from '../../components/UI/Scoreboard/Scoreboard'
import Row from '../../components/Field/Row/Row'
import Button from '../../components/UI/Button/Button'

export default class PlayingField extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      field: {
        rows: 9,
        columns: 9
      }
    }
  }
  
  renderRows(amount) {
    const rows = []
    
    for(let i = 0; i < amount; i++) {
      rows.push(<Row key={i} amount={this.state.field.columns}/>)
    }
    
    return rows
  }
  
  render() {
    return (
      <div className={'PlayingField'}>
        <div>
          <header>
            <Scoreboard
              value={10}
            />
            <Button>&#128515;</Button>
            <Scoreboard
              value={0}
            />
          </header>
          <main>
            {this.renderRows(this.state.field.rows).map(element => element)}
          </main>
        </div>
      </div>
    )
  }
}