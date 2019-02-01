import React from 'react';
//CSS
import './styles/Accommodations.css'

export const Accommodations = () => (
    <div className='Accommodations'>
        <h1 className='Accommodations-title'>Accommodations</h1>
        <div className='Accommodations-info'>
            <div className='Accommodations-desc'>
                <p>A room block has been reserved at the</p>
                <h3>Hilton Oak Brook Terrace</h3>
                <p>10 Drury Ln, Oak Brook Terrace, Illinois 60181</p>
                <button className='Events-button'><a href='https://www.google.com/maps/dir//Hilton+Garden+Inn+Chicago%2FOakbrook+Terrace,+1000+Drury+Lane,+Oakbrook+Terrace,+IL+60181/@41.859829,-87.9547293,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x880e4c6048a69047:0xa8373ac49f00d007!2m2!1d-87.9513118!2d41.8601807!3e0' target='_blank'>Directions</a></button>
                <p>To make a reservation please call 1-800-445-8667</p>
                <p>and mention the Soni & Pithadia Wedding</p>
            </div>
            <img height="400" src={require("./media/acc/hotel.jpg")} alt="hotel" title="hotel" />
        </div>
    </div>    
);
