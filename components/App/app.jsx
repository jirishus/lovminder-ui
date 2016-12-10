import React from 'react';

class App extends React.Component {
  constructor() {

    super();

    this.state = {
      status: 'Active',
      owner: 'Lost'
    }
    
  }

  render() {
    return (
      <div>
        <p>{this.state.status}</p>
      </div>
    )
  }
}

export default App;

