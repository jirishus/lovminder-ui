import React from 'react';

class Hero extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value });
  }

  handleSubmit(event) {
    console.log('accesing data ...');
    console.log(this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row smsForm">
          <div className="col-md-4 col-md-offset-4">
          
          <p className="lead">Phone Number:</p>
          <input type="phone" className="form-control" value={this.state.value} onChange={this.handleChange} placeholder="Enter 10 digit phone number" />
          
          <p className="lead">Choose Text Message Frequency</p>
          <select className="form-control">
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
          </select>

          <input type="submit" value="Submit" className="btn btn-primary submitButton" />
          </div>
        </div>
      </form>
    )
  }
}

export default Hero;

