import React, { Component } from 'react'
import GameContainer from './game/GameContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> Mystery Game </h1>
        <GameContainer/>
      </div>
    );
  }
}
