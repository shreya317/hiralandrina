import React, { Component } from 'react';
import './App.css';
import VideoModal from './VideoModal';// CSS
import {NavBar} from './NavBar';

class App extends Component {
  state = {
    showVideo: true
  }

  render () {
    return (
      <div className='Main'>
        {!this.state.showVideo && <NavBar/>}
        {this.state.showVideo && <VideoModal onClose={() => this.setState({showVideo: !this.state.showVideo})}/>}
      </div> 
    )
  }
}

export default App;
