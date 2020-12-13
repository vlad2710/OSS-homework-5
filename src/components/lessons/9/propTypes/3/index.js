import React from 'react';
import PropTypes from 'prop-types'

function Badge(props) {
  const { authed, style, name, handle, img, addFriend } = props;

  if (authed !== true) {
    return <p>You need to log in.</p>;
  }

  return (
    <div style={style}>
      <img style={{ width: 200, borderRadius: '50%' }} src={img} />
      <h1 style={{ margin: 5 }}>{name}</h1>
      <h3 style={{ margin: 5 }}>@{handle}</h3>
      <button onClick={addFriend}>Add Friend</button>
    </div>
  );
}

Badge.propTypes = {
  authed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  handle: PropTypes.string.isRequired,
  img: PropTypes.string,
  addFriend: PropTypes.func,
  style: PropTypes.shape({
    width: PropTypes.number,
    margin: PropTypes.string,
    border: PropTypes.string,
    padding: PropTypes.number,
    borderRadius: PropTypes.number,
    display: PropTypes.string,
    flexDirection: PropTypes.string,
    alignItems: PropTypes.string
  })
}

const Task = () => {
  return (
    <div>
      <Badge
        name="Small Moreno"
        handle="tylermcginnis"
        img="https://via.placeholder.com/300.png/09f/fff"
        authed={true}
        style={{
          width: 300,
          margin: '0 auto',
          border: '3px solid #000',
          padding: 10,
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        addFriend={() => alert('Added!')}
      />
    </div>
  );
};

export default Task;
