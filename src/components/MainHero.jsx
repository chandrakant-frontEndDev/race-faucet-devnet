import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col, Table, Spinner } from 'react-bootstrap'
import RaceLogo from '../style/image/race_logo.svg'
import Wallet from '../style/image/wallet.png'
import HeroLeft from '../style/image/hero_left.png'
import web3 from "web3";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiExternalLink } from 'react-icons/fi'
import Cookies from 'js-cookie'
function MainHero() {

    const [Loader, setLoader] = useState(false)
    const submitRef = useRef(null)

    const UserWalletAddRef = useRef(null)
    const [error, setError] = useState({ isEmpty: false, isValidAddress: false })

    const [walletAddress, setWalletAddresss] = useState("");
    const [transactionHash, setTransactionHash] = useState()
    const [nonce, setNonce] = useState()
    const provider = new web3.providers.HttpProvider("https://racetestnet.io")
    const Web3 = new web3(provider);
    // const privateKey = "62403e0d2a025624ffc4d402d028a899f613f529d8c7372028cbefd226929409"
    // const address = "0xD1c8cf8A8F73830a1e4BAb3C4C93E5f7B76B0B66"
    const address = "0x8C8e74bce5091AADBB291BA9144252828664ab1C"
    const privateKey = process.env.REACT_APP_PRIVATE_KEY
    // RPC = https://racedevnet.io
    // value = 1000000000000000

    // console.log("walletAddress", walletAddress)
    // const errorhandeler = () => {
    //     document.getElementById("wallet_address_error").style.display = "none"
    //     // document.getElementById("wallet_address").style.display = "block"
    // }






    useEffect(() => {
        Web3.eth.net.isListening()
            .then((data) => {
                if (data) {
                    Web3.eth.getTransactionCount(address, 'latest')
                        .then((result) => {
                            // console.log("result", result)
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



    const [disBtn, setDisBtn] = useState(false)
    const submitHandler = ({ currentTarget }) => {
        const access_token = Cookies.get('uid')
        console.log({ access_token });
        if (!access_token) {
            toast.error(`Please Sign In GitHub to continue`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: 'colored'
            });
            return
        }
        // =========================================================================================================
        const UserInput = UserWalletAddRef.current.value
        const pattern = /\S/g
        const isEmpty = pattern.test(UserInput)
        const isValidAddress = web3.utils.isAddress(UserInput)
        if (!isEmpty) { setError({ isEmpty: true, isValidAddress: false }); return }
        if (!isValidAddress) { setError({ isEmpty: false, isValidAddress: true }); return }
        if (isEmpty && isValidAddress) setError({ isEmpty: false, isValidAddress: false });
        setDisBtn(true)
        // =========================================================================================================
        // const isValidInput = !isEmpty ? setError({ isEmpty: true, isValidAddress: false }) :
        //     !isValidAddress ? setError({ isEmpty: false, isValidAddress: true }) :
        //         setError({ isEmpty: false, isValidAddress: false })

        // console.log(isValidInput);

        // return
        // console.log("resss", walletAddress)
        // if (walletAddress === null) {
        //     // document.getElementById("wallet_address_error").style.display = "block"
        //     // document.getElementById("wallet_address").style.display = "none"
        //     return
        // }

        // submitRef.current.setAttribute("disabled", true)

        const transaction = {
            'to': walletAddress,
            'value': 1000000000000000,
            'gas': 30000,
            'nonce': nonce,
        };


        if (transaction) {
            setLoader(true)
            Web3.eth.accounts.signTransaction(transaction, privateKey)
                .then((data) => {
                    console.log("data", data)
                    if (data) {

                        Web3.eth.sendSignedTransaction(data.rawTransaction, function (error, hash) {
                            if (!error) {
                                setTransactionHash(hash)
                                toast.success("ETH send successfully", {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: false,
                                    draggable: false,
                                    progress: undefined,
                                    theme: 'colored'
                                });

                                setWalletAddresss("")
                                setLoader(false)
                                setTimeout(() => {
                                    setDisBtn(false)
                                }, 6000);
                                console.log("🎉 The hash of your transaction is: ", hash, "\n Check Alchemy's Mempool to view the status of your transaction!");
                            } else {
                                toast.error(`❗Something went wrong while submitting your transaction:${error}`, {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: false,
                                    pauseOnHover: false,
                                    draggable: false,
                                    progress: undefined,
                                    theme: 'colored'
                                });
                                setWalletAddresss("")
                                setLoader(false)
                                setDisBtn(false)
                                console.log("❗Something went wrong while submitting your transaction:", error)
                            }
                        });
                    }
                })
                .catch((errpr) => {
                    setLoader(false)
                    setDisBtn(false)
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
                                                <h6>Receive 0.001 ETH / Day. Fast & Reliable.
                                                    <br></br>No Authentication Needed.
                                                </h6>

                                                <div className="waller_address_input">
                                                    <div className="wallet_icon">
                                                        <img src={Wallet} alt="" className='img-fluid' />
                                                    </div>
                                                    <input type="text" ref={UserWalletAddRef} placeholder='Enter Wallet Address' className='form-control'
                                                        value={walletAddress}
                                                        onChange={(e) => setWalletAddresss(e.target.value)}
                                                    // onKeyUp={errorhandeler}
                                                    />
                                                    {/* <p id="wallet_address_error" style={{ color: "red", display: "none" }}>*Please Enter your wallet address</p> */}
                                                </div>
                                                {error.isEmpty && <p className='text-danger error'>Please enter your wallet address</p>}
                                                {error.isValidAddress && <p className='text-danger error'>Wallet Address is not valid! Please enter valid address.</p>}
                                                <div className="race_btn">
                                                    {Loader ?
                                                        <button disabled>
                                                            <Spinner animation='border' variant='dark' />
                                                        </button>
                                                        :
                                                        <button disabled={disBtn ? true : false} ref={submitRef} onClick={submitHandler}>Give Me ETH</button>
                                                    }
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
                                                                <td>
                                                                    {
                                                                        transactionHash ?
                                                                            <a className='transaction_details d-flex align-items-center' target='_blank' href={`https://testnet.racescan.io/tx/${transactionHash}`}>{transactionHash} <FiExternalLink /></a>
                                                                            : "-"
                                                                    }
                                                                </td>
                                                                <td>{transactionHash ? 'Just Now' : '-'}</td>
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
                hideProgressBar={false}
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