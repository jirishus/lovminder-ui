import React from 'react';

function reportInfo() {
  alert('Generating Report');
}

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
        <button className="square" onClick={()=> reportInfo()}>Get Info</button>
      </div>
    )
  }
}

export default App;

