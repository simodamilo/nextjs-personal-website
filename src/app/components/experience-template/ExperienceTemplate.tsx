import { ExperienceTemplateProps } from "@/app/models/experience.model";

export const ExperienceTemplate = ({
  title,
  experiences,
  size,
}: ExperienceTemplateProps) => {
  return (
    <div className="text-secondary-color dark:text-dark-secondary-color">
      <h1 className="m-8 text-4xl font-bold capitalize">{title}</h1>
      {experiences?.map((exp) => {
        return (
          <div className="m-8 text-2xl">
            <h2>{exp.title}</h2>
            <p>{exp.description}</p>
            <div
              className={`grid max-w-sm ${
                size === "sm" ? "grid-cols-4" : "grid-cols-8"
              } gap-3`}
            >
              {exp.icons?.map((icon) => {
                return icon;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
