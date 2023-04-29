import React from 'react'
import {Container, Row, Col, Table} from 'react-bootstrap'
import RaceLogo from '../style/image/race_logo.svg'
import Wallet from '../style/image/wallet.png'
import HeroLeft from '../style/image/hero_left.png'
function MainHero() {
  return (
    <>
        <div className="main_section">
            <Container fluid>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={12} >
                        <div className="header_logo">
                            <img src={RaceLogo} alt="" />
                        </div>
                    </Col>
                </Row>
               <div className="main_hero_content">
               <Row className='justify-content-center'>
                <Col xl={10} lg={12} md={12} sm={12}>
                <Row>
                    <Col xl={6} lg={12} md={12} sm={12}>
                        <div className="main_left_img">
                            <img src={HeroLeft} alt="" className='img-fluid' />
                        </div>
                    </Col>
                    <Col xl={6} lg={12} md={12} sm={12}>
                        <div className="race_faucet_bg">
                        <div className="main_content">
                            <h1>RACE Faucet</h1>
                            <h6>Receive 1 RACE / Day. Fast & Reliable.
                                <br></br>No Authentication Needed.
                            </h6>

                            <div className="waller_address_input">
                                <div className="wallet_icon">
                                    <img src={Wallet} alt="" className='img-fluid' />
                                </div>
                                <input type="text" placeholder='Enter Wallet Address' className='form-control' />
                            </div>

                            <div className="race_btn">
                                <button>Give Me RACE</button>
                            </div>
                            <p>What is the RACE faucet used for?</p>

                            <div className="transaction_table ">
                                <Table responsive >
                                    <thead>
                                        <tr>
                                            <th>Transaction ID</th>
                                            <th>Time</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {
                                         Array(7).fill("").map(()=>{
                                            return(
                                                <tr>
                                            <td>0xc7429a............3fe2237a5</td>
                                            <td>34 minutes ago</td>
                                        </tr>
                                            )
                                        })
                                       }
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                        </div>
                        
                    </Col>
                </Row>
                </Col>
               </Row>
               </div>
            </Container>
        </div>
    </>
  )
}

export default MainHero