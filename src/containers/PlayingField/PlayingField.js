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
        itemState: {},
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
        itemState={this.state.field.itemState}
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
  
  openElements(event) {
    const field = {...this.state.field}
    const {itemState} = field
    const keyItem = event.target.dataset.x + event.target.dataset.y
  
    itemState[keyItem] = 'open'
    field['itemState'] = itemState
  
    this.setState({
      field
    })
  }
  
  gameLogic(event) {
    const currentX = +event.target.dataset.x
    const currentY = +event.target.dataset.y
    const minX = 1
    const maxX = this.state.field.columns
    const minY = 1
    const maxY = this.state.field.rows
    
    if ((currentX - 1) >= minX && (currentY - 1) >= minY) {
      console.log('DIAGONAL VERH LEVO OK')
      for (let key of this.state.field.minesCoordinates) {
        if ((currentX - 1) === key.x && (currentY - 1) === key.y) {
          console.log('BOMBA RYADOM')
        }
      }
    }

    if ((currentY - 1) >= minY) {
      console.log('VVERH OK')
      for (let key of this.state.field.minesCoordinates) {
        if (currentX === key.x && (currentY - 1) === key.y) {
          console.log('BOMBA RYADOM')
        }
      }
    }

    if ((currentX + 1) <= maxX && (currentY - 1) >= minY) {
      console.log('DIAGONAL VERH PRAVO OK')
      for (let key of this.state.field.minesCoordinates) {
        if ((currentX + 1) === key.x && (currentY - 1) === key.y) {
          console.log('BOMBA RYADOM')
        }
      }
    }

    if ((currentX + 1) <= maxX) {
      console.log('PRAVO OK')
      for (let key of this.state.field.minesCoordinates) {
        if ((currentX + 1) === key.x && currentY === key.y) {
          console.log('BOMBA RYADOM')
        }
      }
    }
  
    if ((currentX + 1) <= maxX && (currentY + 1) <= maxY) {
      console.log('DIAGONAL NIZ PRAVO OK')
      for (let key of this.state.field.minesCoordinates) {
        if ((currentX + 1) === key.x && (currentY + 1) === key.y) {
          console.log('BOMBA RYADOM')
        }
      }
    }
  
    if ((currentY + 1) <= maxY) {
      console.log('NIZ OK')
      for (let key of this.state.field.minesCoordinates) {
        if (currentX === key.x && (currentY + 1) === key.y) {
          console.log('BOMBA RYADOM')
        }
      }
    }
  
    if ((currentX - 1) >= minX && (currentY + 1) <= maxY) {
      console.log('DIAGONAL NIZ LEVO OK')
      for (let key of this.state.field.minesCoordinates) {
        if ((currentX - 1) === key.x && (currentY + 1) === key.y) {
          console.log('BOMBA RYADOM')
        }
      }
    }
  
    if ((currentX - 1) >= minX) {
      console.log('LEVO OK')
      for (let key of this.state.field.minesCoordinates) {
        if ((currentX - 1) === key.x && currentY === key.y) {
          console.log('BOMBA RYADOM')
        }
      }
    }
  }
  
  componentDidMount() {
    const field = {...this.state.field}
    let minesCoordinates = this.randomCoordinates()
    
    field['minesCoordinates'] = minesCoordinates
    
    this.setState({
      field
    })
  }
  
  clickElementHandler(event) {
    this.openElements(event)
    this.gameLogic(event)
    // console.log('X: ' + event.target.dataset.x, 'Y: ' + event.target.dataset.y)
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