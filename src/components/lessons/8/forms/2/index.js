import React from 'react';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  handleSubmit(event) {
    // change code below this line
    event.preventDefault();
    this.setState({
      submit: this.state.input
    })
    // change code above this line
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* change code below this line */}
          <input onChange={this.handleChange} value={this.state.input}/>
          {/* change code above this line */}
          <button type="submit" onClick={this.handleSubmit}>Submit!</button>
        </form>
        {/* change code below this line */}
        <h1>{this.state.submit}</h1>
        {/* change code above this line */}
      </div>
    );
  }
}

const Task = () => {
  return (
    <div>
      <ControlledForm />
    </div>
  );
};

export default Task;
