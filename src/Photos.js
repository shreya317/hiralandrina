import React from 'react';
import Gallery from 'react-grid-gallery';
//CSS
import './styles/Photos.css'
import {PROPOSAL_IMAGES} from './galleryPhotos';


export const Photos = () => (
    <div className='Photos'>
        <h1 className='Photos-title'>Photos</h1>
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
