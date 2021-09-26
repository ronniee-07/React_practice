import React from 'react';
import './index.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {count : 0}
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = e => {
      this.cbRef = e
    }
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  }

  componentDidMount(){console.log(this.cbRef)
    if(this.cbRef){
      // this.inputRef.current.focus();
      this.cbRef.focus();
    }
  }

  render(){
    return(
      <div className="App">
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default App;