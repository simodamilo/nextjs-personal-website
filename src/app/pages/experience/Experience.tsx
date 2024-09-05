"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function Experience() {
  const t = useTranslations("homepage");
  const [focusElement, setFocusElement] = useState<number>(0);
  const div1 = useRef<any>(null);
  const div2 = useRef<any>(null);
  const div3 = useRef<any>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (div1.current?.contains(event.target)) {
        setFocusElement(1);
      } else if (div2.current?.contains(event.target)) {
        setFocusElement(2);
      } else if (div3.current?.contains(event.target)) {
        setFocusElement(3);
      } else {
        setFocusElement(0);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, []);

  return (
    <div className="h-full pl-6 pr-6 md:ml-20 md:mr-20 grid grid-cols-1 md:grid-cols-6 gap-3">
      <div
        ref={div1}
        className={`border md:mt-20 md:mb-20 ${
          focusElement === 0
            ? "col-span-2"
            : focusElement === 1
            ? "col-span-4"
            : "col-span-1"
        }`}
      >
        Test 1
      </div>
      <div
        ref={div2}
        className={`border md:mt-20 md:mb-20 ${
          focusElement === 0
            ? "col-span-2"
            : focusElement === 2
            ? "col-span-4"
            : "col-span-1"
        }`}
      >
        Test 2
      </div>
      <div
        ref={div3}
        className={`border md:mt-20 md:mb-20 ${
          focusElement === 0
            ? "col-span-2"
            : focusElement === 3
            ? "col-span-4"
            : "col-span-1"
        }`}
      >
        Test 3
      </div>
    </div>
  );
}
