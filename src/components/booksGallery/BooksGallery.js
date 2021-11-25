import React from "react";
import styles from "./BooksGallery.module.css";
import BooksGalleryItem from "./booksGalleryItem/BooksGalleryItem";

const BooksGallery = ({ books }) => {
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
