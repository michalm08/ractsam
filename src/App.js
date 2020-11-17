import React, { createRef, PureComponent } from "react";
import "./App.css";
import Counter from "./Counter";


class App extends PureComponent {
  state={
    isCounterVisible: true,
  }
  paragraphElement = createRef();

  

  render() {
    const counterElement = this.state.isCounterVisible? <Counter/>:null
    return (
      <div>
        <p ref={this.paragraphElement}>Hello</p>
        <button onClick={this.addChar}>dodaj wykzryknik</button>
        <button onClick={this.toggleVisibilityCounter}>Pokaz/ukryj counter</button>
        {counterElement}
      </div>
    );
  }
  toggleVisibilityCounter = () => this.setState(prevState=>({
    isCounterVisible: !prevState.isCounterVisible
  }))

  addChar = () => (this.paragraphElement.current.textContent += "!");
}

export default App;
