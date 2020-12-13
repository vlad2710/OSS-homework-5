import React from 'react';
import PropTypes from 'prop-types'

class VotingSystem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votesNumber: 0,
    };
  }

  onVote = (btnName) => {
    if(btnName == 'btnYes'){
      this.setState( ({votesNumber}) =>{
        return {
          votesNumber: votesNumber + 1
        }
      } )
    } else if(btnName == 'btnNo'){
      this.setState( ({votesNumber}) =>{
        return {
          votesNumber: votesNumber - 1
        }
      } )
    }
  };

  render() {
    const { resolution } = this.props;
    const { votesNumber } = this.state;
    return (
      <React.Fragment>
        <VotingDisplay resolution={resolution} result={votesNumber} />
        <VoteComponent
          resolution={resolution}
          onVote={this.onVote}
          terminalNumber={1}
        />
        <VoteComponent
          resolution={resolution}
          onVote={this.onVote}
          terminalNumber={2}
        />
        <VoteComponent
          resolution={resolution}
          onVote={this.onVote}
          terminalNumber={3}
        />
      </React.Fragment>
    );
  }
}


class VoteComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      votesNumber: 0,
    };
  }

  style = {
    padding: '8px',
    marginTop: '16px',
    border: 'solid 1px grey',
  };

  increase = (e) => {
    this.setState( ({votesNumber}) =>{
      return{
        votesNumber: votesNumber + 1
      }
    }, this.props.onVote(e.target.name) )
  };

  decrease = (e) => {
    this.setState( ({votesNumber}) =>{
      return{
        votesNumber: votesNumber - 1
      }
    }, this.props.onVote(e.target.name) )
  };

  render() {
    const { resolution, terminalNumber } = this.props;
    return (
      <div style={this.style}>
        <h6>Terminal number: {terminalNumber}</h6>
        <h3>Resolution: "{resolution}"</h3>
        <button onClick={this.decrease} name='btnNo'>No</button>
        <button onClick={this.increase} name='btnYes'>Yes</button>
      </div>
    );
  }
}

VoteComponent.propTypes = {
  resolution: PropTypes.string,
  terminalNumber: PropTypes.number,
  onVote: PropTypes.func
}

const VotingDisplay = ({ resolution, result }) => {
  return (
    <React.Fragment>
      <h1>Resolution: {resolution}</h1>
      <h2>Result: {result}</h2>
    </React.Fragment>
  );
};

VotingDisplay.propTypes = {
  resolution: PropTypes.string,
  result: PropTypes.number
}

const resolution = 'Free beer to all programmers';

const Task = () => {
  return (
    <div>
      <VotingSystem resolution={resolution} />
    </div>
  );
};

export default Task;
