import { socials } from "@/app/utils/lib/constants";
import { DarkModeToggle } from "../dark-mode-toggle/DarkModeToggle";

export const Navbar = () => {
  return (
    <div className="fixed w-full h-20 z-10 flex items-center justify-end pl-5 pr-5">
      <div className="flex gap-4">
        <DarkModeToggle />
        {socials.map((item) => {
          return (
            <a key={item.name} href={item.link} className="p-0" target="_blank">
              {item.icon}
            </a>
          );
        })}
      </div>
    </div>
  );
};
