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
                <iframe className='VideoModal-video' title='video' src="https://drive.google.com/file/d/1gC5lL9RQkOixqTIDxHbQyOkFZ-Z23BCm/preview" height='900' width='100%'></iframe>
            </div>
        )
    }
}