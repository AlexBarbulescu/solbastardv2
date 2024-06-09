import { Container, Row, Col } from "react-bootstrap"
import CommonTitle from './CommonTitle'
import Token from './Token'

import img_1 from '../assets/img/buy/1.png'
import img_2 from '../assets/img/buy/2.png'
import img_3 from '../assets/img/buy/3.png'
import img_4 from '../assets/img/buy/4.png'

export default function HowToBuy() {
    const buy = [
        {
            title: 'Create a wallet',
            des: `Download Phantom wallet or your wallet of choice from the app store for free. Desktop users, download the Google Chrome extension by going to the Phantom app.`,
            img: img_1
        },
        {
            title: 'Get some sol',
            des: `Have SOL in your wallet to switch to $SOBA. If you don’t have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and add it to your wallet.`,
            img: img_2
        },
        {
            title: 'Go to Raydium',
            des: `Connect to Raydium or Jupiter. Go to raydium.io or jup.ag inside your Phantom app. Connect your wallet. Paste the $SOBA token address into Raydium or Jupiter, select the pair, and confirm.`,
            img: img_3
        },
        {
            title: 'Swap SOl for SOBA',
            des: `Swap your SOL for $SOBA on Raydium or Jupiter. Ensure you have enough SOL to cover transaction fees. Confirm the transaction to complete the swap.`,
            img: img_4
        },
    ]
    return (
        <div className="howTo common-padding pb-0">
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} md={10} lg={9}>
                    </Col>
                </Row>
                <Row className="common-row">
                    {buy.map((item, index) => (
                        <Col key={index} xs={12} md={6} lg={3} className="d-flex">
                            <div className="howTo-item w-100" data-aos="fade-up" data-aos-duration="1200" data-aos-delay={`${index + 1}00`}>
                                <div className="howTo-count fs-6 bg-primary text-white mb-3 mb-md-4 d-flex align-items-center justify-content-center">{index + 1}</div>
                                <h4 className="mb-2 pb-1 mb-md-3 pb-md-0">{item.title}</h4>
                                <p>{item.des}</p>
                                <img src={item.img} alt="" />
                            </div>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col xs={12} className="mt-3 mt-md-4">
                        <div className="tokenomics-item p-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
                            <Token address={'25p2BoNp6qrJH5As6ek6H7Ei495oSkyZd3tGb97sqFmH'} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
