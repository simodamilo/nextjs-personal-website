import { MenuProps } from "antd";
import { Social } from "../models/social.model";
import {
  LinkedinFilled,
  GithubOutlined,
  MediumOutlined,
  HomeOutlined,
  InfoCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import Link from "next/link";

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

export const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex items-center w-[calc(100vw_-_70px)] md:w-72 h-8">
        <Link href="/homepage" className="flex items-center gap-4 w-full">
          <HomeOutlined className="text-xl" />
          <p className="text-base font-semibold">Homepage</p>
        </Link>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="flex items-center w-[calc(100vw_-_70px)] md:w-72 h-8">
        <Link href="/about" className="flex items-center gap-4 w-full">
          <InfoCircleOutlined className="text-xl" />{" "}
          <p className="text-base font-semibold">About me</p>
        </Link>
      </div>
    ),
  },
  {
    key: "3",
    label: (
      <div className="flex items-center w-[calc(100vw_-_70px)] md:w-72 h-8">
        <Link href="/experience" className="flex items-center gap-4 w-full">
          <StarOutlined className="text-xl" />{" "}
          <p className="text-base font-semibold">Experience</p>
        </Link>
      </div>
    ),
  },
];
