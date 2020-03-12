import React from 'react'

import './../style.css'

// worldtimeapi.org

class WorldClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        local: props.local ? props.local : "America/Fortaleza",
        date: new Date()
      };
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        2000
      );
    }
  
    tick() {
      let {local} = this.state;
      fetch("http://worldtimeapi.org/api/timezone/" + local)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            error: null,
            date: result.datetime,
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: false,
            error
          });
        }
      )
      
    }
  
    render() {
      let {isLoaded, date, error, local} = this.state;
      if (error){
        return (
          <div>
            <h2>Word clock :/ {error.message}</h2>
          </div>
        )
      }else if(!isLoaded){
          return (
            <div>
              <h2>Word clock está carregando...</h2>
            </div>
          )
        } else {
          return (
            <div>
            <div className="Computer Clock">
                <p>{local ? local : "World clock"}</p>
                <p className="time">{date}.</p>
              </div>
            </div>
          );
      }
    }
  }
  
export default WorldClock;