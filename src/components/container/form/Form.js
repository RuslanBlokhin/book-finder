import React, { useState } from "react";
import Button from "../../button/Button";
import styles from "./Form.module.css";

const Form = () => {
  const [books, setBooks] = useState([]);
  const [booksOnPage, setBooksOnPage] = useState(30);
  const [error, setError] = useState("");

  const [value, setValue] = useState("all");
  const [sortingValue, setSortingValue] = useState("relevance");
  const [query, setQuery] = useState("");

  const categoryValue = [
    "all",
    "ART",
    "biography",
    "computers",
    "history",
    "medicial",
    "poetry",
  ];

  const options = categoryValue.map((item) => (
    <option value={item} key={item}>
      {item}
    </option>
  ));

  function handleInputChange(event) {
    const { value } = event.target;
    setQuery(value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    setBooks([]);
    setBooksOnPage(30);
    setError("");
    setQuery(query);
    // onSubmit(query);
    // setQuery("");
  }

  return (
    <>
      <div className={styles.formWrapper}>
        <h1>Search for Books</h1>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <div className={styles.inputButtonWrapper}>
            <input
              type="text"
              className={styles.input}
              autoComplete="off"
              autoFocus
              placeholder="Search books"
              onChange={handleInputChange}
              value={query}
            />
            <Button type={"submit"} name={"Go!"} />
          </div>
          <div className={styles.selectWrapper}>
            <select
              defaultValue={"all"}
              onChange={(event) => {
                setValue(event.target.value);
              }}
            >
              {options}
            </select>

            <select
              defaultValue={"relevance"}
              onChange={(event) => {
                setSortingValue(event.target.value);
              }}
            >
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
