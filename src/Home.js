import React, { Component } from 'react';
import './styles/Home.css'

export default class Home extends Component {
    render () {
        return (
            <div className='Home'>
                <div className='Home-main'>
                    <div className='Home-info'>
                        <h1 className='Home-names'>Rina & Hiral</h1>
                        <h3 className='Home-date'>July 6th, 2019 • Oakbrook Terrace, IL</h3>
                        <div className='Home-cd-normal'><iframe src="http://free.timeanddate.com/countdown/i6o4fjb8/n64/cf12/cm0/cu4/ct0/cs0/ca0/co0/cr0/ss0/cacfff/cpc000/pct/tcfff/fn2/fs100/szw576/szh243/iso2019-07-06T00:00:00" allowTransparency="true" frameborder="0" width="161" height="49"></iframe></div>
                        <div className='Home-cd-mobile'><iframe src="http://free.timeanddate.com/countdown/i6o4fjb8/n64/cf12/cm0/cu4/ct0/cs0/ca0/co0/cr0/ss0/cacfff/cpc000/pct/tcfff/fn2/fs100/szw320/szh135/iso2019-07-06T00:00:00" allowTransparency="true" frameborder="0" width="96" height="28"></iframe></div>
                    </div>
                </div>
            </div>
        )
    }
}