import React from 'react';

class Sandbox extends React.Component {
 constructor(props) {
  super();
  this.state = {
   data: [
    {"id":1, "name": "Food", "age": "20"},
    {"id":2, "name": "Reagan", "age": "22"},
    {"id":3, "name": "Ford", "age": "27"}
   ]
  }
 }
 render() {
  return (
   <section>
    {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
   </section>
  );
 }
}

class TableRow extends React.Component {
 render() {
  return (
   <ul>
    <li>{this.props.data.name}</li>
    <li>{this.props.data.age}</li>
   </ul>
  )
 }
}

export default Sandbox;