import React from "react";
import { Link } from "react-router-dom";
import {
  Discord,
  DiscordFooter,
  fbFooter,
  FooterLogo,
  LocationIco,
  Logo,
  SmsIco,
  TwitterFooter,
} from "../../utils/allImgs";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-outer">
        <div className="footer-logo">
          <img className="footer-img" src={FooterLogo} alt="" />
          <div className="loction-line">
            <img src={LocationIco} alt="" />
            <span>68 Circular Road, #02-01 Singapore 049422</span>
          </div>
          <div className="loction-line">
            <img src={SmsIco} alt="" />
            <span>info@jaytradz.com </span>
          </div>
          <div className="social-icons">
            <Link to="/admindashboard">
              <img src={TwitterFooter} alt="" />
            </Link>
            <Link to="/Memberdashboard">
              <img src={fbFooter} alt="" />
            </Link>
            <a target="_blank" href="https://discord.gg/Rh6j6uE3qB">
              <img src={DiscordFooter} alt="" />
            </a>
          </div>
        </div>
        <div className="footer-logo text-center">
          <div className="loction-line">
            <ul>
              <li className="navigation">
                <h2>Navigation</h2>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#program">Our Program</a>
              </li>
              <li>
                <a href="#mission">Mission</a>
              </li>
              <li>
                <a href="#membership">Memberships</a>
              </li>
              <li className="mbl-only">
                <a href="#rewards">Rewards</a>
              </li>
              <li className="mbl-only">
                <a href="#benefits">Benefits </a>
              </li>
              <li className="mbl-only">
                <a href="">FAQ</a>
              </li>
              <li className="mbl-only">
                <a href="../../assets/doc/JayTradz-Brochure.pdf">Brochure</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-logo text-center desk-only">
          <div className="loction-line">
            <ul>
              <li className="navigation">
                <h2>Navigation</h2>
              </li>
              <li>
                <a href="#rewards">Rewards</a>
              </li>
              <li>
                <a href="#benefits">Benefits </a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="../../assets/doc/JayTradz-Brochure.pdf">Brochure</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-logo text-center">
          <div className="loction-line">
            <ul>
              <li className="navigation">
                <h2>Legal</h2>
              </li>
              <li>
                <Link to="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link to="/privacypolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <a href="">AML & KYC</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © 2023. JayTradz.com</p>
      </div>
    </div>
  );
};

export default Footer;
