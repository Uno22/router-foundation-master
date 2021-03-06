import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class SignIn extends React.Component{

    handSubmit (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var {username, password} = this.refs;

        axios.post('/signIn', {
          username: username.value,
          password: password.value
        }).then(res => {
          if (res.data.result === 0) {
            dispatch({type: 'LOGIN', username: username.value});
          } else {
            dispatch({type: 'SHOW_NOTIFICATION', txt: 'Check your username or password again'});
          }
        }).catch(err => console.log(err));
    }

  render (){
    return (
      <div>
        <form onSubmit={this.handSubmit.bind(this)}>
            <input type="text" placeholder="Username" ref="username"/>
            <br/>
            <input type="password" placeholder="Password" ref="password"/>
            <br/>
            <button type="submit" className="button">Sign In</button>
        </form>
      </div>
    )
  }
}

module.exports = connect()(SignIn);