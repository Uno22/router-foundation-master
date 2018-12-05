import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
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

  componentDidMount () {
    var {dispatch} = this.props;
    axios.get('/getInfo')
    .then(res => {
      if (res.data.result === 0) {
        dispatch({type: 'LOGIN', username: res.username});
      }else{

      }
    })
    .catch(err => console.log(err))
  }
}

module.exports = connect()(Main);
