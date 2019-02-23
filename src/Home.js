import React, { Component } from 'react';
import './styles/Home.css'

export default class Home extends Component {
    render () {
        return (
            <div className='Home'>
                <div className='Home-main'>
                    <div className='Home-info'>
                        <h1 className='Home-names'>Rina & Hiral</h1>
                        <h3 className='Home-date'> July 6th, 2019</h3>
                    </div>
                </div>
            </div>
        )
    }
}