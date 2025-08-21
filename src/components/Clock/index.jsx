import React, { useEffect, useState } from "react";
import styles from "./Index.module.css";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1 className={styles.heading}>{date?.toLocaleString()}</h1>
    </div>
  );
};

export default Clock;
