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

  const getDescription = (exp: Experience) => {
    return size === "lg" ? exp.completeDescription : exp.briefDescription;
  };

  const getTitle = (exp: Experience) => {
    return size !== "sm" ? exp.completeTitle : exp.briefTitle;
  };

  return (
    <div className="p-4 lg:p-6 text-secondary-color dark:text-dark-secondary-color">
      <h1 className="text-4xl font-bold capitalize">{title}</h1>
      <div>
        {experiences?.map((exp) => {
          return (
            <div key={exp.key} className="mt-4">
              {/* Title */}
              <h2 className={`text-2xl`}>{getTitle(exp)}</h2>

              {/* Description */}
              {size !== "sm" && (
                <p className={`text-base mt-1 hidden lg:block`}>
                  {getDescription(exp)}
                </p>
              )}
              <p className="text-base mt-1 lg:hidden">{exp.briefDescription}</p>

              {/* Icons */}
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
