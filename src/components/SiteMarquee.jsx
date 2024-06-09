import Marquee from 'react-fast-marquee'
import img_1 from '../assets/img/marquee/1.png'
import img_2 from '../assets/img/marquee/2.png'
import img_3 from '../assets/img/marquee/3.png'
import img_4 from '../assets/img/marquee/4.png'
import img_5 from '../assets/img/marquee/5.png'
import img_6 from '../assets/img/marquee/7.png'
import img_7 from '../assets/img/marquee/6.png'
import img_8 from '../assets/img/marquee/8.png'
import img_9 from '../assets/img/marquee/9.png'


export default function SiteMarquee() {
    const images = [
        {
            img: img_2,
            url: 'https://coinmarketcap.com/currencies/sol-bastard/'
        },
        {
            img: img_3,
            url: 'https://www.coingecko.com/en/coins/sol-bastard'
        },
        {
            img: img_1,
            url: 'https://www.dextools.io/app/en/solana/pair-explorer/2zjiSTrub1KPtuJzDoRyXcUHFLLC5doUsmStyBi5SjXG?t=1717700292610'
        },
        {
            img: img_4,
            url: 'https://dexscreener.com/solana/25p2bonp6qrjh5as6ek6h7ei495oskyzd3tgb97sqfmh'
        },
        {
            img: img_5,
            url: 'https://x.com/SolBastardSoba'
        },
        {
            img: img_7,
            url: 'https://t.me/SolBastardSOBA'
        },
        {
            img: img_6,
            url: 'https://www.toobit.com/en-US/spot/SOBA_USDT'
        },
        {
            img: img_8,
            url: 'https://coinpaprika.com/coin/soba-sol-bastard/'
        },
        {
            img: img_9,
            url: 'https://coinranking.com/coin/iMJ1R3ZjI+solbastard-soba'
        },
        
    ]
    return (
        <Marquee className='marquee' speed={60} direction='left' autoFill={true}>
            {images.map((item, index) => (
                <a href={item.url} target='_blank' className="marquee-item d-block" key={index}><img src={item.img} alt="" /></a>
            ))}
        </Marquee>
    )
}
