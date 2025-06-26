import React from "react";

const Clock = () => {
  const date = new Date();
  return (
    <div>
      <h1>{date?.toLocaleString()}</h1>
    </div>
  );
};

export default Clock;
