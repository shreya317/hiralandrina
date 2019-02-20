import React from 'react';
//CSS
import './styles/WeddingParty.css'

export const WeddingParty = () => (
    <div className='WeddingParty'>
        <h1 className='WeddingParty-title'>Wedding Party</h1>
        <div className='WeddingParty-info'>
            <div className='WeddingParty-desc'>
                <h2 className='WeddingParty-info-section'>Rina's Family</h2>
                <div className='WeddingParty-img'><a href="" title=""><img height="350" src={require("./media/weddingparty/soni-family.jpg")} alt="Rina's Parents" title="Rina's Parents" /></a></div>
                <p className='WeddingParty-name'>Parents: Mukesh & Bharati Soni</p>
                <p className='WeddingParty-name'>Brother: Ravi Soni</p>
                <p></p>

                <h2 className='WeddingParty-info-section'>Rina's Bridesmaids</h2>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="BM" title="BM"/></a></div> */}
                <p className='WeddingParty-name'>Charmaine Lindley</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="BM" title="BM"/></a></div> */}
                <p className='WeddingParty-name'>Dipa Patel</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Elizabeth" title="Elizabeth"/></a></div> */}
                <p className='WeddingParty-name'>Elizabeth George</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Jainy" title="Jainy"/></a></div> */}
                <p className='WeddingParty-name'>Jainy Vathikulam</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Nisha" title="Nisha"/></a></div> */}
                <p className='WeddingParty-name'>Nisha Garg</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Pranali" title="Pranali"/></a></div> */}
                <p className='WeddingParty-name'>Pranali Sheth</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="BM" title="BM"/></a></div> */}
                <p className='WeddingParty-name'>Radhika Desai</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Reena" title="Reena"/></a></div> */}
                <p className='WeddingParty-name'>Reena Emmanuel</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Shreya" title="Shreya"/></a></div> */}
                <p className='WeddingParty-name'>Shreya Dadhaniya</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Simi" title="Simi"/></a></div> */}
                <p className='WeddingParty-name'>Simi Mathew</p>

            </div>
            <div className='WeddingParty-desc'>
                <h2 className='WeddingParty-info-section'>Hiral's Family</h2>
                <div className='WeddingParty-img'><a href="" title=""><img height="350" src={require("./media/weddingparty/pithadia-family.jpg")} alt="Rina's Parents" title="Rina's Parents" /></a></div>
                <p className='WeddingParty-name'>Parents: Snehal and Asha Pithadia</p>
                <p className='WeddingParty-name'>Brother & Sister-in-law: Amit and Namrata Pithadia </p>
                <p className='WeddingParty-name'>Brother: Sagar Pithadia </p>

                <h2 className='WeddingParty-info-section'>Hiral's Groomsmen</h2>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Adam Michael" title="Adam Michael"/></a></div> */}
                <p className='WeddingParty-name'>Adam Michael</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Anshul Mehta" title="Anshul Mehta"/></a></div> */}
                <p className='WeddingParty-name'>Anshul Mehta</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Colin Coelho" title="Colin Coelho"/></a></div> */}
                <p className='WeddingParty-name'>Colin Coelho</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Deepak Bhandarkar" title="Deepak Bhandarkar"/></a></div> */}
                <p className='WeddingParty-name'>Deepak Bhandarkar</p>
                {/* <div className='WeddingParty-img'><a href="" title=" "><img height="300" src={require()} alt="James Sears" title="James Sears"/></a></div> */}
                <p className='WeddingParty-name'>James Sears</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Kush Patel" title="Kush Patel"/></a></div> */}
                <p className='WeddingParty-name'>Kush Patel</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Kush Sharma" title="Kush Sharma"/></a></div> */}
                <p className='WeddingParty-name'>Kush Sharma</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Neil Bhatt" title="Neil Bhatt"/></a></div> */}
                <p className='WeddingParty-name'>Neil Bhatt</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Rohit Maramraju" title="Rohit Maramraju"/></a></div> */}
                <p className='WeddingParty-name'>Rohit Maramraju</p>
                {/* <div className='WeddingParty-img'><a href="" title=""><img height="300" src={require()} alt="Sajan Shah" title="Sajan Shah"/></a></div> */}
                <p className='WeddingParty-name'>Sajan Shah</p>
            </div>
        </div>
    </div>
);