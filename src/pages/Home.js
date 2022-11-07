import React from "react";

import robot from "../components/images/robot.jpeg";
import { Link } from "react-router-dom";
import "animate.css";
import "./Home.css";

const Home = () => {
  return (
    <main className="animate__animated animate__fadeIn">
      <section className="home section flex">
        <article className="home__container container flex">
          <div className="home__container--contents">
            <h2>Ugwu Adaeze</h2>
            <p className="home__para">
              I love the Tech World, my pssion from programming has grown wide and deep over the months.
              My Altschool Journey is one the best decision of the have made so made in 2022.
            </p>
            <button type="button" className="btn">
              {<Link to="/repos ">Get Repos</Link>}
            </button>
            <button
              type="button"
              className="btn"
              style={{ marginLeft: "2rem" }}
            >
              {<Link to="/error ">Test Error</Link>}
            </button>
          </div>

          <div className="home__container--image">
            
            <img src={robot} alt="Ugwu Adaeze" />
            
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;