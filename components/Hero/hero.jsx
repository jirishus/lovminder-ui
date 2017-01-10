import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userAcct: 'Active'
    }

  }

  render() {
    return (
      <form>
        <h3>Your Account {this.state.userAcct}</h3>
        <p>Enter Your Crushes Phone Number</p>
        <input type="text" placeholder="Enter SMS" />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default Hero;

