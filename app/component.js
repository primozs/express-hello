import React from 'react';

const Component = React.createClass({

  getInitialState() {
    return {
      clickNum: 0
    };
  },

  _onClick(value){
    var clicks = this.state.clickNum;
    this.setState({
      clickNum: clicks + 1
    });
  },

  render() {
    return (
      <div>
        <h1>Hello world from react</h1>
        <ul className="list">
          <li>aaaa</li>
          <li>bbbb</li>
          <li>ccc</li>
        </ul>
        <button onClick={this._onClick.bind(this, 'neka spremenljivka')}>
          Click me
        </button>
        <p>Clicked: {this.state.clickNum}</p>
      </div>
    );
  }
});

export default Component;
