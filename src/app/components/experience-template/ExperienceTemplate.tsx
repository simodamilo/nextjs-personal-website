import {
  Experience,
  ExperienceTemplateProps,
} from "@/app/models/experience.model";
import { Tooltip } from "antd";

export const ExperienceTemplate = ({
  title,
  experiences,
  size,
}: ExperienceTemplateProps) => {
  const getGridSize = () => {
    return size === "sm" ? "grid-cols-5" : "grid-cols-9";
  };

  return (
    <div className="p-4 md:p-6 text-secondary-color dark:text-dark-secondary-color">
      <h1 className="text-4xl font-bold capitalize">{title}</h1>
      <div>
        {experiences?.map((exp) => {
          return (
            <div key={exp.key} className="mt-4">
              <h2 className="text-lg md:text-2xl">{exp.title}</h2>
              {size === "lg" && (
                <p className="text-base mt-1 hidden md:block">
                  {exp.description}
                </p>
              )}
              <div className={`grid max-w-sm mt-2 gap-3 ${getGridSize()}`}>
                {exp.icons?.map((icon) => {
                  return (
                    <Tooltip key={icon.key} title={icon.title}>
                      {icon.icon}
                    </Tooltip>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
