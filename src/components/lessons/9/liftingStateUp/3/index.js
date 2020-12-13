import React from 'react';
import PropTypes from 'prop-types';

const buttons = ['first', 'nano', 'bob', 'tomato'];

class Index extends React.Component {
  state = { activeButtonName: '' };

  clickHandler = (name) => {
    this.setState({ activeButtonName: name });
  };

  render() {
    const { activeButtonName } = this.state;
    return (
      <div>
        {buttons.map((i, index) => (
          <Button clickHandler={this.clickHandler} key={index} name={i} activeBtnName={activeButtonName} />
        ))}
        <Details name={activeButtonName} />
      </div>
    );
  }
}

class Button extends React.Component {
  state = { active: false };

  clickHandler = () => {
    this.setState(({ active }) => ({ active: !active }));
    this.props.clickHandler(this.props.name);
  };

  render() {
    const { name, activeBtnName } = this.props;
    const { active } = this.state;
    return (
      <button
        onClick={this.clickHandler}
        style={{ color: activeBtnName == name  ? 'red' : 'blue' }}
      >
        {name}
      </button>
    );
  }
}

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  activeBtnName: PropTypes.string.isRequired
}

function Details({ name }) {
  return <div>{name}</div>;
}

Details.propTypes = {
  name: PropTypes.string
}

const Task = () => {
  return <Index />;
};

export default Task;
