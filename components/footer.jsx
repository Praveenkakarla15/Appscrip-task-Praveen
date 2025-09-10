import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/returns">Returns</a></li>
            <li><a href="/order-tracking">Order Tracking</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/terms">Terms</a></li>
            <li><a href="/cookies">Cookies</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow</h4>
          <div className="social">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Shopkart. All rights reserved.
      </div>
    </footer>
  );
}
