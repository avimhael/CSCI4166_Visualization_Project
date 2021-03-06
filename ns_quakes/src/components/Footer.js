import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className='fixed-bottom'  style={{backgroundColor: '#005bbb', height:'50px'}}>
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <h5 className='text-white'>Matt Ward B00671544 | Winter 2021 | Dalhousie CSCI 4166.03 Visualization</h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer