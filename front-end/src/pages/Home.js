import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="home__firstPage">
        <div className="home__textContainer">
          <h1 className="home__header">
            Your Night.
            <br />
            Your Way.
          </h1>
          <div className="home__splashContainer">
            <img
              className="home__splashImage"
              src=""
              alt="Group of people partying"
            />
          </div>
          <Link to={`/sign-up`}>
            <button className="home__startButton">
              <span>Let's get started</span>
            </button>
          </Link>
          <h4 className="home__quote">
            &ldquo;I feel sorry for people that don't drink, because when they
            wake up in the morning, that is the best they're going to feel all
            day.&rdquo; &#8211; Frank Sinatra
          </h4>
        </div>
      </div>
      <div className="home__nextPage">
        <div>
          <h3>Discover new places</h3>
          <p>
            With Night Owl, you can find new hangout spots that match your
            preferred vibes.
          </p>
        </div>
        <div>
          <h3>Learn your own tastes</h3>
          <p>
            Night Owl provides a guide on alcoholic beverages so you can explore
            new drinks to try on your night out!
          </p>
        </div>
        <div>
          <h3>Meet new people</h3>
          <p>
            What's a good night out without some company? Meet likeminded people
            to connect with
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
