const projectName = 'drum-machine';

const pianoData = [
    {
      name: 'Note C',
      letter: 'Q',
      keyCode: 81, // Q
      soundURL: 'https://www.myinstants.com/media/sounds/notec_yhGsG75.mp3'
    },
    {
      name: 'Note C#',
      letter: 'W',
      keyCode: 87, // W
      soundURL: 'https://www.myinstants.com/media/sounds/notecs.mp3'
    },
    {
      name: 'Note D',
      letter: 'E',
      keyCode: 69, // E
      soundURL: 'https://www.myinstants.com/media/sounds/noted.mp3'
    },
    {
      name: 'Note D#',
      letter: 'A',
      keyCode: 65, // A
      soundURL: 'https://www.myinstants.com/media/sounds/noteds.mp3'
    },
    {
      name: 'Note E',
      letter: 'S',
      keyCode: 83, // S
      soundURL: 'https://www.myinstants.com/media/sounds/notee.mp3'
    },
    {
      name: 'Note F',
      letter: 'D',
      keyCode: 68, // D
      soundURL: 'https://www.myinstants.com/media/sounds/notef.mp3'
    },
    {
      name: 'Note F#',
      letter: 'Z',
      keyCode: 90, // Z
      soundURL: 'https://www.myinstants.com/media/sounds/notefs.mp3'
    },
    {
      name: 'Note G',
      letter: 'X',
      keyCode: 88, // X
      soundURL: 'https://www.myinstants.com/media/sounds/noteg.mp3'
    },
    {
      name: 'Note G#',
      letter: 'C',
      keyCode: 67, // C
      soundURL: 'https://www.myinstants.com/media/sounds/notegs.mp3'
    },
    {
      name: 'Note A',
      letter: 'V',
      keyCode: 86, // V
      soundURL: 'https://www.myinstants.com/media/sounds/notea.mp3'
    },
    {
      name: 'Note A#',
      letter: 'B',
      keyCode: 66, // B
      soundURL: 'https://www.myinstants.com/media/sounds/noteas.mp3'
    },
    {
      name: 'Note B',
      letter: 'N',
      keyCode: 78, // N
      soundURL: 'https://www.myinstants.com/media/sounds/noteb.mp3'
    }
 ]

class PianoPad extends React.Component {
  handleClick = () => {
    this.audio.play() //current
    this.audio.currentTime = 0
   // this.props.handleDisplay(this.props.name)
  }
  render(){
    return (
      <div className="drum-pad" id={this.props.name} onClick = {this.handleClick}>
        <span id="buttonKey">{this.props.letter}</span>
        <audio
          ref={ref => this.audio = ref}
          src={this.props.soundURL}
          id={this.props.letter}>
        </audio>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.audio = React.createRef();
  }
  
  render() {
    
    return (
      <div className="container-fluid">
        
      <div className="row nav">
        <h1>&lt; Piano Machine /&gt;</h1>
      </div>
        
      <div className="display">
        <h2>Note {this.props.name}</h2>

      </div>
        
      <div className="row">
        <div className="col-5" >
          <div className="drum-pads">
            {pianoData.map(d => (
              <PianoPad
                id={d.name}
                letter={d.letter}
                src={d.soundURL} />
            ))}
          </div>
        </div>
      </div>
        
      <div className="row">
        <h2 className="display">Songs</h2>
      </div>
        
      <div className="row">
        <div className="box col-5" >
          <span>FCC <i class="fa fa-free-code-camp awesome-icon"></i></span>
          
        
        </div>
      </div>
        
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

/*
https://codepen.io/codekcv/pen/EBQvpo?editors=0110
https://codepen.io/FlorinPop17/pen/MWwEaeW?editors=0010
*/