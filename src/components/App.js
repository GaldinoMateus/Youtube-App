import React, { useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';



const App = () =>{
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos,search] = useVideos('buildings');

    useEffect(() =>{
        setSelectedVideo(videos[0]);
    },[videos]);

    
    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">

                    <div className="ten wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>



                    <div className="six wide column">

                        <div className="five wide column">
                            <h1 className="ui segment">{videos.length} videos encontrados </h1>
                        </div> 
                        
                        <VideosList
                            onVideoSelect={setSelectedVideo}
                            videos={videos}
                        />
                    </div>
                </div>
            </div>
        </div>
    );


};




export default App;