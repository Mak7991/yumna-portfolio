import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(223, 228, 199)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Jan 2024 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founder & CEO</h3>
            <h4 className="vertical-timeline-element-subtitle">
              MUSTSTARTUP - Karachi - PK
            </h4>
            <p>
              As the Founder & CEO of MustStartup, I am building a
              next-generation startup marketplace designed for the digital-first
              era. MustStartup brings together founders, investors, freelancers,
              and mentors to reshape how businesses are launched, scaled, and
              supported across borders. I lead the platform’s overall vision,
              product direction, branding, and partnerships all with a focus on
              accessibility, innovation, and youth empowerment. From pitch
              development to early market positioning, I oversee strategic
              initiatives that make entrepreneurship more fluid, flexible, and
              future-ready for the next generation of global builders.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2023 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Chief Executive Officer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Gen-Z | Builders & Developers - Karachi - PK
            </h4>
            <p>
              At GenZ Builders & Developers, I’m introducing a fresh perspective
              to real estate by designing projects that reflect the needs and
              aspirations of modern youth. With a focus on affordability, smart
              living, and digital identity, I conceptualize and lead real estate
              initiatives like T20 Towers and BlockTel. These projects aim to
              redefine urban spaces and offer alternative wealth-building paths
              for young professionals and first-time investors. My role involves
              end-to-end project ideation, team coordination, and strategic
              direction across architecture, branding, and innovation.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2022 - July 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">House Officer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Jinnah Postgraduate Medical Centre - Karachi - PK
            </h4>
            <p>
              As a House Officer in the Orthopedic Department at Jinnah Sindh
              Medical Hospital, I play a pivotal role in the comprehensive care
              of orthopedic patients. Under the guidance of senior doctors, I am
              responsible for assisting in patient assessments, contributing to
              treatment plans, participating in surgeries, prescribing
              medications, and ensuring post-operative care. With strong medical
              knowledge and excellent communication skills, I thrive in the
              fast-paced environment of a renowned medical institution. My
              commitment to delivering high-quality healthcare and dedication to
              continuous learning make me an asset to any healthcare team.
            </p>
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Analyst Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Tokyo, Japan</h4>
            <p>Automation, Data Governance, Statistical Analysis</p>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
