"use client";

import { socials, items } from "@/app/lib/constants";
import { Avatar, Dropdown } from "antd";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { DarkModeToggle } from "../dark-mode-toggle/DarkModeToggle";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [menu, setMenu] = useState<string>("1");
  const t = useTranslations("NavBar");
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/about") setMenu("2");
    else if (pathname === "/experience") setMenu("3");
    else setMenu("1");
  }, []);

  const handleMenuChange = (item: any) => {
    setMenu(item);
  };

  return (
    <div className="fixed w-full h-20 z-10 flex items-center justify-between pl-5 pr-5 bg-bg-color dark:bg-dark-bg-color">
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
            style: { color: "red" },
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
