import { Container, Row, Col } from "react-bootstrap"
import CommonTitle from './CommonTitle'

export default function Tokenomics() {
  const tokenInfo  = [
    {
      name: 'Tax',
      value: '0%',
    },
    {
      name: 'TOTAL SUPPLY',
      value: '100000',
    },
    {
      name: 'MINT',
      value: 'REVOKED',
    },
    {
      name: 'FREEZE',
      value: 'REVOKED',
    },
    {
      name: 'ALL SUPPLY',
      value: 'IN CIRCULATION',
    },
    {
      name: 'TOKEN SYMBOL',
      value: '$SOBA',
    },
  ];
  return (
    <div className="tokenomics common-padding pb-0">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={9}>
          </Col>
        </Row>
        <Row className="common-row">
          {tokenInfo.map((item,index) => (
            <Col key={index} xs={12} md={6} lg={4} className="d-flex">
              <div className="tokenomics-item w-100 p-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay={`${index+1}00`}>
                <span className="d-block mb-2 mb-md-3 text-uppercase">{item.name}</span>
                <h2 className="mb-0 lh-base text-uppercase">{item.value}</h2>
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Col xs={12} className="mt-3 mt-md-4">
            <div className="tokenomics-item p-3" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="">
              <div className="tokenomics-item-wrap">
                <iframe src="https://www.geckoterminal.com/solana/pools/2zjiSTrub1KPtuJzDoRyXcUHFLLC5doUsmStyBi5SjXG?embed=1&info=1&swaps=1" frameBorder="0"></iframe>
                {/* <img className="w-100" src={img} alt="" /> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
