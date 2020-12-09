import React from 'react';

const friends = ['Mikenzi', 'Cash', 'Steven', 'Kimmy', 'Doug'];

const List = ({friends}) => {
  return (
    <ul>
      {friends.map( (item, index) =>{
        return <li key={index}>{item}</li>
      } )}
    </ul>
  );
};

const Task = () => {
  return (
    <div>
      <List friends={friends} />
    </div>
  );
};

export default Task;
