import { Skeleton } from "antd";
import React from "react";

const SkeltonComponent = () => {
  return Array.from({ length: 12 }).map((_, idx) => (
    <div key={idx}>
      <Skeleton.Image active className="!w-full !h-[280px]" />
      <Skeleton.Input />
    </div>
  ));
};

export default SkeltonComponent;
