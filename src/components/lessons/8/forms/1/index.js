import React, { Component } from 'react';

function sendEmail(name, mail, message) {
  const params = { name, mail, message };
  let alertText = 'Email sending request in process.\nEmail params:\n';
  alertText += Object.keys(params)
    .map((i) => `${i}: ${params[i]}`)
    .join('\n');
  alert(alertText);
}

class UncontrolledForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameRef = React.createRef();
    this.mailRef = React.createRef();
    // change code below this line
    this.messageRef = React.createRef();
    // change code above this line
  }

  handleSubmit = () => {
    // change code below this line
    let name = this.nameRef.current.value;
    let mail = this.mailRef.current.value;
    let message = this.messageRef.current.value;
    sendEmail(name, mail, message);
    // change code above this line
  };

  render() {
    return (
      <form style={{width: 'min-content'}}>
        {/* change code below this line */}
        <div>
          <label>Name:</label>
          <input type="text" ref={this.nameRef} name="user_name"></input>
        </div>
        <div>
          <label>E-mail:</label>
          <input type="email" ref={this.mailRef} name="user_mail"></input>
        </div>
        <div>
          <label>Message:</label>
          <textarea ref={this.messageRef} name="user_message"></textarea>
        </div>
        <button type='submit' onClick={this.handleSubmit}>Submit!</button>
        {/* change code above this line */}
      </form>
    );
  }
}

const Task = () => {
  return (
    <div>
      <UncontrolledForm />
    </div>
  );
};

export default Task;
