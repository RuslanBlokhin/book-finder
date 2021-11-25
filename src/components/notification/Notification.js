import React from "react";
import styles from "./Notification.module.css";

const Notification = ({ message }) => {
  return (
    <div className={styles.notificationWrapper}>
      <p className={styles.notification}>{message}</p>
    </div>
  );
};

export default Notification;
