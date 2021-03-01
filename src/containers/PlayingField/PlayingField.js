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
        minesCoordinates: [],
        mines: 10,
        rows: 9,
        columns: 9
      }
    }
  }
  
  renderRows(amount) {
    const rows = []
    
    for(let i = 0; i < amount; i++) {
      rows.push(<Row
        key={i}
        amount={this.state.field.columns}
        onClick={event => this.clickElementHandler(event)}
        y={i + 1}
        minesCoordinates={this.state.field.minesCoordinates}
      />)
    }
    
    return rows
  }
  
  randomCoordinates() {
    const coordinates = []
  
    for (let i = 0; i < this.state.field.mines; i++) {
      let x = Math.floor(1 + Math.random() * (this.state.field.columns + 1 - 1))
      let y = Math.floor(1 + Math.random() * (this.state.field.rows + 1 - 1))
      
      if (coordinates.length === 0) {
        coordinates.push({x, y})
        continue
      }
      
      coordinates.map(element => {
        while (x === element.x && y === element.y) {
          x = Math.floor(1 + Math.random() * (this.state.field.columns + 1 - 1))
          y = Math.floor(1 + Math.random() * (this.state.field.rows + 1 - 1))
        }
        
        return undefined
      })
      
      coordinates.push({x, y})
    }
  
    return coordinates
  }
  
  componentDidMount() {
    const field = {...this.state.field}
    let minesCoordinates = this.randomCoordinates()
    
    field["minesCoordinates"] = minesCoordinates
    
    this.setState({
      field
    })
  }
  
  clickElementHandler(event) {
    console.log(event.target)
    console.log(event.target.dataset.x)
    console.log(event.target.dataset.y)
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