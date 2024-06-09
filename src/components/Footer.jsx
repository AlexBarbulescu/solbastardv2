import { Container, Row, Col } from 'react-bootstrap'
import Logo from './Logo'
import Social from './Social'

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row className='justify-content-center'>
          <Col xs={12} md={10} lg={6}>
            <div className="footer-wrap text-center" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
              <Logo className="mx-auto mb-3 mb-md-4" />
              <p className='mb-4'>This is the dummy bastard who made this coin Accidently, but then ....He decided to share it with a community of pure BASTARDS Now the police is chasing him!!!!</p>
              <Social className="justify-content-center" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-copy">
        <Container>
          <Row>
            <Col xs={12} className=' d-flex align-items-center justify-content-center justify-content-md-between gap-2 flex-wrap'>
              <p className='text-white fw-normal lh-base fs-6'>Copiright 2024 contact@solbastard.com</p>
              <p className='text-white fw-normal lh-base fs-6'>All rights reserved</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
