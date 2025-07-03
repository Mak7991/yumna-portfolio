import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import Avatar from "../assets/images/Avatar.jpeg";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://www.instagram.com/muststartupofficial?igsh=MXNxcDVuZ3g2ODMyeA=="
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/dr-yumna-ameer-39505123b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://preview--muststartup-nexus-verse.lovable.app/"
              target="_blank"
              rel="noreferrer"
            >
              <LanguageIcon />
            </a>
          </div>
          <h1>Dr. Yumna Ameer</h1>
          <p>Entrepreneur</p>

          <div className="mobile_social_icons">
            <a
              href="https://www.instagram.com/muststartupofficial?igsh=MXNxcDVuZ3g2ODMyeA=="
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/dr-yumna-ameer-39505123b/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://preview--muststartup-nexus-verse.lovable.app/"
              target="_blank"
              rel="noreferrer"
            >
              <LanguageIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
