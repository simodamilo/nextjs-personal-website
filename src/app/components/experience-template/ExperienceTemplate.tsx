import { ReactOriginal } from "devicons-react";

interface ExperienceTemplateProps {
  title?: string;
}

const experiences = [
  {
    title: "React Web App",
    description: "Lorem ipsu",
    icons: [],
  },
  {
    title: "JSP Pages",
    description: "Lorem ipsu",
    icons: [],
  },
];

export const ExperienceTemplate = ({ title }: ExperienceTemplateProps) => {
  return (
    <div className="text-secondary-color dark:text-dark-secondary-color">
      <h1 className="m-8 text-4xl font-bold capitalize">{title}</h1>
      {experiences.map((exp) => {
        return (
          <div className="m-8 text-2xl">
            <h2>{exp.title}</h2>
            <ReactOriginal size="50" />
          </div>
        );
      })}
    </div>
  );
};
