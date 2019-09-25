import React from 'react';
import './VideoDetail.css';


const VideoDetail = ({video}) => {
    if (!video) {
        return <div className="loading text-center">Please make proper search </div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div className="wrap">
            <h4 className='ui header'>{video.snippet.title}</h4>
            <div className='ui embed'>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;