import React, { Component } from 'react'
import RandomColor from '../RandomColor'

export default class App extends Component {
  state = {
    color: '',
    intervalInMilliseconds: 1000
  }

  componentDidMount = () => setInterval(() => {
    this.newColor()
  }, this.state.intervalInMilliseconds)

  newColor = () => {
    this.setState({
      color: this.pickRandomColor()
    })
  }

  pickRandomColor = () => {
    const colors = ['#facade', '#c0ffee', '#fb1', '#f00', '#b00']
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
  }

  render() {
    return (
      <>
        <RandomColor color = { this.state.color }/>
      </>
    )
  }
}

