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
                <button type='button' className='VideoModal-button' onClick={() => this.handleClick()}>
                    <img height="50" src={require("./media/logo1.png")} alt="" title="" />
                    <div>ENTER RINA & HIRAL'S WEDDING WEBSITE</div>
                </button>
                <video controls poster={require('./media/video-thumbnail.png')} controlsList="nodownload">
                    <source src={require("./media/rina-hiral.mp4")} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}