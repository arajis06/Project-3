import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, Img, Button, Card, CardDeck } from 'react-bootstrap';
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Col from "../Components/Col/Col";



class Resource extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12" style={{ marginTop: '3em' }}>
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    </Col>
                    <Col size="md-6" style={{ marginTop: '5em', float:'left' }}>
                        <a href="/video"><h3 className="text-center" style={{ paddingBottom: '15px', color: '#521751', fontFamily:'Dosis, sans-serif', fontWeight:'600', letterSpacing:'0.25rem', fontSize:'45px' }}>Video Resource</h3></a>
                  
                        <Card>
  <Card.Img variant="top" src="https://www.gettingsmart.com/wp-content/uploads/2016/11/Video-Learning-Feature-Image.jpg" alt="Video Resource" style={{height: '19rem'}} />
  <Card.Body>
    
    <Card.Text>
      You can search what do you need to learn! 
    </Card.Text>
    <Button variant="outline-warning" href="/video" style={{float: 'right', boxShadow: 'none' }}>Videos</Button>
  </Card.Body>
</Card>
                  
                        {/* <Card style={{ borderRadius: '10px' }}>
                            {/* <ListGroup variant="flush">
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
                            </ListGroup> */}
                            {/* <Image src="../../public/video-resource.jpg"></Image>
                        </Card> */}
                    </Col>
                    <Col size="md-6" style={{ marginTop: '5em', borderRadius: '20px' }}>
                        <a href="/blog"><h3 className="text-center" style={{ paddingBottom: '15px', color: '#521751', fontFamily:'Dosis, sans-serif', fontWeight:'600', letterSpacing:'0.25rem', fontSize:'45px' }}>Blog</h3></a>
                    
                        <Card>
  <Card.Img variant="top" src="https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png" alt="Blog" style={{height: '19rem'}} />
  <Card.Body>
    
    <Card.Text>
      You can search what do you need to learn! 
    </Card.Text>
    <Button variant="outline-warning" href="/blog" style={{float: 'right', boxShadow: 'none' }}>Blogs</Button>
  </Card.Body>
</Card>
                        {/* <CardDeck style={{ paddingBottom: '30px' }}>
                            <Card>
                                <Card.Img variant="top" />
                                <Card.Body>
                                    <Card.Title>Learn React Basics in 10 Minutes</Card.Title>
                                    <Card.Text>
                                        If you are new to React.js this tutorial will give you introduction to all basic concepts in react.
      </Card.Text>
                                </Card.Body>
                                <Card.Footer style={{backgroundColor:'#a543a31a'}}>
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
                                <Card.Footer style={{backgroundColor:'#a543a31a'}}>
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
                                <Card.Footer style={{backgroundColor:'#a543a31a'}}>
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
                                <Card.Footer style={{backgroundColor:'#a543a31a'}}>
                                    <small className="text-muted">Last updated 3 days ago</small>
                                </Card.Footer>
                            </Card>

                        </CardDeck> */}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Resource;