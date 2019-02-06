import React from 'react';
//CSS
import './styles/Accommodations.css'

export const Accommodations = () => (
    <div className='Accommodations'>
        <h1 className='Accommodations-title'>Accommodations</h1>
        <div className='Accommodations-info'>
            <div className='Accommodations-desc'>
                <p>A room block has been reserved at the</p>
                <h3>Hilton Oakbrook Terrace</h3>
                <p>10 Drury Ln, Oakbrook Terrace, Illinois 60181</p>
                <p><button className='Accommodations-button'><a href='https://www.google.com/maps/dir//Hilton+Garden+Inn+Chicago%2FOakbrook+Terrace,+1000+Drury+Lane,+Oakbrook+Terrace,+IL+60181/@41.859829,-87.9547293,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880e4c6048a69047:0xa8373ac49f00d007!2m2!1d-87.9513118!2d41.8601807!3e0' target='_blank'>Directions</a></button></p>
                <p>To make a reservation please call </p>
                <b className='Accommodations-phone'> 1-800-445-8667</b>
                <p>and mention the Soni & Pithadia Wedding</p>
            </div>
            <img height="400" src={require("./media/acc/hotel.png")} alt="hotel" title="hotel" />
        </div>
        <div className='Accommodations-info'>
            <div className='Accommodations-desc'>
                <p>If you need additional help or have questions regarding bookings, you may contact</p>
                <p>Amit Pithadia <b className='Accommodations-phone'> 1-800-445-8667</b> </p>
                <p>Ravi Soni <b className='Accommodations-phone'> 1-800-445-8667</b></p>
                <p>Tejas Kheradiya <b className='Accommodations-phone'> 1-800-445-8667</b></p>
            </div>
        </div>
    </div>    
);
