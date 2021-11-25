import React from "react";
import { Link } from "react-router-dom";
import styles from "./BooksGalleryItem.module.css";

const BooksGalleryItem = ({ id, authors, title, image, location }) => {
  return (
    <li className={styles.booksGalleryItem}>
      <Link
        to={{
          pathname: `${id}`,
          state: { from: location },
        }}
      >
        <img
          src={
            image
              ? `${image}`
              : "https://nnpbeta.wustl.edu/img/bookCovers/genericBookCover.jpg"
          }
          alt={title}
          className={styles.bookImage}
        />
        <h2 className={styles.bookTitle}>{title}</h2>
        <span className={styles.bookAuthor}>{authors}</span>
      </Link>
    </li>
  );
};

export default BooksGalleryItem;
