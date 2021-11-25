import React from "react";
import styles from "./Button.module.css";

const Button = ({ onClick, name, disabled }) => (
  <div className={styles.buttonWrapper}>
    <button
      type="button"
      onClick={onClick}
      className={styles.Button}
      disabled={disabled}
    >
      {name}
    </button>
  </div>
);

export default Button;
