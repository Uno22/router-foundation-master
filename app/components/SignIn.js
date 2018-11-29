import React from 'react';
import {connect} from 'react-redux';

class SignIn extends React.Component{

    handSubmit (e) {
        e.preventDefault();
        var {dispatch} = this.props;
        var {username, password} = this.refs;
        if (username.value === 'abc' && password.value === '123') {
            dispatch({type: 'LOGIN', username: username.value});
        }
    }

  render (){
    return (
      <div>
        <form onSubmit={this.handSubmit.bind(this)}>
            <input type="text" placeholder="Username" ref="username"/>
            <br/>
            <input type="password" placeholder="Password" ref="password"/>
            <br/>
            <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}

module.exports = connect()(SignIn);