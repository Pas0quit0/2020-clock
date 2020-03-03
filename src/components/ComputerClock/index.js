import React from 'react'

import './../style.css'

class ComputerClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date(),
        local: "Natal",
        timezone: "+03:00"
      };
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    tick() {
      this.setState({
        date: new Date(),
        local: "mudou"
      });
      this.state = {date: new Date};
    }
  
    render() {
      let {date, local} = this.state;
      return (
        <div>
          <div className="Computer Clock">
            <p>My computer clock</p>          
            <p className="time">{date.toLocaleTimeString()}.</p>
          </div>
          
        </div>
      );
    }
  }
  
export default ComputerClock;