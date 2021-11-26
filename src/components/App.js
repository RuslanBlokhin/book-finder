import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Container from "./container/Container";
import Form from "../components/form/Form";
import MyLoader from "./myLoader/MyLoader";

const HomePage = lazy(() =>
  import("../views/HomePage" /* webpackChunkName: "home-page" */)
);
// const BooksPage = lazy(() => import("../views/BooksPage"));

const App = () => {
  return (
    <Container>
      <Form />
      <Suspense fallback={<MyLoader />}>
        <Routes>
          <Route index path="/" element={<HomePage />} />
          {/* <Route path="/books" element={<BooksPage />} /> */}
          {/* <Route path=":volumeId" component={<BookDetailPage/> /> */}
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
