"use client";

import { socials, items } from "@/app/lib/constants";
import {
  LinkedinFilled,
  GithubOutlined,
  MediumOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Space } from "antd";

export const Navbar = () => {
  return (
    <div className="fixed w-full h-20 z-10 border-b-2 flex items-center justify-between pl-5 pr-5 bg-white">
      <img
        width={40}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div className="flex gap-4">
        {socials.map((item) => {
          return (
            <a key={item.name} href={item.link} className="p-0" target="_blank">
              {item.icon}
            </a>
          );
        })}
        <Dropdown menu={{ items }} className="w-7 h-7">
          <a onClick={(e) => e.preventDefault()}>
            <Avatar
              src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
              className="w-7 h-7 border-gray-300"
            />
          </a>
        </Dropdown>
      </div>
    </div>
  );
};
