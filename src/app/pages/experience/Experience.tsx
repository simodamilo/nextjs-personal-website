"use client";

import { ExperienceTemplate } from "@/app/components/experience-template/ExperienceTemplate";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const t = useTranslations("experience");
  const [focusElement, setFocusElement] = useState<number>(0);
  const workingDiv = useRef<any>(null);
  const personalDiv = useRef<any>(null);
  const accademicDiv = useRef<any>(null);

  /* Get the focused element */
  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (workingDiv.current?.contains(event.target)) setFocusElement(1);
      else if (personalDiv.current?.contains(event.target)) setFocusElement(2);
      else if (accademicDiv.current?.contains(event.target)) setFocusElement(3);
      else setFocusElement(0);
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => window.removeEventListener("mousedown", handleOutSideClick);
  }, []);

  /* Handle div width */
  const handleWidth = (divNo: number) => {
    return focusElement === 0
      ? "w-[32%]"
      : focusElement === divNo
      ? "w-full md:w-[64%]"
      : "w-[16%]";
  };

  return (
    <div className="flex flex-col justify-between h-full ml-6 mr-6 md:pt-40 md:pb-40 md:flex-row md:ml-20 md:mr-20">
      <div
        ref={workingDiv}
        className={`border h-full mb-4 md:mb-0 duration-500 ${handleWidth(1)}`}
      >
        <ExperienceTemplate title="work" />
      </div>
      <div
        ref={personalDiv}
        className={`border h-full mb-4 md:mb-0 duration-500 ${handleWidth(2)}`}
      >
        <ExperienceTemplate title="personal" />
      </div>
      <div
        ref={accademicDiv}
        className={`border h-full mb-4 md:mb-0 duration-500 ${handleWidth(3)}`}
      >
        <ExperienceTemplate title="academic" />
      </div>
    </div>
  );
}
