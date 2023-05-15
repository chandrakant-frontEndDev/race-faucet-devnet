import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import RaceLogo from '../style/image/race_logo.svg'
import Wallet from '../style/image/wallet.png'
import HeroLeft from '../style/image/hero_left.png'
import web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function MainHero() {
    const [walletAddress, setWalletAddresss] = useState("");
    const [transactionHash, setTransactionHash] = useState()
    const [nonce, setNonce] = useState()
    const provider = new web3.providers.HttpProvider("https://racedevnet.io/")
    const Web3 = new web3(provider);
    // const privateKey = "62403e0d2a025624ffc4d402d028a899f613f529d8c7372028cbefd226929409"
    // const address = "0xD1c8cf8A8F73830a1e4BAb3C4C93E5f7B76B0B66"
    const address = "0x8C8e74bce5091AADBB291BA9144252828664ab1C"
    const privateKey = "734d124f945ca544d74be08e6c5e23bb321a28bfc26a88451fb8eb9f3bb35702"
    // RPC = https://racedevnet.io
    // value = 1000000000000000

    console.log("walletAddress", walletAddress)
    const errorhandeler = () => {
        document.getElementById("wallet_address_error").style.display = "none"
        // document.getElementById("wallet_address").style.display = "block"
    }






    useEffect(() => {
        Web3.eth.net.isListening()
            .then((data) => {
                if (data) {
                    Web3.eth.getTransactionCount(address, 'latest')
                        .then((result) => {
                            console.log("result", result)
                            if (result) {
                                setNonce(result)
                            }
                        })
                        .catch((error) => {
                            console.log("error", error)
                        })
                }
            })
            .catch((error) => {
                console.log("error", error)
            })
    }, [walletAddress])




    const submitHandler = () => {

        console.log("resss", walletAddress)
        if (walletAddress === null) {
            document.getElementById("wallet_address_error").style.display = "block"
            // document.getElementById("wallet_address").style.display = "none"
            return
        }


        const transaction = {
            'to': walletAddress,
            'value': 1000000000000000,
            'gas': 30000,
            'nonce': nonce,
        };


        if (transaction) {
            Web3.eth.accounts.signTransaction(transaction, privateKey)
                .then((data) => {
                    console.log("data", data)
                    if (data) {

                        Web3.eth.sendSignedTransaction(data.rawTransaction, function (error, hash) {
                            if (!error) {
                                setTransactionHash(hash)
                                toast.success("race send successfully", {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: 'colored'
                                });

                                setWalletAddresss("")
                                console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
                            } else {

                                toast.error(`❗Something went wrong while submitting your transaction:${error}`, {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: true,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    theme: 'colored'
                                });
                                setWalletAddresss("")
                                console.log("❗Something went wrong while submitting your transaction:", error)
                            }
                        });
                    }
                })
                .catch((errpr) => {
                    console.log("errpr", errpr)
                })
        }

    }

    if (transactionHash) {
        Web3.eth.getTransaction(transactionHash)
            .then((data) => {
                console.log("data", data)
            })
            .catch((erro) => {
                console.log("erro", erro);
            })
    }

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
                                                    <input type="text" placeholder='Enter Wallet Address' className='form-control'
                                                        value={walletAddress}
                                                        onChange={(e) => setWalletAddresss(e.target.value)}
                                                        onKeyUp={errorhandeler}
                                                    />
                                                    <p id="wallet_address_error" style={{ color: "red", display: "none" }}>*Please Enter your wallet address</p>
                                                </div>

                                                    {/* <p id="wallet_address">Please enter your wallet address for RACE. It's free!</p> */}
                                                <div className="race_btn">
                                                    <button onClick={submitHandler}>Give Me RACE</button>
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
                                                                        <tr>
                                                                            <td>{transactionHash? transactionHash : "-"}</td>
                                                                            <td>{transactionHash? 'Just Now' : '-'}</td>
                                                                        </tr>
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
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}

export default MainHero