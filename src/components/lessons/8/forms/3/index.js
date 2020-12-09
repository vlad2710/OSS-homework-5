import React from 'react';

class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.emailRef = React.createRef();
    this.agreeRef = React.createRef();

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { emailRef, agreeRef } = this;
    const email = emailRef.current.value;
    const agreeCheckbox = agreeRef.current.checked;

    if (!email) {
      alert(`enter valid email first, please`);
    }

    if (agreeCheckbox) {
      alert(`email: ${email}`);
    } else {
      alert(`agree, please`);
    }
  };

  render() {
    const { emailRef, agreeRef } = this;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" ref={emailRef} />
        <input type="checkbox" ref={agreeRef} />
      </form>
    );
  }
}

class ControlledForm extends React.Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       email: '',
       isChecked: false
    }

    this.handleChangeInput = (event) =>{
      this.setState({
        email: event.target.value
      })
    }

    this.agreeCheckbox = () =>{
      this.setState( ({isChecked}) =>{
        return{
          isChecked: !isChecked
        }
      } )
    }

    this.handleSubmit = (event) =>{
      event.preventDefault();

      if(this.state.email && this.state.isChecked){
        alert(`email: ${this.state.email}`);
        this.setState({
          email: '',
          isChecked: false
        })
      }
      if(!this.state.email){
        alert(`enter valid email first, please`)
      }
      if(!this.state.isChecked){
        alert(`agree, please`)
      }
    }


  }
  

  render() {
    {console.log(this.state)}
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChangeInput} value={this.state.email} type="email" />
        <input onChange={this.agreeCheckbox} checked={this.state.isChecked} type="checkbox" />
      </form>
    )
  }
}

const Task = () => {
  return (
    <div>
      {/* <UncontrolledForm /> */}
      <ControlledForm />
    </div>
  );
};

export default Task;
