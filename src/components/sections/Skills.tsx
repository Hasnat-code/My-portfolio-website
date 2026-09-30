import { motion } from "framer-motion";

import { SectionWrapper } from "../../hoc";
import { skillGroups } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import ElectricCard, { TElectricColor } from "../atoms/ElectricCard";
import { TSkill } from "../../types";

const TECHNICAL_COLORS: TElectricColor[] = [
  "blue",
  "green",
  "pink",
  "purple",
  "orange",
  "cyan",
];
const INTERPERSONAL_COLORS: TElectricColor[] = [
  "orange",
  "cyan",
  "pink",
  "green",
];

const SkillCard: React.FC<
  { index: number; color: TElectricColor } & TSkill
> = ({ index, color, title, description, icons }) => (
  <motion.div
    variants={fadeIn("up", "spring", (index % 3) * 0.25, 0.75)}
    className="h-full"
  >
    <ElectricCard
      color={color}
      radius={26}
      padding="26px 24px 24px"
      className="ec-fill"
    >
      <div className="skill-icons">
        {icons.map((icon, i) => (
          <span key={`${title}-${i}`} className="skill-icon">
            <img src={icon} alt="" />
          </span>
        ))}
      </div>
      <h4 className="electric-title mt-5 !text-[20px]">{title}</h4>
      <p className="electric-description !mb-0 !mt-2 !text-[14px]">
        {description}
      </p>
    </ElectricCard>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.skills} />

      {skillGroups.map((group, groupIndex) => {
        const colors = groupIndex === 0 ? TECHNICAL_COLORS : INTERPERSONAL_COLORS;
        return (
          <div key={group.title} className={groupIndex === 0 ? "mt-14" : "mt-24"}>
            <motion.h3
              variants={fadeIn("", "", 0.1, 1)}
              className="text-[24px] font-bold text-white"
            >
              {group.title}
            </motion.h3>

            <div
              className={`mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 ${
                groupIndex === 0 ? "lg:grid-cols-3" : "lg:grid-cols-4"
              }`}
            >
              {group.skills.map((skill, index) => (
                <SkillCard
                  key={skill.title}
                  index={index}
                  color={colors[index % colors.length]}
                  {...skill}
                />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SectionWrapper(Skills, "skills");
