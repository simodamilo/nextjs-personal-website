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
  AntdesignOriginal,
  Html5Original,
  JavascriptOriginal,
  ReactrouterOriginal,
} from "devicons-react";
import { Experience } from "../models/experience.model";

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

export const workExperiences: Experience[] = [
  {
    key: 1,
    briefTitle: "React",
    completeTitle: "React Web App",
    briefDescription:
      "Front-end development of a webapp for a company in the financial industry. Developments of some basic features in the back-end with Spring Boot.",
    completeDescription:
      "Front-end development of a webapp for a company in the financial industry. Part of a big international team composed of several tens of developers with multiple integration with external services. Developments of some basic features in the back-end with Spring Boot. Libraries and technologies:",
    icons: [
      {
        key: 1,
        icon: <ReactOriginal key="reactOriginal_1" size="24" />,
        title: "React",
      },
      {
        key: 2,
        icon: <ReduxOriginal key="reduxOriginal_1" size="24" />,
        title: "Redux",
      },
      {
        key: 3,
        icon: <AntdesignOriginal key="antdesignOriginal_1" size="24" />,
        title: "Ant Design",
      },
      {
        key: 4,
        icon: <TypescriptOriginal key="typescriptOriginal_1" size="24" />,
        title: "Typescript",
      },
      {
        key: 5,
        icon: <SassOriginal key="sassOriginal_1" size="24" />,
        title: "Sass",
      },
      {
        key: 6,
        icon: <JenkinsOriginal key="jenkinsOriginal_1" size="24" />,
        title: "Jenkins",
      },
      {
        key: 7,
        icon: <SonarqubeOriginal key="sonarqubeOriginal_1" size="24" />,
        title: "Sonarqube",
      },
      {
        key: 8,
        icon: <SpringOriginal key="springOriginal_1" size="24" />,
        title: "Spring",
      },
      {
        key: 9,
        icon: <GitOriginal key="gitOriginal_1" size="24" />,
        title: "Git",
      },
    ],
  },
  {
    key: 2,
    briefTitle: "SAP",
    completeTitle: "e-Commerce SAP",
    briefDescription: "Front-end development of an e-Commerce with JSP pages.",
    completeDescription:
      "Front-end development of an e-Commerce with JSP pages. The project inclueded the re-styling of an existing e-Commerce by updating the layout structure.",
    icons: [
      {
        key: 20,
        icon: <Html5Original key="html5Original_2" size="24" />,
        title: "HTML5",
      },
      {
        key: 21,
        icon: <SassOriginal key="sassOriginal_2" size="24" />,
        title: "Sass",
      },
      {
        key: 22,
        icon: <JavascriptOriginal key="javascriptOriginal_2" size="24" />,
        title: "Javascript",
      },
      {
        key: 23,
        icon: <GitOriginal key="gitOriginal_1" size="24" />,
        title: "Git",
      },
    ],
  },
  {
    key: 3,
    briefTitle: "React",
    completeTitle: "React Web App",
    briefDescription:
      "Front-end development of a webapp for a company in the fashion industry.",
    completeDescription:
      "Front-end development of a webapp for a company in the fashion industry. Part of a team of 4 front-end developers, we were able to deliver an high quality solution in the estimated time.",
    icons: [
      {
        key: 40,
        icon: <ReduxOriginal key="reduxOriginal_3" size="24" />,
        title: "Redux",
      },
      {
        key: 41,
        icon: <TypescriptOriginal key="typescriptOriginal_3" size="24" />,
        title: "Typescript",
      },
      {
        key: 42,
        icon: <ReactrouterOriginal key="reactrouterOriginal_3" size="24" />,
        title: "React Router",
      },
      {
        key: 43,
        icon: <SassOriginal key="sassOriginal_3" size="24" />,
        title: "Sass",
      },
      {
        key: 44,
        icon: <GitOriginal key="gitOriginal_1" size="24" />,
        title: "Git",
      },
    ],
  },
];
