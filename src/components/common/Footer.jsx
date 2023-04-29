import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

function Footer() {
  return (
    <>
        <div className="footer_section">
            <Container fluid>
                <Row className='justify-content-center'>
                    <Col xl={9} lg={10} md={10} sm={10}>
                        <div className="footer_content">
                        <p>RACE @ 2020 All Rights Reserved</p>
                        <p>www.raceconomy.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Footer


