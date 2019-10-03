import React from 'react';
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
import SearchBar from '../Components/Searchbar/Searchbar';
import Youtube from '../utils/Youtube';
import VideoList from '../Components/VideoList/VideoList';
import VideoDetail from '../Components/VideoDetail/VideoDetail';
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Col from "../Components/Col/Col";

const keys = require("../config/keys")

class Video extends React.Component {
    state = {
        sideDrawerOpen: false
    };
    //Previous state of the sidedrawer to control when to open
    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };
    //Controls when the backdrop displays
    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false })
    };

    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (termFromSearchBar) => {
        const response = await Youtube.get('/search', {
            params: {
                q: termFromSearchBar,
                part: 'snippet',
                maxResults: 4,
                key: keys.youtube_key
            }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    }

    render() {
        // let sideDrawer; //null
        let backdrop;

        if (this.state.sideDrawerOpen) {
            // sideDrawer = <SideDrawer />;
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }
        return (

            <Container style={{ marginTop: 30 }}>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                <Row>
                    <Col size="md-12" style={{ marginTop: '3em' }}>
                        <SearchBar handleFormSubmit={this.handleSubmit} />
                    </Col>
                </Row>
                <Row>
                    <Col size="md-8" style={{ marginTop: '2em', overflow: 'hidden' }}>
                        <VideoDetail video={this.state.selectedVideo} />
                    </Col>

                    <Col size="md-4" style={{ marginTop: '2em', float: 'right' }}>
                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
                    </Col>
                </Row>
            </Container>
            //             <div className="container">
            // <div className="row">
            //     <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>

            //             <div className='ui container' style={{marginTop: '10em'}}>
            //                 <SearchBar handleFormSubmit={this.handleSubmit}/>
            //                 <div className='ui grid'>
            //                     <div className="ui row">
            //                         <div className="eleven wide column">
            //                             <VideoDetail video={this.state.selectedVideo}/>
            //                         </div>
            //                         <div className="five wide column">
            //                             <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //             </div>
            //             </div>
        )
    }
}
export default Video;