import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'

function Faq() {
  return (
    <>
      <div className="faq_section">
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
                      <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>How Do I Use This?</Accordion.Header>
                          <Accordion.Body>
                            To use a Race faucet, which is a service that provides free Ether (ETH) (RACE)to users, follow these general steps:
                            <ol>
                              <li>Enter your Race address: Typically, the faucet will require you to enter your Race wallet address to receive the free Ether (Race). Make sure you have a valid Race address ready.</li>
                              <li>Claim your Ether (Race): After enter valid wallet address, click on the “Give Me RACE” button to request your free Ether (Race).</li>
                              <li>Verify the transaction: depending on the faucet, you might need to confirm the transaction or complete an additional step to receive your Ether (race). Follow the instructions provided by the faucet.</li>
                              <li>Wait for the transaction to be processed: The faucet will process your request, and the Ether (Race) will be sent to the Race address you provided. The time it takes for the transaction to complete can vary depending on the faucet and network conditions. </li>
                              <li>Check your wallet: Once the transaction is conformed and processed, you should see the free Ether (Race) in your Race wallet. The amount of Ether (Race) you receive from the faucet may vary depending on the facet’s rules and the current market conditions.</li>
                            </ol>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>How Does It Works?</Accordion.Header>
                          <Accordion.Body>
                            A Race faucet is a service that distributes small amounts of Ether (Race) to users for free. Here's how a Race faucet generally works:
                            <ol>
                              <li>Funding: The operator of the faucet usually funds it with a certain amount of Ether (Race). This donation can be from their own Ether (Race) faucet.</li>
                              <li>Race Address Verification: Users provide their Race wallet address where they want to receive the free Ether (Race). This address is crucial as it's where the faucet will send the distributed Ether (Race).</li>
                              <li>Distribution Algorithm: The faucet employs a distribution algorithm that determines how much Ether (Race) is given to each user. The amount can vary depending on factors such as the faucet's rules, the current market conditions, or the availability of funds.</li>
                              <li>Request Processing: Once a user submits their Race address, the faucet verifies the submission and processes the request.</li>
                              <li>Ether (Race) Transfer: If the request is valid and passes the faucet's verification process, the faucet sends the specified amount of Ether to the provided Ethereum address. The transaction is broadcasted to the Race network, and users can track the progress of the transaction using a Race block explorer.</li>
                              <li>Faucet Limits: To prevent abuse and ensure fair distribution, most faucets have certain limits in place. These limits can include restrictions on the frequency of claims, the maximum amount of Ether (Race) that can be claimed per day.</li>
                              <li>Refilling the Faucet: Over time, as users claim Ether (Race) from the faucet, the faucet's available balance decreases. The faucet operator periodically refills the faucet with additional funds to maintain its ability to distribute Ether (Race) to users.</li>
                            </ol>
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
                            A testnet token is a type of cryptocurrency token that is specifically designed for use on a testnet. A testnet is a separate blockchain network that developers and users can utilize for testing and experimentation purposes. It aims to replicate the functionalities of the mainnet (the live or production blockchain network) but without the value associated with the actual cryptocurrency.
                            <br />
                            <br />
                            Testnet tokens are typically used to simulate transactions and interactions on the blockchain network during the development and testing phase of a decentralized application (DApp) or smart contract. These tokens have no real-world value and are not traded on exchanges.
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