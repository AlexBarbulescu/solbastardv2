
import { FaTelegramPlane, FaTiktok } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function Social({ className }) {
  const socialIcons = [
    {
      name: 'telegram',
      icon: <FaTelegramPlane />,
      url: 'https://t.me/SolBastardSOBA'
    },
    {
      name: 'twitter',
      icon: <FaXTwitter />,
      url: 'https://x.com/SolBastardSoba'
    },
    {
      name: 'tiktop',
      icon: <FaTiktok />,
      url: ' https://www.tiktok.com/@cryptobastard'
    },
  ];
  return (
    <ul className={`social-list d-flex align-items-center flex-wrap gap-2 gap-md-3 ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index}>
          <a href={item.url} target="_blank" className="social-link rounded-pill d-flex align-items-center justify-content-center">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  )
}