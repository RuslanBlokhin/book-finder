import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <>
      <div className={styles.formWrapper}>
        <h1>Search for Books</h1>
        <form className={styles.form}>
          <input type="text" />
          <div className={styles.selectWrapper}>
            <select defaultValue={"All"}>
              <option value="All">All</option>
              <option value="ART">ART</option>
              <option value="biography">biography</option>
              <option value="computers">computers</option>
              <option value="history">history</option>
              <option value="medical">medical</option>
              <option value="poetry">poetry</option>
            </select>
            <select defaultValue={"relevance"}>
              <option value="relevance">relevance</option>
              <option value="newest">newest</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
