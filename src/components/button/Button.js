import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, name, type }) => (
  <div className={styles.buttonWrapper}>
    <button type={type} onClick={onClick} className={styles.Button}>
      {name}
    </button>
  </div>
);

export default Button;
