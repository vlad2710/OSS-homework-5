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

    // change code above this line
  }

  handleSubmit = () => {
    // change code below this line
    //sendEmail(name, mail, message);
    // change code above this line
  };

  render() {
    return (
      <form>
        {/* change code below this line */}

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
