import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
import PostArticle from "../Components/PostArticle/PostArticle";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Col from "../Components/Col/Col";

class Post extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-12" style={{ marginTop: '3em' }}>
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                    </Col>
                    <Col size="md-12" style={{ marginTop: '5em' }}>
                        <h2 className="text-center" style={{fontFamily: "dosis, sans serif", fontSize: '40px', fontWeight: '600'}}>Create Article</h2>
                        <PostArticle />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Post;