import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getLoaderToggle } from "../redux/books/books-actions";
import { getLoader } from "../redux/books/books-selectors";
import api from "../services/booksApi";
import styles from "./BookDetailPage.module.css";
import MyLoader from "../components/myLoader/MyLoader";

const BookDetailPage = () => {
  const [book, setBook] = useState("");
  const [image, setImage] = useState("");
  const location = useLocation();
  const id = location.pathname.slice(1);

  const loader = useSelector(getLoader);
  const dispatch = useDispatch();

  async function getBook() {
    try {
      dispatch(getLoaderToggle(true));
      const response = await api.getBookById(id);
      const book = response.data.volumeInfo;
      const image = response.data.volumeInfo.imageLinks.thumbnail;
      setBook(book);
      setImage(image);
      dispatch(getLoaderToggle(false));
    } catch (error) {
      dispatch(getLoaderToggle(false));
    }
  }

  const { title, description, authors, categories } = book;

  useEffect(() => {
    getBook();
  }, [id]);

  return (
    <>
      {loader && <MyLoader />}
      <div className={styles.wrapper}>
        <div className={styles.bookImg}>
          <img className={styles.image} src={image} alt="BookImage" />
        </div>
        <div className={styles.bookInfo}>
          <p className={styles.categories}>{categories}</p>
          <p className={styles.title}>{title}</p>
          <p className={styles.authors}>{authors}</p>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default BookDetailPage;
