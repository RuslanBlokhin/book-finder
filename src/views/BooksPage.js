import React, { useState, useLayoutEffect } from "react";
import api from "../services/booksApi";

import { useNavigate } from "react-router-dom";
import BooksGallery from "../components/booksGallery/BooksGallery";
import Notification from "../components/notification/Notification";
import MyLoader from "../components/myLoader/MyLoader";
import Button from "../components/button/Button";

const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [booksOnPage, setBooksOnPage] = useState(30);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState("");
  const [sortingValue, setSortingValue] = useState("relevance");

  const navigate = useNavigate();
  console.log(navigate);

  async function getQueryBooks() {
    try {
      setLoader(true);
      const books = await api.getByQueryBooks(query, booksOnPage, sortingValue);
      addBooksToState(books, booksOnPage);
      // props.history.push()
    } catch (err) {
      setError(err);
      setLoader(false);
    }
  }

  const handleOnButtonClick = (booksOnPage) => () => {
    setLoader(true);
    api
      .getByQueryBooks(query, booksOnPage, sortingValue)
      .then((books) => addBooksToState(books, booksOnPage))
      // .then(() => {
      //   this.props.history.push({ search: `query=${query}&page=${page}` });
      .catch((error) => setError(error))
      .finally(() => {
        setLoader(false);
      });
  };

  function addBooksToState(books, booksOnPage) {
    setBooks(books);
    setBooksOnPage(booksOnPage);
    setError("");
    setLoader(false);
  }

  useLayoutEffect(() => {
    getQueryBooks();
  }, [query]);

  const showButtons = !loader && books[0] && true;

  return (
    <>
      <BooksGallery books={books} />
      {error && <Notification message="Something wrong :(" />}
      {loader && <MyLoader />}
      {showButtons && (
        <Button
          type={"button"}
          onClick={handleOnButtonClick(booksOnPage + 30)}
          name={"Load More"}
          // disabled={disabled}
        />
      )}
    </>
  );
};

export default BooksPage;
