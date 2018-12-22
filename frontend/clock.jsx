import React from 'react';

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
    }
  }

  componentDidMount() {
    this.invertalId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.invertalId);
  }

  displayTime() {
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds} EST`
  }

  displayDate() {
    return this.state.time.toDateString();
  }

  tick() {
    this.setState({ time: new Date() })
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div>
          <p>
            <span>Time:</span>
            <span>{this.displayTime()}</span>
          </p>
          <p>
            <span>Date: </span>
            <span>{this.displayDate()}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Clock;
