import React from 'react';
import Toolbar from "../Components/Toolbar/Toolbar";
import SearchBar from '../Components/Searchbar/Searchbar';
import Youtube from '../Components/Youtube/Youtube';
import VideoList from '../Components/VideoList/VideoList';
import VideoDetail from '../Components/VideoDetail/VideoDetail';

class Resource extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await Youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

    render() {
        return (
            <div className="container">
<div className="row">
    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
   
            <div className='ui container' style={{marginTop: '10em'}}>
                <SearchBar handleFormSubmit={this.handleSubmit}/>
                <div className='ui grid'>
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default Resource;