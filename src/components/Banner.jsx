import { Col, Container, Row } from 'react-bootstrap'
import heroRImg from '../assets/img/heroRightImg.png'
import heroRBG from '../assets/img/HeroRImgShap.png'
import icon_1 from '../assets/img/s-1.png'
import icon_2 from '../assets/img/s-2.png'

export default function Banner() {
    const socialLinks = [
        {
            icon: icon_1,
            href: 'https://jup.ag/swap/SOL-25p2BoNp6qrJH5As6ek6H7Ei495oSkyZd3tGb97sqFmH'
        },
        {
            icon: icon_2,
            href: 'https://raydium.io/swap/?inputMint=sol&outputMint=25p2BoNp6qrJH5As6ek6H7Ei495oSkyZd3tGb97sqFmH'
        },
    ];
    return (
        <div className="banner">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={7} md={6}>
                        <div className="banner-content">
                            <h1 className='text-uppercase' data-aos="fade-up" data-aos-duration="1200" data-aos-offset="0">Welcome to SOLBastard</h1>
                            <p data-aos="fade-up" data-aos-duration="1200" data-aos-offset="0">$SOBA is a memecoin made for bastards.</p>
                            <div className="banner-btn mt-4 pt-1 pt-md-2 pt-lg-0 mt-lg-5 d-flex align-items-center gap-3 gap-lg-4 justify-content-center justify-content-md-start" data-aos="fade-up" data-aos-duration="1600" data-aos-offset="0">
                                <a href='https://magiceden.io/marketplace/solbastard' target='_blank' className="base-btn">SOBA NFTs</a>
                                <ul className="social-list d-flex align-items-center gap-2">
                                    {socialLinks.map((link, index) => (
                                        <li key={index}><a href={link.href} target="_blank" className='social-link ms-md-1 rounded-pill d-flex align-items-center justify-content-center'><img src={link.icon} alt="" /></a></li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} md={6} className='mt-5 mt-md-0'>
                        <div className="banner-img overflow-hidden" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="">
                            <img className='banner-bg' src={heroRBG} alt="" />
                            <img src={heroRImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
