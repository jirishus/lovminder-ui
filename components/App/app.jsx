import React from 'react';

class App extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      status: 'Active'
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

