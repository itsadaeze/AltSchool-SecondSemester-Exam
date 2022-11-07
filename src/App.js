import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AllRepos from "./pages/AllRepos";
import SingleRepo from "./pages/SingleRepo";
import Paginate from "./components/Pagination";
import Error from "./pages/Error";
import ErrorBoundary from "./ErrorBoundary";
import ErrorComponent from "./pages/ErrorComponent";

const url = "https://api.github.com/users/itsadaeze/repos";

export const AppContext = React.createContext();

function App() {
  const [loading, setLoading] = useState(true);
  const [getRepos, setGetRepos] = useState([]);
  const [page, setPage] = useState(0);
  const [repos, setRepos] = useState([]);

  // FETCH FUNCTION
  const getAllRepos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const results = data;
    // console.log(results);

    setGetRepos(Paginate(results));
    setLoading(false);
  };
  // console.log(getRepos);

  useEffect(() => {
    getAllRepos();
    if (loading) return;
    setRepos(getRepos[page]);
  }, [loading, page]);

  console.log(repos);

  // HELPER FUNCTION
  const pageHandler = (index) => {
    setPage(index);
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > getRepos.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = getRepos.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <ErrorBoundary>
      <AppContext.Provider
        value={{
          loading,
          getRepos,
          repos,
          nextPage,
          prevPage,
          pageHandler,
          page,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Nested Route */}
            <Route path="/repos">
              <Route index element={<AllRepos />} />
              <Route path="/repos/:Id" element={<SingleRepo />} />
            </Route>

            {/* Error Page */}
            <Route path="*" element={<Error />} />
            <Route path="error" element={<ErrorComponent />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </ErrorBoundary>
  );
}

export default App;