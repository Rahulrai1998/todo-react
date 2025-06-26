import React from "react";
import styles from "./Index.module.css";

const Clock = () => {
  const date = new Date();
  return (
    <div>
      <h1 className={styles.heading}>{date?.toLocaleString()}</h1>
    </div>
  );
};

export default Clock;
