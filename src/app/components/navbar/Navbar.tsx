import { items } from "@/app/utils/constants";
import { DarkModeToggle } from "../dark-mode-toggle/DarkModeToggle";
import { Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const Navbar = () => {
  return (
    <div className="fixed top-6 right-6 z-10 flex gap-3 items-center">
      <DarkModeToggle />
      <Dropdown menu={{ items }} placement="bottom">
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </div>
  );
};
