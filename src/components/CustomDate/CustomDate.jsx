import React from "react";

const CustomDate = () => {
  const today = new Date(); // 현재 날짜 불러오기

  const formattedDate = `${today.getFullYear()}${
    today.getMonth() + 1 < 10 ? 0 : ""
  }${today.getMonth() + 1}${today.getDate() < 0 ? 0 : ""}${
    today.getDate() < 10 ? 0 : ""
  }${today.getDate()}`;
  return formattedDate;
};

export default CustomDate;
