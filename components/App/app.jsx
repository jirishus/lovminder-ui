import React from 'react';

class App extends React.Component {
  constructor() {

    super();

    this.state = {
      pageTitle: 'Luvminder',
      catchPhrase: 'Your affectionate reminder robot'
    }
    
  }

  render() {
    return (
      <div className="mainView">
        <p>{this.state.pageTitle}</p>
        <p>{this.state.catchPhrase}</p>
      </div>
    )
  }
}

export default App;

