import React from "react";
import { useSelector } from "react-redux";
import {
  getBooksSelector,
  getCategorySelector,
} from "../../redux/books/books-selectors";
import styles from "./BooksGallery.module.css";
import BooksGalleryItem from "./booksGalleryItem/BooksGalleryItem";

const BooksGallery = () => {
  const books = useSelector(getBooksSelector);
  const category = useSelector(getCategorySelector);
  console.log(books);
  console.log(category);

  // const filter = books.filter((item) =>
  //   item.volumeInfo.categories.includes(category)
  // );
  // console.log(filter);

  function filterBooks(books) {
    if (category === "all") {
      return books;
    } else {
      const theCategory = books.filter((item) => item.volumeInfo.categories);
      const array = theCategory.filter((item) =>
        item.volumeInfo.categories.includes(category)
      );
      console.log(array);
      return array;
    }
  }

  // console.log(books);
  return (
    <ul className={styles.booksGallery}>
      {filterBooks(books).map(({ id, volumeInfo }) => (
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
