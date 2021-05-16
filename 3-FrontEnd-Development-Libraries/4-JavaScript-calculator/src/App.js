import './App.css';
import React from "react";

const projectName = 'javascript-calculator';
const num = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const oper = ['/', '*', '-', '+'];
const ids = {
  7: 'seven',
  8: 'eight',
  9: 'nine',
  4: 'four',
  5: 'five',
  6: 'six',
  1: 'one',
  2: 'two',
  3: 'three',
  0: 'zero',
  '/': 'divide',
  '*': 'multiply',
  '-': 'subtract',
  '+': 'add'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: '', //Dont need
      lastPressed: undefined,
      calc: '0',
      prevNumber: undefined, //Dont need
      operation: undefined
    }
  }
  
  handleClick = (e) => {
    const {currentNumber, lastPressed, calc, prevNumbec, operation} = this.state;
    const {innerText} = e.target;
    
    switch(innerText) {
        case 'AC': {
          this.setState({
            calc: '0',
          });
          break;
        }
      case '+/-': {
        this.setState({
          
        });
        break;
      }
      case '%': {
        this.setState({
          
        });
        break;
      }
      case '=': {
        const evaluated = eval(calc);
        this.setState({
          calc: evaluated
        });
        break;
      }
      case '.': {
        const splitted = calc.split(/[\+\-\*\/]/);
        const last = splitted.slice(-1)[0];
        
        if(!last.includes('.')) {
          this.setState({
            calc: calc+'.'
          })
        }
        
        break;
      }
      default: {
        let e = undefined;
        if(oper.includes(innerText)) {
          if(oper.includes(lastPressed) && innerText !== '-') {

            const lastNumberIdx = calc.split('').reverse()
                .findIndex(char => char !== ' ' && num.includes(+char)); 
            e = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;
          } else {
            e = `${calc} ${innerText} `;
          }
        } else {
          e = (calc === '0') ? innerText : (calc + innerText);
        }
        
        this.setState({
          calc: e
        });
      }
    } //Switch end
    this. setState({
      lastPressed: innerText
    })
  } //Handle end

  render () {
    const {currentNumber, lastPressed, calc, prevNumbec, operation} = this.state;
    
    return (
      <div className="container-fluid">
        <div className="row">
          <p style={{position: 'absolute', top: 0}}>{JSON.stringify(this.state, null,2)}</p>
          <div className="col-5 calculator">
            <div className="display" id="display">
              <p id="calc-num">{currentNumber} {operation}</p>
              <p id="current-num">{calc}</p>
            </div>
            
            <div className="number-container">
              <button
                className="c-grey"
                id ="clear"
                onClick={this.handleClick}
              >
                AC
              </button>
              
              <button id="c-grey" onClick={this.handleClick}>+/-</button>
              <button id="c-grey" onClick={this.handleClick}>%</button>
              
                {num.map(numb => (
                <button
                  className={`${numb == 0 && 'zero'}`}
                  key={numb}
                  onClick={this.handleClick}
                  id={ids[numb]}
                >
                  {numb}
                </button>
                ))}
              
              <button
                className="c-grey"
                id="decimal"
                onClick={this.handleClick}
              >
                .
              </button>
            </div> 
            
              <div className="oper-container">
                {oper.map(op => (
                <button
                  className="c-orange"
                  id={ids[op]}
                  key={op}
                  onClick={this.handleClick}
                 >
                    {op}
                 </button>
                ))} 
                  <button
                    className="c-orange"
                    id="equals"
                    onClick={this.handleClick}
                  >
                    =
                  </button>
              </div> 
          </div>
          </div> 
        
        <div className="footer">
          <p>Charlotte Calculator</p>
        </div>
      </div> 
    )
  }
}

//ReactDOM.render(<Calculator/>, document.getElementById('app'));

export default App;
