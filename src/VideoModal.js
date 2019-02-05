import React, { Component } from 'react';
//CSS 
import './styles/VideoModal.css'

export default class VideoModal extends Component {
    handleClick = () => {
        this.props.onClose()
    }

    render () {
        return (
           <div className='VideoModal'>
                <button className='VideoModal-button' onClick={() => this.handleClick()} >Enter Rina & Hiral's Wedding Website</button>
                <iframe 
                    className='VideoModal-video'
                    title={'video'}
                    height='900' 
                    width='100%' 
                    src="https://www.youtube-nocookie.com/embed/0h_bB7dqNso?rel=0&amp;showinfo=0" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                >
                    Video
                </iframe>
            </div>
        )
    }
}