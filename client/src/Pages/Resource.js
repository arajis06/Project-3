import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Card, CardDeck } from 'react-bootstrap';
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
// import SearchBar from '../Components/Searchbar/Searchbar';
// import Youtube from '../Components/Youtube/Youtube';
// import VideoList from '../Components/VideoList/VideoList';
// import VideoDetail from '../Components/VideoDetail/VideoDetail';

class Resource extends React.Component {
    // state = {
    //     videos: [],
    //     selectedVideo: null
    // }
    // handleSubmit = async (termFromSearchBar) => {
    //     const response = await Youtube.get('/search', {
    //         params: {
    //             q: termFromSearchBar
    //         }
    //     })
    //     this.setState({
    //         videos: response.data.items
    //     })
    // };
    // handleVideoSelect = (video) => {
    //     this.setState({selectedVideo: video})
    // }

    render() {
        return (
            <div className="container">
                <div className="row col-md-12">
                    <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />

                    <div className='col-md-5' style={{ marginTop: '10em', borderRadius:'20px' }}>
                    <a href="/video"><h3 className="text-center" style={{paddingBottom: '15px'}}>Video Resource</h3></a>
                        <Card>
                            <ListGroup variant="flush">
                                
                                <ListGroup.Item><a>Angular</a></ListGroup.Item>
                                <ListGroup.Item><a>CSS</a></ListGroup.Item>
                                <ListGroup.Item><a>GitHub</a></ListGroup.Item>
                                <ListGroup.Item><a>HTML</a></ListGroup.Item>
                                <ListGroup.Item><a>Java</a></ListGroup.Item>
                                <ListGroup.Item><a>JavaScript</a></ListGroup.Item>
                                <ListGroup.Item><a>Node.js</a></ListGroup.Item>
                                <ListGroup.Item><a>Python</a></ListGroup.Item>
                                <ListGroup.Item><a>React</a></ListGroup.Item>
                                <ListGroup.Item><a>SQL</a></ListGroup.Item>
                                <ListGroup.Item><a>TypeScript</a></ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </div>

                    <div className='col-md-6' style={{ marginTop: '10em', borderRadius:'20px', marginLeft: '24px' }}>
                       <a href="/blog"><h3 className="text-center" style={{paddingBottom: '15px'}}>Blog</h3></a>
                        <CardDeck  style={{paddingBottom: '30px'}}>
                            <Card>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>Learn React Basics in 10 Minutes</Card.Title>
                                    <Card.Text>
                                        If you are new to React.js this tutorial will give you introduction to all basic concepts in react.
      </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 1 hour ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>JavaScript in Plain English</Card.Title>
                                    <Card.Text>
                                        Learn the web's most important programming language.
      </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 days ago</small>
                                </Card.Footer>
                            </Card>

                        </CardDeck>
                        <CardDeck>
                            <Card>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>Learn React Basics in 10 Minutes</Card.Title>
                                    <Card.Text>
                                        If you are new to React.js this tutorial will give you introduction to all basic concepts in react.
      </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 1 hour ago</small>
                                </Card.Footer>
                            </Card>
                            <Card>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>JavaScript in Plain English</Card.Title>
                                    <Card.Text>
                                        Learn the web's most important programming language.
      </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">Last updated 3 days ago</small>
                                </Card.Footer>
                            </Card>

                        </CardDeck>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resource;