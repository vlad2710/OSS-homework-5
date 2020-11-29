import React from 'react';

const friends = ['Mikenzi', 'Cash', 'Steven', 'Kimmy', 'Doug'];

const List = () => {
  // Render a list using the "friends" being passed in.
  // prettier-ignore
  return (
    <ul>

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
