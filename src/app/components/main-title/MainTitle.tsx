"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const text = "Hello, World!";

const MainTitle = () => {
  const t = useTranslations("homepage");

  return (
    <div className="text-4xl font-black font-mono text-primary-color text-left">
      {t("hello-world")
        .split("")
        .map((el, i) => (
          <motion.span
            initial={{ visibility: "hidden" }}
            animate={{ visibility: "visible" }}
            transition={{
              duration: 0.005,
              delay: i / 400 + i / 10,
            }}
            key={i}
          >
            {el === " " ? "\xa0" : el}
          </motion.span>
        ))}
    </div>
  );
};

export default MainTitle;
