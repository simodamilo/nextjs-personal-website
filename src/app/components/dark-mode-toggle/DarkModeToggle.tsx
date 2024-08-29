"use client";

import { Switch } from "antd";
import React, { useEffect, useState } from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState<boolean>(true);

  useEffect(() => {
    setIsDark(
      localStorage.getItem("isDark")
        ? localStorage.getItem("isDark") === "true"
          ? true
          : false
        : window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? true
        : false
    );

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        setIsDark(event.matches ? true : false);
      });
  }, []);

  useEffect(() => {
    isDark
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [isDark]);

  const handleChange = () => {
    if (isDark) {
      localStorage.setItem("isDark", "false");
      setIsDark(false);
    } else {
      localStorage.setItem("isDark", "true");
      setIsDark(true);
    }
  };

  return (
    <div>
      <Switch
        className="scale-125 mr-4 mb-1 bg-primary-color dark:bg-primary-color hover:!bg-primary-color"
        checkedChildren={
          <SunOutlined className="-translate-y-px -translate-x-px text-slate-50" />
        }
        unCheckedChildren={
          <MoonOutlined className="-translate-y-px translate-x-px text-slate-50" />
        }
        checked={isDark}
        onChange={handleChange}
      />
    </div>
  );
};
