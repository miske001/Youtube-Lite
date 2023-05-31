import React, { useState } from "react";
import './style.css'
import Search from './Search'
import youtube from "./apis/youtube";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const onFormSubmit = async (term) => {
        const response = await youtube.get('/search',{
            params: {
                q:term
            }
        })
        console.log(response.data.items);
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    const clearAll = () => {
        setVideos([]);
        setSelectedVideo(null);
    }

    return(
        <div className="container">
            <Search onFormSubmit={onFormSubmit} clearAll={clearAll} />
            <div className="main-flex">
                <VideoDetail video={selectedVideo} />
                <VideoList videos={videos} onVideoSelect={onVideoSelect} />
            </div>
        </div>
    )
}

export default App;