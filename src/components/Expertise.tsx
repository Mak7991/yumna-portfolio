import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import SlideInOnScroll from "./SlideInOnScroll";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "SASS",
  "Flask",
  "Python",
  "SQL",
  "PostgreSQL",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub Actions",
  "Docker",
  "AWS",
  "Azure",
  "Linux",
  "Snowflake",
  "Pandas",
  "Selenium",
];

const labelsThird = [
  "OpenAI",
  "Groq",
  "LangChain",
  "Qdrant",
  "Hugging Face",
  "LlamaIndex",
  "Streamlit",
];

function Expertise() {
  return (
    <SlideInOnScroll direction="left">
      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>
            <FontAwesomeIcon icon={faAddressCard} /> About Me
          </h1>
          <div>
            <div className="skill">
              <h3>A medical doctor turned visionary entrepreneur </h3>
              <p>
                As the Founder & CEO of MustStartup, I’m launching the world’s
                first Web3-native startup marketplace — a place where
                entrepreneurs, investors, freelancers, and mentors come together
                to buy, sell, tokenize, and scale businesses globally. I also
                lead GenZ Builders & Developers, where I innovate youth-centric
                real estate concepts like T20 Towers and BlockTel. My vision? To
                redefine how people build wealth, communities, and business
                identity in the digital age.
              </p>
              {/* <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </SlideInOnScroll>
  );
}

export default Expertise;
