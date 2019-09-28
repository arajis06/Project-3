import React from 'react';
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
import ProfileInfo from '../Components/ProfileInfo/ProfileInfo';


class Profile extends React.Component {
    render() {
        return (
            <div className="container">
<div className="row">
    <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <ProfileInfo />
   
            {/* <div className='ui container' style={{marginTop: '10em'}}>
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
            </div> */}
            </div>
            </div>
        )
    }
}

export default Profile;