import React from "react";
import Buttons from "./Buttons";


class App extends React.Component {
  state = {
    isLoading : true
  };

  componentDidMount() {
    this.setState({isLoading: false});
  }

  render() {
    const {isLoading} = this.state;
    return (
        <div class="button_here">
          <Buttons  />
        </div> 
    )
  }

}


export default App;
