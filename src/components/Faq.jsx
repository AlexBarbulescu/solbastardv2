import { Col, Container, Row } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';

export default function Faq() {
  const faq = [
    {
      title: 'Do you have a Roadmap?',
      des: `
        <ul>
          <li class="d-flex mb-2"><span></span> Initial fair launch on Pump Fun and Raydium listing</li>
          <li class="d-flex mb-2"><span></span> Marketing</li>
          <li class="d-flex mb-2"><span></span> Coinmarketcap and Coingecko Listing</li>
          <li class="d-flex mb-2"><span></span> Releasing our sexy $SOBA NFTs</li>
          <li class="d-flex mb-2"><span></span> Listing on other Exchanges</li>
        </ul>
      `,
    },
    {
      title: 'How do I get a $SOBA?',
      des: `
      <p>Swap SOL for SOBA.</p>
      `,
    },
    {
      title: 'When the Token Launched?',
      des: `<p>We Launched on 13 May 2024</p>`,
    },
    {
      title: 'Whats the reason? ',
      des: `<p>Even him doesn't know why. Just a bastard!</p>`,
    },
  ]
  return (
    <div className="faq common-padding pb-0 position-relative">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10}>
            <div className="common-title gap-4 d-flex align-items-center justify-content-between">
              <h2 className="mb-0 text-uppercase" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">faq</h2>
            </div>
            <Accordion defaultActiveKey={0}>
              {faq.map((item, index) => (
                <Accordion.Item eventKey={index} key={index} data-aos="fade-up" data-aos-duration="1200" data-aos-delay={`${index+1}00`}>
                  <Accordion.Header>{item.title}</Accordion.Header>
                  <Accordion.Body dangerouslySetInnerHTML={{ __html: item.des }}></Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  )
}