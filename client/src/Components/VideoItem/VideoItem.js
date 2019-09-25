import React from 'react';
import './VideoItem.css'

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <div className='content'>
                <div className='header '>{video.snippet.title}</div>
            </div>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            
        </div>
    )
};
export default VideoItem;