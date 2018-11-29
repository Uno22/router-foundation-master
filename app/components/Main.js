import React from 'react';
var Nav = require('Nav');

class Main extends React.Component{
  render(){
    return (
      <div>
        <h1>This is Main</h1>
        <Nav />
        {this.props.children}
      </div>
    )
  }
}

module.exports = Main;
