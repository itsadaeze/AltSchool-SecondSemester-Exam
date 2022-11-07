import React, { useContext } from "react";
import Loading from "../components/Loading";

import { Link } from "react-router-dom";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import { AppContext } from "../App";
import "animate.css";
import "./AllRepos.css";

const AllRepos = () => {
  const { loading, getRepos, repos, nextPage, prevPage, pageHandler, page } =
    useContext(AppContext);

  // While waiting for the API to return, do this
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main className="animate__animated animate__bounceIn">
      <section className="repos section flex">
        <div className="section__header">
          <h3>All Repositories</h3>
          <div className="underline"></div>
        </div>

        <article className="repos__container container">
          {repos.map((repo) => {
            const { id, name } = repo;
            console.log(id);
            // console.log(<Link to={`/repos/${id}`}>Check Repo</Link>);
            return (
              <div className="repos__container--contents flex " key={id}>
                
                <h4 className="repos__title">{name}</h4>
                <p className="repos__desc">
                  You can add webfonts, meta tags, or analytics to this file.
                  The build step will place the bundled scripts into the file.
                </p>
                <button type="button" className="repo-btn">
                  <Link to={`/repos/${id}`}>Check Repo</Link>
                </button>
              </div>
            );
          })}
        </article>

        {!loading && (
          <div className="pagination__btn">
            <button className="prev-btn" onClick={prevPage}>
              <TbPlayerTrackPrev />
            </button>
            {getRepos.map((_, index) => {
              return (
                <button
                  className={`${
                    index === page ? "active__page-btn" : "page-btn "
                  }`}
                  key={index}
                  onClick={() => pageHandler(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              <TbPlayerTrackNext />
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default AllRepos;