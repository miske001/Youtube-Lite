import React from "react";

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div className="item" onClick={() => onVideoSelect(video)}>
            <img className="item-img" src={video.snippet.thumbnails.medium.url} alt="randomtekst" />
            <div className="item-title">{video.snippet.title}</div>
        </div>
    )
}


export default VideoItem;