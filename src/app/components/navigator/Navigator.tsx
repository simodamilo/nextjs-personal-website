"use client";

import { Col } from "antd";
import { useState } from "react";

export default function Navigator() {
  const [page, setPage] = useState<number>(1);

  const style = (receivedPage: number) => {
    return `duration-500 w-2 h-20 hover:h-24 rounded-2xl border-2 border-primary-color shadow-[0_10px_20px_rgba(138,_43,_226,_0.7)] ${
      page === receivedPage && "bg-primary-color"
    }`;
  };

  const handleClick = (receivedPage: number, id: string) => {
    setPage(receivedPage);
    window.scrollTo({
      top: document.getElementById(id)!.offsetTop - 60,
      behavior: "smooth",
    });
  };

  return (
    <Col
      span={1}
      className="hidden md:flex flex-col items-center justify-center h-dvh"
    >
      <div className="fixed flex flex-col gap-4 items-center">
        <a onClick={() => handleClick(1, "part-1")}>
          <div className={style(1)}></div>
        </a>
        <a onClick={() => handleClick(2, "part-2")}>
          <div className={style(2)}></div>
        </a>
        <a onClick={() => handleClick(3, "part-3")}>
          <div className={style(3)}></div>
        </a>
      </div>
    </Col>
  );
}
