import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    console.log('hello');
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    );
  }
}