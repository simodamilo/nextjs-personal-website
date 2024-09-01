"use client";

import MainTitle from "@/app/components/main-title/MainTitle";
import { skills } from "@/app/utils/constants";
import { useTranslations } from "next-intl";

export default function Homepage() {
  const t = useTranslations("homepage");

  return (
    <div className="h-full flex flex-col justify-center pl-6 md:ml-20">
      <MainTitle />
      <h2 className="text-2xl text-secondary-color text-left">
        {t("intro-copy")}
      </h2>
      <p className="text-base text-primary-color text-left font-bold mt-4">
        {t("software-eng")}
      </p>
      <div className="text-left">
        {skills.map((skill) => (
          <div
            className="inline-block bg-primary-color text-slate-50 rounded-[21px] shadow-[0_15px_15px_rgba(0,0,0,0.36)] text-xs py-2.5 px-3.5 mr-1.5 mt-3 text-center"
            key={skill}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
