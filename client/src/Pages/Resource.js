import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card } from 'react-bootstrap';
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Col from "../Components/Col/Col";



class Resource extends React.Component {
         // Methods for components in the Navigation Directory=========================
  // set initial state
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
  }
    render() {
         // let sideDrawer; //null
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
        return (
            <Container>
                <Row>
                    <Col size="md-12" style={{ marginTop: '3em' }}>
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                        <SideDrawer show={this.state.sideDrawerOpen} />
                        {backdrop}
                    </Col>
                    <Col size="md-6" style={{ marginTop: '5em', float: 'left' }}>
                        <a href="/video"><h3 className="text-center" style={{ paddingBottom: '15px', color: '#521751', fontFamily: 'Dosis, sans-serif', fontWeight: '600', letterSpacing: '0.25rem', fontSize: '45px' }}>Video Resource</h3></a>

                        <Card>
                            <Card.Img variant="top" src="https://www.gettingsmart.com/wp-content/uploads/2016/11/Video-Learning-Feature-Image.jpg" alt="Video Resource" style={{ height: '19rem' }} />
                            <Card.Body>

                                <Card.Text>
                                    You can search what do you need to learn!
    </Card.Text>
                                <Button variant="outline-success" href="/video" style={{ float: 'right', boxShadow: 'none' }}>Videos</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col size="md-6" style={{ marginTop: '5em', borderRadius: '20px' }}>
                        <a href="/blog"><h3 className="text-center" style={{ paddingBottom: '15px', color: '#521751', fontFamily: 'Dosis, sans-serif', fontWeight: '600', letterSpacing: '0.25rem', fontSize: '45px' }}>Blog</h3></a>

                        <Card>
                            <Card.Img variant="top" src="https://www.webnode.com/blog/wp-content/uploads/2019/04/blog2.png" alt="Blog" style={{ height: '19rem' }} />
                            <Card.Body>

                                <Card.Text>
                                    You can search what do you need to learn!
    </Card.Text>
                                <Button variant="outline-success" href="/blog" style={{ float: 'right', boxShadow: 'none' }}>Blogs</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Resource;