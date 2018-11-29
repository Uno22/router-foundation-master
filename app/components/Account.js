import React from 'react';
import {connect} from 'react-redux';
var SignIn = require('SignIn');
var AccountInfo = require('AccountInfo');

class Account extends React.Component{
  render(){
    var {username} = this.props;
    var xhtml = username === null ? <SignIn/> : <AccountInfo/>;
    return (
      <div>
        {xhtml}
      </div>
    )
  }
}

module.exports = connect((state) => {
  return {username: state.username};
})(Account);
