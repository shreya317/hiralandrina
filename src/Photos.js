import React from 'react';
import Gallery from 'react-grid-gallery';
//CSS
import './styles/Photos.css'
import {ENGAGEMENT_SHOOT} from './galleryPhotos';


export const Photos = () => (
    <div className='Photos'>
        <div className='Photos-container'>
            <h1 className='Photos-title'>Photos</h1>
            <h2 className='Photos-info-section'>Pre-Wedding Photo Shoot</h2>
            <div className='Photos-gallery'>
                <Gallery 
                    id={'Photos-gallery'}
                    images={ENGAGEMENT_SHOOT}
                    enableImageSelection={false}
                    backdropClosesModal={true}
                    showLightboxThumbnails={true}
                    rowHeight={250}
                    maxRows={2}
                    margin={10}
                />
            </div>
        </div>
    </div>    
);
