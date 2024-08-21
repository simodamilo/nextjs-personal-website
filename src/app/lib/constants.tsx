import { MenuProps } from "antd";
import { Social } from "../models/social.model";
import {
  LinkedinFilled,
  GithubOutlined,
  MediumOutlined,
  SmileOutlined,
} from "@ant-design/icons";

export const socials: Social[] = [
  {
    name: "Medium",
    link: "https://medium.com/@simodamilo",
    icon: <MediumOutlined style={{ fontSize: "28px" }} />,
  },
  {
    name: "GitHub",
    link: "https://github.com/simodamilo",
    icon: <GithubOutlined style={{ fontSize: "28px" }} />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/simone-d%E2%80%99amilo-425521180",
    icon: <LinkedinFilled style={{ fontSize: "28px" }} />,
  },
];

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: "a danger item",
  },
];
