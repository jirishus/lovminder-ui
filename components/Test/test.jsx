import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);    
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Enter SMS" />
      </form>
    )
  }
}

export default Test;

