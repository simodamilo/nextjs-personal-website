"use client";

import MainTitle from "@/app/components/main-title/MainTitle";
import { useTranslations } from "next-intl";

export default function Homepage() {
  const t = useTranslations("homepage");

  return (
    <div className="h-full flex flex-col justify-center pl-6 md:ml-20">
      <MainTitle />
      <h2 className="text-2xl text-secondary-color text-left">
        {t("intro-copy")}
      </h2>
      {/*<p className={style.p1}>{t("homepage.software-eng")}</p>
      <div className={style.skillContainer}>
        {skills.map((skill) => (
          <div className={style.skill} key={skill}>
            {skill}
          </div>
        ))}
      </div>*/}
    </div>
  );
}
