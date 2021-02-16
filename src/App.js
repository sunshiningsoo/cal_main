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
      <section class="comtainer"> 
        <div class="button_here">
          <Buttons  />
        </div>       
      </section>
      
    )
  }

}


export default App;
