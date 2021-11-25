import React from "react";
import Loader from "react-loader-spinner";
import styles from "./MyLoaderWrapper.module.css";

const MyLoader = () => (
  <div className={styles.loaderWrapper}>
    <Loader type="Circles" color="#3f51b5" height={50} width={50} />
  </div>
);

export default MyLoader;
