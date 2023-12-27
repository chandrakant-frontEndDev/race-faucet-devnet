import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

function Faq() {
  return (
    <>
      <div className="faq_section" data-scroll-section>
        <Container fluid>
          <Row className='justify-content-center'>
            <Col xl={10} lg={12} md={12} sm={12}>
              <div className="faq_content">
                <Row>
                  <Col xl={6} lg={12} md={12} sm={12}>
                    <div className="faq_left">
                      <h1 className='faq_title'>Frequently Asked Questions</h1>
                      <p className='faq_text'>
                        The RACE Faucet is a developer tool to get testnet RACE <br></br>
                        token in order to test and troubleshoot your <br></br>
                        decentralized application or protocol before going live on <br></br>
                        mainnet, where one must use real RACE.
                      </p>
                    </div>
                  </Col>
                  <Col xl={6} lg={12} md={12} sm={12}>
                    <div className="faq_accordian">
                      <Accordion>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>How Do I Use This?</Accordion.Header>
                          <Accordion.Body>
                            To request funds, simply enter your wallet address, and hit “Give Me ETH”. We support wallets as received addresses but not smart contracts.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>How Does It Works?</Accordion.Header>
                          <Accordion.Body>
                            You can request 0.001 Race ETH every 4 hours with a RACE Faucet.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>Do I Need To Authenticate Myself?</Accordion.Header>
                          <Accordion.Body>
                            No need for Authentication because of Race faucets allows users to claim Ether without any authentication or registration process. These faucets typically require users to enter their Race wallet address. Once the claim is processed, the Ether (Race) is sent directly to the provided address.
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>What Is A Testnet Token?</Accordion.Header>
                          <Accordion.Body>
                            Testnet tokens are a test currency that allows you to test your RACE application before going live on mainnet. Testnet tokens can be used in place of mainnet Ether tokens on testnets like Sepolia.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Faq