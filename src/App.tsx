import "./App.css";
import { FaLinkedinIn, FaGithub, FaWhatsapp, FaKey } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const AVATAR_URL = "/avatar.jpg";
const COMPANY_URL = "https://www.linkedin.com/company/atavessanti/";

const LINKS = [
  {
    href: "https://www.linkedin.com/in/amirreza-nasiri/",
    label: "LinkedIn",
    icon: <FaLinkedinIn size={24} />,
  },
  {
    href: "https://github.com/AmirrezaNasiri",
    label: "GitHub",
    icon: <FaGithub size={24} />,
  },
  {
    href: "mailto:nasiri.amirreza.96@gmail.com",
    label: "Email",
    icon: <HiOutlineMail size={24} />,
  },
  {
    href: "https://wa.me/905521722669",
    label: "WhatsApp",
    icon: <FaWhatsapp size={24} />,
  },
  {
    href: "/amirreza-nasiri-public-key.asc",
    label: "Public Key",
    download: true,
    icon: <FaKey size={24} color="#d4a017" />,
  },
];

function App() {
  return (
    <div className="bg">
      <div className="gradient-bg">
        <svg>
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
        </div>
      </div>
      <div className="glass-card">
        <img className="avatar" src={AVATAR_URL} alt="Amirreza Nasiri" />
        <h1 className="title">Amirreza Nasiri</h1>
        <h2 className="title-sub">Senior Software, DevOps & Site-Reliability Engineer</h2>
        <a className="company" href={COMPANY_URL} target="_blank" rel="noopener noreferrer">
          <img src="/atavessanti-logo.jpg" alt="Ataves Santi" className="company-logo" />
          Ataves Santi
        </a>
        <div className="location">
          <img src="/turkey-flag.png" alt="Turkey" className="location-icon" />
          <span>at Istanbul, Türkiye</span>
        </div>
        <div className="links">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="link-btn"
              target="_blank"
              rel="noopener noreferrer"
              {...(link.download ? { download: "" } : {})}
            >
              <span className="icon">{link.icon}</span>
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
      <a href="https://github.com/AmirrezaNasiri/portfolio-template" target="_blank" rel="noopener noreferrer" className="github-ribbon">
        <FaGithub size={24} />
      </a>
    </div>
  );
}

export default App;
