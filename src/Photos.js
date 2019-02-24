import React from 'react';
import Gallery from 'react-grid-gallery';
//CSS
import './styles/Photos.css'
import {ENGAGEMENT_CERMEONY, PROPOSAL_IMAGES} from './galleryPhotos';


export const Photos = () => (
    <div className='Photos'>
        <h1 className='Photos-title'>Photos</h1>
        <h2 className='Photos-info-section'>Engagement Shoot</h2>
        <h2 className='Photos-info-section'>Engagement Ceremony </h2>
        <div className='Photos-gallery'>
            <Gallery 
                id={'Photos-gallery'}
                images={ENGAGEMENT_CERMEONY}
                enableImageSelection={false}
                backdropClosesModal={true}
                showLightboxThumbnails={true}
                rowHeight={250}
                maxRows={1}
            />
        </div>
        <h2 className='Photos-info-section'>US</h2>
        <div className='Photos-gallery'>
            <Gallery 
                id={'Photos-gallery'}
                images={PROPOSAL_IMAGES}
                enableImageSelection={false}
                backdropClosesModal={true}
                showLightboxThumbnails={true}
                rowHeight={250}
                maxRows={1}
            />
        </div>
    </div>    
);
