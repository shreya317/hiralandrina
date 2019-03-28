import React from 'react';
//CSS
import './styles/RSVP.css'

export const RSVP = () =>( 
    <div className='Rsvp'>
        <h1 className='Rsvp-title'>R.S.V.P.</h1>
        <div className='Rsvp-container'>
            <div className='Rsvp-info'>
                <p>We look forward to celebrating with you!</p>
                <p>To R.S.V.P., please email</p>
                <p><b><a href = "mailto: RinaHiral2019@gmail.com">RinaHiral2019@gmail.com</a></b></p>
                <p>with the events and the names of guests that will be attending.</p>
                <p>Thank you!</p>
                <img height="100" src={require("./media/logo1.png")} alt="" title="" />

            </div>
        </div>
    </div>
);