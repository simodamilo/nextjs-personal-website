import { Social } from "../models/social.model";
import {
  LinkedinFilled,
  GithubOutlined,
  MediumOutlined,
} from "@ant-design/icons";

export const socials: Social[] = [
  {
    name: "Medium",
    link: "https://medium.com/@simodamilo",
    icon: (
      <MediumOutlined className="text-[28px] text-secondary-color dark:text-dark-secondary-color" />
    ),
  },
  {
    name: "GitHub",
    link: "https://github.com/simodamilo",
    icon: (
      <GithubOutlined className="text-[28px] text-secondary-color dark:text-dark-secondary-color" />
    ),
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/simone-d%E2%80%99amilo-425521180",
    icon: (
      <LinkedinFilled className="text-[28px] text-secondary-color dark:text-dark-secondary-color" />
    ),
  },
];
