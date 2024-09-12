import { MenuProps } from "antd";
import {
  LinkedinFilled,
  GithubOutlined,
  MediumOutlined,
} from "@ant-design/icons";
import {
  ReactOriginal,
  TypescriptOriginal,
  SassOriginal,
  ReduxOriginal,
  JenkinsOriginal,
  SonarqubeOriginal,
  SpringOriginal,
  GitOriginal,
} from "devicons-react";

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a href="https://medium.com/@simodamilo" className="p-0" target="_blank">
        <MediumOutlined className="text-[28px] text-secondary-color dark:text-dark-secondary-color" />
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a href="https://github.com/simodamilo" className="p-0" target="_blank">
        <GithubOutlined className="text-[28px] text-secondary-color dark:text-dark-secondary-color" />
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        href="https://www.linkedin.com/in/simone-d%E2%80%99amilo-425521180"
        className="p-0"
        target="_blank"
      >
        <LinkedinFilled className="text-[28px] text-secondary-color dark:text-dark-secondary-color" />
      </a>
    ),
  },
];

export const skills: string[] = [
  "React",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
];

export const workExperiences = [
  {
    title: "React Web App for Fashion client",
    description: "Lorem ipsu",
    icons: [
      <ReactOriginal size="24" />,
      <TypescriptOriginal size="24" />,
      <SassOriginal size="24" />,
      <ReduxOriginal size="24" />,
      <JenkinsOriginal size="24" />,
      <SonarqubeOriginal size="24" />,
      <SpringOriginal size="24" />,
      <GitOriginal size="24" />,
    ],
  },
  {
    title: "JSP Pages",
    description: "Lorem ipsu",
    icons: [],
  },
  {
    title: "React Web App for Financial client",
    description: "Lorem ipsu",
    icons: [],
  },
];
