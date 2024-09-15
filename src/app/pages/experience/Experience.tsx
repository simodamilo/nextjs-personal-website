"use client";

import { ExperienceTemplate } from "@/app/components/experience-template/ExperienceTemplate";
import { workExperiences } from "@/app/utils/constants";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const t = useTranslations("experience");
  const [focusElement, setFocusElement] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [isContentVisible, setIsContentVisible] = useState<boolean>(true);
  const workingDiv = useRef<any>(null);
  const personalDiv = useRef<any>(null);
  const accademicDiv = useRef<any>(null);

  const focusElementStateRef = useRef(0);
  focusElementStateRef.current = focusElement;
  const widthStateRef = useRef(0);
  widthStateRef.current = width;

  /* Get the window width */
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  /* Get the focused element */
  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (workingDiv.current?.contains(event.target)) {
        setContentVisibility(1);
      } else if (personalDiv.current?.contains(event.target)) {
        setContentVisibility(2);
      } else if (accademicDiv.current?.contains(event.target)) {
        setContentVisibility(3);
      } else {
        setContentVisibility(0);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => window.removeEventListener("mousedown", handleOutSideClick);
  }, []);

  const setContentVisibility = (nextFocusElement: number) => {
    if (
      focusElementStateRef.current !== nextFocusElement &&
      widthStateRef.current > 1024
    ) {
      setIsContentVisible(false);
      setTimeout(() => {
        setIsContentVisible(true);
      }, 100);
      setFocusElement(nextFocusElement);
    }
  };

  /* Handle div width */
  const handleWidth = (divNo: number) => {
    return focusElement === 0
      ? "lg:w-[32%]"
      : focusElement === divNo
      ? "lg:w-[64%]"
      : "lg:w-[16%]";
  };

  /* Handle div size */
  const handleSize = (divNo: number) => {
    if (width > 1024)
      return focusElement === 0 ? "md" : focusElement === divNo ? "lg" : "sm";
  };

  return (
    <div className="flex flex-col justify-between lg:h-full pt-40 pb-40 ml-6 mr-6 lg:flex-row lg:ml-20 lg:mr-20">
      <div
        ref={workingDiv}
        className={`rounded lg:cursor-pointer shadow-[0px_15px_20px_rgba(0,0,0,0.50)] dark:shadow-[0px_15px_20px_rgba(255,255,255,0.50)] mb-4 lg:mb-0 duration-500 w-full ${handleWidth(
          1
        )}`}
      >
        <ExperienceTemplate
          title={t("work-title")}
          experiences={isContentVisible ? workExperiences : []}
          size={handleSize(1)}
        />
      </div>
      <div
        ref={personalDiv}
        className={`rounded lg:cursor-pointer shadow-[0px_15px_20px_rgba(0,0,0,0.50)] dark:shadow-[0px_15px_20px_rgba(255,255,255,0.50)] mb-4 lg:mb-0 duration-500 w-full ${handleWidth(
          2
        )}`}
      >
        <ExperienceTemplate
          title={t("personal-title")}
          experiences={isContentVisible ? workExperiences : []}
          size={handleSize(2)}
        />
      </div>
      <div
        ref={accademicDiv}
        className={`rounded lg:cursor-pointer shadow-[0px_15px_20px_rgba(0,0,0,0.50)] dark:shadow-[0px_15px_20px_rgba(255,255,255,0.50)] mb-4 lg:mb-0 duration-500 w-full ${handleWidth(
          3
        )}`}
      >
        <ExperienceTemplate title={t("academic-title")} />
      </div>
    </div>
  );
}
