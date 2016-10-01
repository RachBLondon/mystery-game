import React, { Component } from 'react'
import DevToools from './DevTools'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1> Mystery Game </h1>
        {this.props.children}
        <DevToools/>
      </div>
    );
  }
}
