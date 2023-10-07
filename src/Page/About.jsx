import React from "react";
import Nav from "../Component/Nav";
import AfterNav from "../Component/AfterNav";
import Contact from "../Component/Contact";

const About = () => {
  return (
    <>
      <Nav />
      <AfterNav />
      <div className="container">
        <div className="row m-5">
          <div className="col-md-6">
            <h6 className="fw-bolder">Our Story</h6>
            <h2 className="fw-bolder">About us</h2>
            <p>
              After growing up in Sienna, my sister and I decided to bring our
              love of Tuscan flavors to the modern dining mecca of San
              Francisco. We wanted to combine the authentic tastes of home with
              the new forward-thinking food movements of Northern California to
              present a non-traditional, traditional Italian dining experience.
            </p>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default About;
