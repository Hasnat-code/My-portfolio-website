import { motion } from "framer-motion";

import { github } from "../../assets";
import { SectionWrapper } from "../../hoc";
import { projects } from "../../constants";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import ElectricCard, { TElectricColor } from "../atoms/ElectricCard";
import { TProject } from "../../types";

// Each project gets its own lightning colour
const PROJECT_COLORS: TElectricColor[] = ["green", "pink", "blue"];

const ProjectCard: React.FC<{ index: number } & TProject> = ({
  index,
  name,
  description,
  tags,
  features,
  sourceCodeLink,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[340px]"
    >
      <ElectricCard
        color={PROJECT_COLORS[index % PROJECT_COLORS.length]}
        padding="34px 30px 28px"
      >
        <h3 className="electric-title">{name}</h3>

        <div className="electric-tags">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <p className="electric-description">{description}</p>

        <div className="electric-divider" />

        <ul className="electric-list">
          {features.map((feature) => (
            <li key={feature}>✓ &nbsp; {feature}</li>
          ))}
        </ul>

        <button
          type="button"
          className="electric-button"
          onClick={() => window.open(sourceCodeLink, "_blank")}
        >
          <img src={github} alt="" className="h-5 w-5 object-contain" />
          View Source
        </button>
      </ElectricCard>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <Header useMotion={true} {...config.sections.works} />

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-3 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.works.content}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 max-sm:justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
