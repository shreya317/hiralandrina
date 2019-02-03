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
    {
        src: require('./media/gallery/IMG_1.jpg'),
        thumbnail: require('./media/gallery/IMG_1.jpg'),
        thumbnailWidth: 777,
        thumbnailHeight: 1014
    },   {
        src: require('./media/gallery/IMG_2.jpg'),
        thumbnail: require('./media/gallery/IMG_2.jpg'),
        thumbnailWidth: 777,
        thumbnailHeight: 1014
    },        {
        src: require('./media/gallery/IMG_5.jpg'),
        thumbnail: require('./media/gallery/IMG_5.jpg'),
        thumbnailWidth: 888,
        thumbnailHeight: 888
    },{
        src: require('./media/gallery/IMG_3.jpg'),
        thumbnail: require('./media/gallery/IMG_3.jpg'),
        thumbnailWidth: 777,
        thumbnailHeight: 1014
    },    {
        src: require('./media/gallery/IMG_6.jpg'),
        thumbnail: require('./media/gallery/IMG_6.jpg'),
        thumbnailWidth: 777,
        thumbnailHeight: 1014
    },    {
        src: require('./media/gallery/IMG_7.jpg'),
        thumbnail: require('./media/gallery/IMG_7.jpg'),
        thumbnailWidth: 888,
        thumbnailHeight: 888
    },{
        src: require('./media/gallery/IMG_20.jpg'),
        thumbnail: require('./media/gallery/IMG_20.jpg'),
        thumbnailWidth: 777,
        thumbnailHeight: 1014
    },    {
        src: require('./media/gallery/IMG_8.jpg'),
        thumbnail: require('./media/gallery/IMG_8.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },    {
        src: require('./media/gallery/IMG_16.jpg'),
        thumbnail: require('./media/gallery/IMG_16.jpg'),
        thumbnailWidth: 777,
        thumbnailHeight: 1014
        
    },    {
        src: require('./media/gallery/IMG_9.jpg'),
        thumbnail: require('./media/gallery/IMG_9.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },    {
        src: require('./media/gallery/IMG_10.jpg'),
        thumbnail: require('./media/gallery/IMG_10.jpg'),
        thumbnailWidth: 888,
        thumbnailHeight: 888
    },{
        src: require('./media/gallery/IMG_19.jpg'),
        thumbnail: require('./media/gallery/IMG_19.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },    {
        src: require('./media/gallery/IMG_15.jpg'),
        thumbnail: require('./media/gallery/IMG_15.jpg'),
        thumbnailWidth: 777,
        thumbnailHeight: 1014
    },    {
        src: require('./media/gallery/IMG_11.jpg'),
        thumbnail: require('./media/gallery/IMG_11.jpg'),
        thumbnailWidth: 888,
        thumbnailHeight: 888,
    },    {
        src: require('./media/gallery/IMG_12.jpg'),
        thumbnail: require('./media/gallery/IMG_12.jpg'),
        thumbnailWidth: 888,
        thumbnailHeight: 888
    },    {
        src: require('./media/gallery/IMG_13.jpg'),
        thumbnail: require('./media/gallery/IMG_13.jpg'),
        thumbnailWidth: 888,
        thumbnailHeight: 888
    },    {
        src: require('./media/gallery/IMG_17.jpg'),
        thumbnail: require('./media/gallery/IMG_17.jpg'),
        thumbnailWidth: 777,
        thumbnailHeight: 1014
        
    },    {
        src: require('./media/gallery/IMG_14.jpg'),
        thumbnail: require('./media/gallery/IMG_14.jpg'),
        thumbnailWidth: 320,
        thumbnailHeight: 212
    },    {
        src: require('./media/gallery/IMG_18.jpg'),
        thumbnail: require('./media/gallery/IMG_18.jpg'),
        thumbnailWidth: 888,
        thumbnailHeight: 888
    },{
        src: require('./media/gallery/IMG_21.jpg'),
        thumbnail: require('./media/gallery/IMG_21.jpg'),
        thumbnailWidth: 777,
        thumbnailHeight: 1014
    },{
        src: require('./media/gallery/IMG_22.jpg'),
        thumbnail: require('./media/gallery/IMG_22.jpg'),
        thumbnailWidth: 777,
        thumbnailHeight: 1014
    },
    
]   

export const Photos = () => (
    <div className='Photos'>
        <h1 className='Photos-title'>Photos</h1>
        <Gallery 
            id={'Photos-gallery'}
            images={PROPOSAL_IMAGES}
            enableImageSelection={false}
            backdropClosesModal={true}
            showLightboxThumbnails={true}
            rowHeight={250}
        />
    </div>    
);
