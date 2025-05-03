import React from 'react';

function Sample() {
  const items = ['Apple', 'Banana', 'Orange'];
  const users = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 },
  ];
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) =>
          user.age > 30 ? (
            <li key={user.id}>{user.name} is over 30 years old</li>
          ) : (
            <li key={user.id}>{user.name} is under 30 years old</li>
          )
        )}
      </ul>
    </div>
  );
}

export default Sample;
