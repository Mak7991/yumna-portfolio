import React from "react";
import "../assets/styles/Project.scss";
import "../assets/styles/Timeline.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import SlideInOnScroll from "./SlideInOnScroll";

const labelsFirst = [
  "Buy and sell startups or franchises",
  "Post and fulfill business needs (partners, jobs, services)",
  "Access AI-powered valuation, listings, and matchmaking",
  "Tokenize startup ownership via smart contracts and NFTs",
  "Use Wallet Connect and DAO governance for transparent collaboration",
];

function Project() {
  return (
    <SlideInOnScroll direction="right">
      <div className="container" id="projects">
        <div className="skills-container">
          <h1>
            <FontAwesomeIcon icon={faRocket} /> What I'm Building – MustStartup
          </h1>
          <div>
            <div className="skill">
              {/* <FontAwesomeIcon icon={faAddressCard} size="5x" /> */}
              <h3>
                MustStartup is not just a marketplace — it's a Web3-powered
                revolution for a new breed of founders
              </h3>
              <p>We're creating a global platform to:</p>
              <div className="flex-chips">
                {/* <span className="chip-title">Tech stack:</span> */}
                {labelsFirst.map((label, index) => (
                  <Chip key={index} className="chip" label={label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideInOnScroll>
  );
}

export default Project;
