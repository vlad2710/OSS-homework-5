import React from 'react';

function Users({ users, online }) {
  const status = online ? 'Online' : 'Offline';
  const usersToRender = users.filter( (item) => item.online === true );
  const usersItems = usersToRender.map( (item, index) => <li key={index}>{item.username}</li> )
  return (
    <div>
      <h1>Current {status} Users:</h1>
      <ul>{usersItems}</ul>
    </div>
  );
}

const users = [
  {
    username: 'Jeff',
    online: true,
  },
  {
    username: 'Alan',
    online: false,
  },
  {
    username: 'Mary',
    online: true,
  },
  {
    username: 'Jim',
    online: false,
  },
  {
    username: 'Sara',
    online: true,
  },
  {
    username: 'Laura',
    online: true,
  },
];

const Task = () => {
  return (
    <div>
      <Users users={users} online={true} />
    </div>
  );
};

export default Task;
