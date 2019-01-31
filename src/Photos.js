import React from 'react';
import Gallery from 'react-grid-gallery';
//CSS
import './styles/Photos.css'

const PROPOSAL_IMAGES = [
    {
        src: require('./media/gallery/IMG_0355.jpg'),
        thumbnail: require('./media/gallery/IMG_0355.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: require('./media/gallery/IMG_0348.jpg'),
        thumbnail: require('./media/gallery/IMG_0348.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: require('./media/gallery/IMG_0429.jpg'),
        thumbnail: require('./media/gallery/IMG_0429.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: require('./media/gallery/IMG_8201.jpg'),
        thumbnail: require('./media/gallery/IMG_8201.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },
    {
        src: require('./media/gallery/IMG_8783.jpg'),
        thumbnail: require('./media/gallery/IMG_8783.jpg'),
        thumbnailWidth: 777,
        thumbnailHeight: 1014
    },
]

export const Photos = () => (
    <div className='Photos'>
        <h1 className='Photos-title'>Photos</h1>
        <div className='Photos-gallery'>
            <Gallery 
                images={PROPOSAL_IMAGES}
                enableImageSelection={false}
                backdropClosesModal={true}
                showLightboxThumbnails={true}
                rowHeight={250}
            />
        </div>
    </div>    
);
