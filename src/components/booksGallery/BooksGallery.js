import React from "react";
import { useSelector } from "react-redux";
import {
  getBooksSelector,
  getCategorySelector,
  getTotalBooks,
} from "../../redux/books/books-selectors";
import styles from "./BooksGallery.module.css";
import BooksGalleryItem from "./booksGalleryItem/BooksGalleryItem";

const BooksGallery = () => {
  const books = useSelector(getBooksSelector);
  const category = useSelector(getCategorySelector);
  const totalBooks = useSelector(getTotalBooks);

  function filterBooks(books) {
    if (category === "all") {
      return books;
    } else {
      const theCategory = books.filter((item) => item.volumeInfo.categories);
      const array = theCategory.filter((item) =>
        item.volumeInfo.categories.includes(category)
      );
      return array;
    }
  }

  return (
    <div className={styles.wrapper}>
      {books[0] && (
        <p className={styles.foundResult}>Found {totalBooks} results</p>
      )}
      <ul className={styles.booksGallery}>
        {filterBooks(books).map((item, index) => (
          <BooksGalleryItem
            key={index}
            image={item.volumeInfo.imageLinks?.thumbnail}
            title={item.volumeInfo.title}
            authors={item.volumeInfo.authors}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default BooksGallery;
