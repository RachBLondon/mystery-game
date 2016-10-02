import React, { Component } from 'react'
import DevToools from './DevTools'
import GameContainer from './game/GameContainer'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> Mystery Game </h1>
        <GameContainer/>
        <DevToools/>
      </div>
    );
  }
}
