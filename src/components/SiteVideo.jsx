
import { Container, Row, Col } from 'react-bootstrap'
import video from '../assets/img/site-video.mp4'
import poster from '../assets/img/poster.png'

export default function SiteVideo() {
    return (
        <div className="common-padding pb-0">
            <Container>
                <Row className='justify-content-center'>
                    <Col xs={12} lg={10} data-aos="fade-up" data-aos-duration="1400" data-aos-delay="" data-aos-offset="">
                        <div className="banner-video position-relative z-1 overflow-hidden rounded-4 border border-4 border-primary">
                            <video className='position-absolute top-0 start-0 object-fit-cover' src={video} controls poster={poster}></video>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
