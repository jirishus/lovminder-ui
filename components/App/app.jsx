import React from 'react';

function reportInfo() {
  console.log('Generating Report');
}

class App extends React.Component {
  constructor() {

    super();

    this.state = {
      catchPhrase: 'Your affectionate reminder robot'
    }
    
  }

  render() {
    return (
      <div className="mainView">
        <p>{this.state.catchPhrase}</p>
      </div>
    )
  }
}

export default App;

