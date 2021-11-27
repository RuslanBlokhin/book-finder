import React from "react";
import { useSelector } from "react-redux";
import { getBooksSelector } from "../../redux/books/books-selectors";
import styles from "./BooksGallery.module.css";
import BooksGalleryItem from "./booksGalleryItem/BooksGalleryItem";

const BooksGallery = () => {
  const books = useSelector(getBooksSelector);
  console.log(books);
  return (
    <ul className={styles.booksGallery}>
      {books.map(({ id, volumeInfo }) => (
        <BooksGalleryItem
          key={id}
          image={volumeInfo.imageLinks.thumbnail}
          title={volumeInfo.title}
          authors={volumeInfo.authors}
          id={id}
        />
      ))}
    </ul>
  );
};

export default BooksGallery;
