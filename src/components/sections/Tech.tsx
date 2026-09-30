import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";

const Tech = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="flex w-28 flex-col items-center" key={technology.name}>
            <div className="h-28 w-28">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-secondary mt-1 text-center text-[14px] font-medium">
              {technology.name}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
