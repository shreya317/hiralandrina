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
                <video width="100%" height="900" controls>
                    <source src={require("./media/rina-hiral.mp4")} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}