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
      {isLoading
       ? (<div class="loader">
        <span class="loader__text">Loading...</span>
        </div>)
        :(
        <div class="button_here">
          <Buttons  />
        </div> 
        )}
        <h4 class="paint"></h4>    
      </section>
      
    )
  }

}


export default App;
