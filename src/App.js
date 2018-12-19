import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      on: false,
    }
    this.incrementer = null;
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.timeElapsed = this.timeElapsed.bind(this);
  }

  timeElapsed(){
    const sec = ('0' + this.state.time % 60).slice(-2);
    const min = Math.floor(this.state.time / 60);
    const time = min + ' : ' + sec;
    return time
  }

  handleStart(){
    this.incrementer = setInterval(()=>{
    this.setState({
      time: this.state.time + 1,
      on: true
    })
  }, 1000);
  }

  handleStop(){
    clearInterval(this.incrementer);
    this.setState({
      on: false
    })
  }

  handleReset(){
    clearInterval(this.incrementer);
    this.setState({
      time: 0,
      on: false,
    })
  }

  render() {
    return (
      <div className="App">
        <p className="stopwatch_display">{this.timeElapsed()}</p>

        {(this.state.time === 0 || !this.state.on ?
          <button className="btn" onClick={this.handleStart}>Start</button>
          : null
        )}

        {(this.state.on ?
          <button className="btn" onClick={this.handleStop}>Stop</button>
          : null
        )}

        {(this.state.time !== 0 ?
          <button className="btn" onClick={this.handleReset}>Reset</button>
          : null
        )}

      </div>
    );
  }
}

export default App;
