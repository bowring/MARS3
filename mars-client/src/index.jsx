import React from 'react';
import ReactDOM from 'react-dom';

const Test = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
});

ReactDOM.render(
  <Test/>,
  document.getElementById('app')
);
