import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { Header } from "../atoms/Header";
import { TExperience } from "../../types";
import { config } from "../../constants/config";
import ElectricCard, { TElectricColor } from "../atoms/ElectricCard";

const EXPERIENCE_COLORS: TElectricColor[] = ["blue", "pink", "green", "purple"];

const ExperienceCard: React.FC<TExperience & { index: number }> = ({
  index,
  ...experience
}) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "transparent",
        boxShadow: "none",
        padding: 0,
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid transparent" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={experience.icon}
            alt={experience.companyName}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <ElectricCard
        color={EXPERIENCE_COLORS[index % EXPERIENCE_COLORS.length]}
        radius={28}
        padding="26px 26px 24px"
      >
          <div>
            <h3 className="text-[24px] font-bold text-white">{experience.title}</h3>
            <p
              className="text-secondary text-[16px] font-semibold"
              style={{ margin: 0 }}
            >
              {experience.companyName}
            </p>
          </div>

          <ul className="ml-5 mt-5 list-disc space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 pl-1 text-[14px] tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
      </ElectricCard>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.experience} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} index={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
