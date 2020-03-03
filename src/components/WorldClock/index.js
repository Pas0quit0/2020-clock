import React from 'react'

import './../style.css'

// worldtimeapi.org

class WorldClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isLoaded: false,
        date: new Date()
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
      });
      this.state = {date: new Date};
    }
  
    render() {
      let {isLoaded, date} = this.state;
      if(!isLoaded){
        return (
          <div>
            <h2>Carregando...</h2>
          </div>
        )
      } else {
        return (
          <div>
          <div className="Computer Clock">
              <p>World clock</p>
              <p className="time">{date.toLocaleTimeString()}.</p>
            </div>
          </div>
        );
      }
    }
  }
  
export default WorldClock;