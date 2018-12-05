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
          console.log(res)
          if (res.data.result === 0) {
              console.log('ok')
            dispatch({type: 'LOGIN', username: username.value});
          } else {

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
            <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}

module.exports = connect()(SignIn);