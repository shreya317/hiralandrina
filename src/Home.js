import React, { Component } from 'react';
import VideoModal from './VideoModal';// CSS
import './styles/Home.css'

export default class Home extends Component {
    state = {
        showVideo: true
    }

    render () {
        return (
            <div>
                {!this.state.showVideo && (
                    <div className='Home-names'><h1>Rina & Hiral</h1></div>
                )}
                {this.state.showVideo && (
                    <VideoModal onClose={() => this.setState({showVideo: !this.state.showVideo})}/>
                )}
            </div>
        )
    }
}