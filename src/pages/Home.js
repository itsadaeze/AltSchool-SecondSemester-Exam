import React from "react";

import Me from "../components/images/my-img.jpg";
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
            My journey in tech is on of the best decision have made so far. I am a software Engineer, who loves to code. I'm open  to learn, and work with others. I'm looking forward to work with people and impact the world via tech.
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
            
            <img src={Me} alt="Ugwu Adaeze" className="my-imagee" />
            
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;