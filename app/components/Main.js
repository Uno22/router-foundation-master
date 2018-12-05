import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
var Nav = require('Nav');
var Notification = require('Notification')

class Main extends React.Component{
  render(){
    var {notification} = this.props;
    var xhtml = notification != null ? <Notification txt={notification}/>:null;
    return (
      <div>
        <h1>This is Main</h1>
        <Nav />
        {xhtml}
        {this.props.children}
      </div>
    )
  }

  componentDidMount () {
    var {dispatch} = this.props;
    axios.get('/getInfo')
    .then(res => {
      if (res.data.result === 0) {
        dispatch({type: 'LOGIN', username: res.data.username});
      }else{

      }
    })
    .catch(err => console.log(err))
  }
}

module.exports = connect((state)=>{
  return {notification: state.notification};
})(Main);
