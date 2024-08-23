"use client";

import { socials, items } from "@/app/lib/constants";
import { Avatar, Dropdown } from "antd";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { DarkModeToggle } from "../dark-mode-toggle/DarkModeToggle";

export const Navbar = () => {
  const [menu, setMenu] = useState<string>("1");
  const t = useTranslations("NavBar");

  const handleMenuChange = (item: any) => {
    setMenu(item);
  };

  return (
    <div className="fixed w-full h-20 z-10 border-b-2 flex items-center justify-between pl-5 pr-5 bg-white dark:bg-slate-800">
      <img
        width={40}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
      <div className="flex gap-4">
        <DarkModeToggle />
        {socials.map((item) => {
          return (
            <a key={item.name} href={item.link} className="p-0" target="_blank">
              {item.icon}
            </a>
          );
        })}
        <Dropdown
          menu={{
            items,
            selectable: true,
            defaultSelectedKeys: [menu],
            onSelect: handleMenuChange,
          }}
          className="w-7 h-7"
        >
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
