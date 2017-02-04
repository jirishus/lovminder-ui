import React from 'react';

class Header extends React.Component {

 constructor(props) {
  super(props);

  this.state = {
   headerTitle : 'LovMinder'
  }

 }

 render() {
  return (
    <header className="mainHeader">
     <h2>{this.state.headerTitle} <span>make your affection smarter</span></h2>
     <p>version 1.0.0</p>
    </header>
   )
 }

}

export default Header;