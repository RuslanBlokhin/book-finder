import React, { useState } from "react";
import Button from "../button/Button";
import styles from "./Form.module.css";
import { useDispatch } from "react-redux";
// import {
//   getQuerySelector,
//   getCategorySelector,
//   getSortingSelector,
// } from "../../redux/books/books-selectors";
import {
  getQuery,
  getCatedory,
  getSorting,
} from "../../redux/books/books-actions";

const Form = () => {
  const [categoryValueState, setCategoryValueState] = useState("all");
  const [sortingValue, setSortingValue] = useState("relevance");
  const [queryValue, setQueryValue] = useState("");

  // const query = useSelector(getQuerySelector);
  // const category = useSelector(getCategorySelector);
  // const sorting = useSelector(getSortingSelector);
  const dispatch = useDispatch();

  const categoryValue = [
    "all",
    "ART",
    "biography",
    "computers",
    "history",
    "medicial",
    "poetry",
  ];

  function handleInputChange(event) {
    const { value } = event.currentTarget;
    setQueryValue(value);
  }

  const options = categoryValue.map((item) => (
    <option value={item} key={item}>
      {item}
    </option>
  ));

  function handleFormSubmit(event) {
    event.preventDefault();
    dispatch(getQuery(queryValue));
    dispatch(getCatedory(categoryValueState));
    dispatch(getSorting(sortingValue));
    // dispatch(getQueryBooks(query, booksOnPage, sorting));
    // dispatch(getQuery(event.target.value));
    // setBooks([]);
    // setBooksOnPage(30);
    // setError("");
    // setQuery(query);
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
              value={queryValue}
            />
            <Button type={"submit"} name={"Go!"} />
          </div>
          <div className={styles.selectWrapper}>
            <div className={styles.textSelectWrapper}>
              <p className={styles.textSelectWrapper}>Categories</p>
              <select
                className={styles.select}
                defaultValue={"all"}
                onChange={(event) => {
                  setCategoryValueState(event.target.value);
                }}
              >
                {options}
              </select>
            </div>
            <div className={styles.textSelectWrapper}>
              <p className={styles.textSelectWrapper}>Sorting by</p>
              <select
                className={styles.select}
                defaultValue={"relevance"}
                onChange={(event) => {
                  setSortingValue(event.target.value);
                }}
              >
                <option value="relevance">relevance</option>
                <option value="newest">newest</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
