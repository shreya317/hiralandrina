import React from 'react';
//CSS
import './styles/Accommodations.css'

export const Accommodations = () => (
    <div className='Accommodations'>
        <div className='Accommodations-container'>
        <h1 className='Accommodations-title'>Accommodations</h1>
        <div className='Accommodations-info'>
            <div className='Accommodations-desc'>
                <p>A room block has been reserved at the</p>
                <h3>Hilton Oakbrook Terrace</h3>
                <p>10 Drury Ln, Oakbrook Terrace, Illinois 60181</p>
                <p><button className='Accommodations-button'><a href='https://www.google.com/maps/dir//Hilton+Chicago%2FOak+Brook+Suites,+10+Drury+Lane,+Oakbrook+Terrace,+IL+60181/@41.8599838,-87.954593,16.86z/data=!4m8!4m7!1m0!1m5!1m1!1s0x880e4c5fb70f7fa7:0x6d199df1e8294f33!2m2!1d-87.9537588!2d41.8594694' target='_blank'>DIRECTIONS</a></button></p>
                
                <div className='Accommodations-book'>
                    <p>To make a reservation online please click below</p>
                    <p><button className='Accommodations-button'><a href='https://secure3.hilton.com/en_US/hi/reservation/book.htm?inputModule=HOTEL&ctyhocn=CHIOTHS&spec_plan=SPWE&arrival=20190704&departure=20190707&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT' target='_blank'>BOOK HOTEL</a></button></p>
                    <p>or call <b className='Accommodations-phone'> 1-800-445-8667</b></p>
                    <p>and mention the Soni & Pithadia Wedding</p>
                </div>

                <img className='Acc-hotel' height="300" src={require("./media/acc/hotel.png")} alt="hotel" title="hotel" />
            </div>
        </div>
        <div className='Accommodations-info'>
            <div className='Accommodations-desc'>
                <p>If you need additional help or have questions regarding accmmodations, please contact</p>
                <h4>Soni Family</h4>
                <p>Ravi Soni <b className='Accommodations-phone'> 650-919- 3337</b></p>
                <p>Mukesh Soni <b className='Accommodations-phone'> 224-202-4466</b></p>
                <h4>Pithadia Family</h4>
                <p>Amit Pithadia <b className='Accommodations-phone'> 773-426-9330</b> </p>
                <p>Snehal Pithadia <b className='Accommodations-phone'> 312- 388-4838</b></p>
            </div>
        </div>
        </div>
    </div>    
);
