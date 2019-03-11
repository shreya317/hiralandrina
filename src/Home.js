import React, { Component } from 'react';
import './styles/Home.css'

const getCountDownDays = () => {
    const weddingDay = new Date('July 6, 2019').getTime();
    const today = new Date();
    const distance = weddingDay - today;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    return days
}

export default class Home extends Component {
    render () {
        return (
            <div className='Home'>
                <div className='Home-main'>
                    <div className='Home-info'>
                        <h1 className='Home-names'>Rina & Hiral</h1>
                        <h3 className='Home-date'>July 6th, 2019 • Oakbrook Terrace, IL</h3>
                        <h3 className='Home-countdown'>{getCountDownDays()} days to go!</h3>
                    </div>
                </div>
            </div>
        )
    }
}