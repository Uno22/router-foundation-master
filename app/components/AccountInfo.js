import React from 'react';
import {connect} from 'react-redux';

class AccountInfo extends React.Component{

    logOut (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch({type: 'LOGOUT'});
    }

  render(){
    return (
      <div>
        <h1>Username: {this.props.username}</h1>
        <a href="#" onClick={this.logOut.bind(this)}>Log out</a>
      </div>
    )
  }
}

module.exports = connect((state) => {
    return {username: state.username};
})(AccountInfo);