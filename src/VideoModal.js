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
                <button type='button' className='VideoModal-button' onClick={() => this.handleClick()} >ENTER RINA & HIRAL'S WEDDING WEBSITE</button>
                <video width="100%" height="900" controls poster={require('./media/video-thumbnail.png')} controlsList="nodownload">
                    <source src={require("./media/rina-hiral.mp4")} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}