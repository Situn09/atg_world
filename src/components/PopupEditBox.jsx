import React, { useEffect } from "react";

const PopupEditBox = ({ coordinate }) => {
  console.log(coordinate);
  return (
    <div
      style={{ ...coordinate }}
      className={`fixed  px-[12px] bg-white shadow-lg z-10`}
    >
      <div className="py-[7px]">Edit</div>
      <div className="py-[7px]">Report</div>
      <div className="py-[7px]">Option 3</div>
    </div>
  );
};

export default PopupEditBox;
