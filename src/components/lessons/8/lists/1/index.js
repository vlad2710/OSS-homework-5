import React from 'react';

const friends = [
  { id: 893, name: 'Mikenzi' },
  { id: 871, name: 'Cash' },
  { id: 982, name: 'Steven' },
  { id: 161, name: 'Kimmy' },
  { id: 117, name: 'Doug' },
];

const List = ({friends}) => {
  return (
    <ul>
      {friends.map( (item) =>{
        return <li key={item.id}>{item.name}</li>
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
