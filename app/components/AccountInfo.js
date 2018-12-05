import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class AccountInfo extends React.Component{

    logOut (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        
        axios.get('/signOut')
          .then(res => {
            if (res.data.result === 0) {
              dispatch({type: 'LOGOUT'});
            }
          })
          .catch(err => console.log(err));
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