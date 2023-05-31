import React from "react";

const VideoDetail = ({video}) => {
    if(!video){
        return <div></div>
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="iframe">
            <iframe width='1024px' height='600px' src={videoSrc} frameborder="0"></iframe>
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
    )
}

export default VideoDetail;