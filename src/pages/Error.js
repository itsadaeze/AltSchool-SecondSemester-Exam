import React from "react";
import { Link } from "react-router-dom";
import error from "../components/images/error.svg";
import "./Error.css";
import "animate.css";
const Error = () => {
  return (
    <main className="animate__animated animate__bounceIn">
      <section >
        <article className="error__container container">
          <figure className="error__container--image">
            <img src={error} alt="hero" className="error-image" />
          </figure>
          <button type="button" className="btn">
            {<Link to="/">Go home</Link>}
          </button>
        </article>
      </section>
    </main>
  );
};

export default Error;