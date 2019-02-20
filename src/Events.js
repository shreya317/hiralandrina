import React from 'react';
//CSS
import './styles/Events.css'

export const Events = () => (
    <div className='Events'>
        <h1 className='Events-title'>Events</h1>
        <div className='Events-sangeet'>
            <div className='Events-desc'>
                <div className='Event-header'><h2>Sangeet</h2></div>
                <div className='Event-text'>
                <p>Thursday, July 4, 2019</p>
                <p>6:00 PM</p>
                <p>Lincolnshire Marriott Resort</p>
                <p>10 Marriott Dr, Lincolnshire, IL 60069</p>
                <button className='Events-button'><a href='https://www.google.com/maps/dir//Lincolnshire+Marriott+Resort,+10+Marriott+Dr,+Lincolnshire,+IL+60069/@42.1964489,-87.9279083,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880fbe74451739a1:0x85f9448b840f0781!2m2!1d-87.9257196!2d42.1964449!3e0' target='_blank'>DIRECTIONS</a><img className='Events-arrow' src={require('./media/arrow.png')} alt="arrow"/></button>
               </div>
            </div>
        </div>
        <div className='Events-wedding'>
            <div className='Events-desc'>
                <div className='Event-header'><h2>Wedding</h2></div>
                <div className='Event-text'>
                <p>Saturday, July 6, 2019</p>
                <p>9:30 AM Assembly of Baraat</p>
                <p>11:00 AM Wedding Ceremony</p>
                <p>Drury Lane Theatre</p>
                <p>100 Drury Ln, Oakbrook Terrace, IL 60181</p>
                <button className='Events-button'><a href='https://www.google.com/maps/dir//Drury+Lane+Theatre,+100+Drury+Ln,+Oakbrook+Terrace,+IL+60181/@41.8595634,-87.9547528,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880e4c5fd17b0c3b:0x8b0ebd9262d219a7!2m2!1d-87.9525588!2d41.8595594!3e0' target='_blank'>DIRECTIONS</a><img className='Events-arrow' src={require('./media/arrow.png')} alt="arrow"/></button>
                </div>
            </div>
        </div>
        <div className='Events-reception'>
            <div className='Events-desc'>
                <div className='Event-header'><h2>Reception</h2></div>
                <div className='Event-text'>
                <p>Saturday, July 6, 2019</p>
                <p>6:00 PM Cocktails</p>
                <p>7:30 PM Reception</p>
                <p>Drury Lane Theatre</p>
                <p>100 Drury Ln, Oakbrook Terrace, IL 60181</p>
                <button className='Events-button'><a href='https://www.google.com/maps/dir//Drury+Lane+Theatre,+100+Drury+Ln,+Oakbrook+Terrace,+IL+60181/@41.8595634,-87.9547528,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880e4c5fd17b0c3b:0x8b0ebd9262d219a7!2m2!1d-87.9525588!2d41.8595594!3e0' target='_blank'>DIRECTIONS</a><img className='Events-arrow' src={require('./media/arrow.png')} alt="arrow"/></button>
                </div>
            </div>
        </div>
    </div>  
);