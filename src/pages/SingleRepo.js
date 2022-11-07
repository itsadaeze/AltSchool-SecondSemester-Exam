import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loading from "../components/Loading";
import "./SingleRepo.css";
import "animate.css";
import { AppContext } from "../App";

// Icons
import { TbGitFork } from "react-icons/tb";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { TiArrowBackOutline } from "react-icons/ti";

const SingleRepo = () => {
  const { loading, repos } = useContext(AppContext);
  const [star, setStar] = useState(false);
  const { Id } = useParams();

  const starHandler = () => {
    setStar(!star);
  };
  let result = repos.find((val) => val.id === +Id);

  const { name, html_url } = result;
  const { avatar_url, login } = result.owner;

  // While waiting for the API to return, do this
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main className="animate__animated animate__bounceInDow">
      <section className="singlerepo flex section">
        <div className="section__header">
          <h3>Repository</h3>
          <div className="underline"></div>
        </div>
        <article className="singlerepo__container container flex">
          <div className="singlerepo__container--contents">
            <div className="singlerepo__header">
              <a href="https://github.com/itsadaeze/" target="blank">
                <div className="header-right flex">
                  <img
                    src={avatar_url}
                    alt="avatar"
                    className="singlerepo__image"
                  />
                  <span>{login}</span>
                </div>
              </a>

              <div className="header-left">
                <span className="flex">
                  <TbGitFork />
                  Fork
                </span>
                <span className="flex star" onClick={starHandler}>
                  {!star ? <AiOutlineStar /> : <AiFillStar />}
                  Star
                </span>
              </div>
            </div>

            <div className="singlerepo__body flex">
              <h3>{name}</h3>
              <p>
                This is a project built by Ugwu Adaeze.
                A fast rising Tech Girl...<br/>
                I LOVE TECH
              </p>
              <button type="button" className="btn">
                <a href={html_url} target="blank">
                  Check out
                </a>
              </button>
            </div>
          </div>
        </article>

        <button type="button" className="btn flex">
          {
            <Link to="/repos" className="flex" style={{ gap: " 0.5rem" }}>
              <span>
                <TiArrowBackOutline />
              </span>
              Back
            </Link>
          }
        </button>
      </section>
    </main>
  );
};

export default SingleRepo;