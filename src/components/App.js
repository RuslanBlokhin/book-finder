import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import Container from "./container/Container";
import Form from "../components/form/Form";
import MyLoader from "./myLoader/MyLoader";

const HomePage = lazy(() =>
  import("../views/HomePage" /* webpackChunkName: "home-page" */)
);
const BookDetailPage = lazy(() => import("../views/BookDetailPage"));

const App = () => {
  return (
    <Container>
      <Form />
      <Suspense fallback={<MyLoader />}>
        <Routes>
          <Route index path="/" element={<HomePage />} />

          <Route path="/:volumeId" element={<BookDetailPage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
