import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Container from "./container/Container";
import Form from "./container/form/Form";
import MyLoader from "./myLoader/MyLoader";

const HomePage = lazy(() => import("../views/HomePage"));
const BooksPage = lazy(() => import("../views/MoviesPage"));

const App = () => {
  return (
    <Container>
      <Form />
      <Suspense fallback={<MyLoader />}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/volumes/:volumeId" component={BooksPage} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;
