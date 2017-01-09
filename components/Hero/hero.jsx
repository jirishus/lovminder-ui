import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <p>Enter Your Crushes Phone Number</p>
        <input type="text" placeholder="Enter SMS" />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default Test;

