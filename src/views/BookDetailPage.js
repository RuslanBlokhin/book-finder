import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import api from "../services/booksApi";
import styles from "./BookDetailPage.module.css";
import MyLoader from "../components/myLoader/MyLoader";
import Notification from "../components/notification/Notification";

const BookDetailPage = () => {
  const [book, setBook] = useState("");
  const [image, setImage] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const id = location.pathname.slice(1);

  async function getBook() {
    try {
      setLoader(true);
      const response = await api.getBookById(id);
      const book = response.data.volumeInfo;
      const image = response.data.volumeInfo.imageLinks.thumbnail;
      setBook(book);
      setImage(image);
    } catch (error) {
      setError(error);
      setLoader(false);
    }
  }
  console.log(book);

  const { title, description, authors, categories } = book;

  useEffect(() => {
    getBook();
    setLoader(false);
  }, [id]);

  return (
    <>
      {loader && <MyLoader />}
      {/* {book ? ( */}
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
      {/* // ) : (
      //   <Notification message="Sorry, no data :(, try again" />
      // )} */}
    </>
  );
};

export default BookDetailPage;
