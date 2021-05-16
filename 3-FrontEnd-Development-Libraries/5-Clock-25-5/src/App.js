import './App.css';
import React from "react";
// get our fontawesome imports
//import { faHome } from "@fortawesome/free-solid-svg-icons";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projectName = "25-5-clock";
const audio = document.getElementById('beep');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.loop = undefined;
  }
  
    state = {
      breakLength: 5,
      sessionLength: 25,
      clockCount: 25 * 60,
      currentTimer: 'Session',
      isPlaying: false
    }
  
  componentWillUnmount() {
    clearInterval(this.loop);
  }
  
  handlePlayPause = () => {
    const {isPlaying} = this.state;
    
    if(isPlaying) {
      clearInterval(this.loop);
      
      this.setState({
        isPlaying: false
      });
    } else {
      this.setState({
        isPlaying: true
      });
      
      this.loop = setInterval(() => {
        const {
          clockCount,
          currentTimer,
          breakLength,
          sessionLength
        } = this.state;
        
        if(clockCount === 0) {
          this.setState({
            currentTimer: currentTimer === 'Session' ? 'Break' : 'Session',
            clockCount: (currentTimer === 'Session') ? (breakLength * 60) : (sessionLength * 60)
          });
          
          audio.play();
          
        } else {
          this.setState ({
          clockCount: clockCount - 1
          });
        }
      }, 1000);
    }
  }
  
  handleReset = () => {
    this.setState({
      breakLength: 5,
      sessionLength: 25,
      clockCount: 25 * 60,
      currentTimer: 'Session',
      isPlaying: false
    });
    
    clearInterval(this.loop);
    
    audio.pause();
    audio.currentTime = 0;
  }
  
  convertToTime = (count) => {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    
    minutes = minutes < 10 ? ('0' + minutes) : minutes;
    seconds = seconds < 10 ? ('0' + seconds) : seconds;
    return `${minutes}:${seconds}`;
  }    
  
  handleLengthChange = (count, timerType) => {
    const { 
      sessionLength, 
      breakLength, 
      isPlaying, 
      currentTimer
    } = this.state;
    
    let newCount;
    
    if(timerType === 'session') {
      newCount = sessionLength + count;
    } else {
      newCount = breakLength + count;
    }
    
    if(newCount > 0 && newCount < 61 && !isPlaying) {
      this.setState({
        [`${timerType}Length`]: newCount
      });
      
      if(currentTimer.toLowerCase() === timerType) {
        this.setState({
          clockCount: newCount * 60
        })
      }
    }
  }
  
  render() {
    const {
      breakLength, 
      sessionLength,
      clockCount,
      currentTimer,
      isPlaying
    } = this.state;
    
    const breakProps = {
      title: 'Break',
      count: breakLength,
      handleDecrease: () => this.handleLengthChange(-1, 'break'),
      handleIncrease: () => this.handleLengthChange(1, 'break')
    }
    
    const sessionProps = {
      title: 'Session',
      count: sessionLength,
      handleDecrease: () => this.handleLengthChange(-1, 'session'),
      handleIncrease: () => this.handleLengthChange(1, 'session')
    }
    
    /*
    <p style={{position: 'absolute', top: 0}}>
     {JSON.stringify(this.state, null,2)}
    </p>
    */
    
    return(
      <div className="container">
        <div className="body-header">
          <h2><i className="fa fa-stopwatch"></i> Pomodoro Clock</h2>
        </div>

        <div className="body-settimer">
          <SetTimer {...breakProps}/>
          <SetTimer {...sessionProps}/>
        </div>

        <div
          className={`body-clock-${isPlaying == false || currentTimer == "Break" ? "break" : "session"}`}
          onClick={this.handlePlayPause}
          data-fill={currentTimer}
        >
          
          {isPlaying 
            ? <div>
                <h3 id="timer-label">{currentTimer}</h3>
                <span id="time-left">
                  {this.convertToTime(clockCount)}
                </span>
                <p>
                  <i className ="play" class="fa fa-play fa-2x" id="start_stop"></i>
                </p>
              </div>
            : <div>
                <h3 id="timer-label">{currentTimer}</h3>
                <span id="time-left">
                  {this.convertToTime(clockCount)}
                </span>
                <p>
                  <i className ="pause" class="fa fa-pause fa-2x" id="start_stop">
                  </i> 
                </p>
              </div>
          }
        </div>

        <div className="body-footer">
          <button
            id="reset"
            onClick={this.handleReset}
          >
            <i class="fa fa-sync" id="reset"></i>
          </button>
        </div>

        <p>Designed by Charlotte</p>
      </div>
    )
  }
}

const SetTimer = (props) => {
  return (
    <div className="timer-container">

      <h5 id={`${props.title.toLowerCase()}-label`}>
        {props.title} Length
      </h5>

      <div className="actions-wrapper">
        <button
          id={`${props.title == "Break" ? "break" : "session"}-decrement`}
          onClick={props.handleDecrease}
        >
          <i class="fa fa-minus"></i>
        </button>

        <span id={`${props.title == "Break" ? "break" : "session"}-length`}>
          {props.count}
        </span>

        <button
          id={`${props.title == "Break" ? "break" : "session"}-increment`}
          onClick={props.handleIncrease}
        >
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

//ReactDOM.render(<App />, document.getElementById('app'));

export default App;
