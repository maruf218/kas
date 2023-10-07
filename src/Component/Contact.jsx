import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact-map mt-2">
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6 col-12 order-3 order-lg-1 mt-4 mt-lg-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d9387.442283287373!2d91.84320243621335!3d22.364335602525895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1696424244646!5m2!1sen!2sbd"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-lg-3 col-12 col-sm-6 col-6 order-1 order-lg-2">
            <h4 className="fw-bolder text-dark">Location & Hours</h4>
            <p className="fw-semibold mt-3">
              Sultan's Dine <br /> 11023 JAMAICA AVE <br /> JAMAICA, New York
              11418
            </p>
            <a
              className="text-decoration-none d-block text-dark fw-semibold"
              href="tel:(718) 846-2513"
            >
              (718) 846-2513
            </a>
            <a
              className="text-decoration-none d-block text-dark fw-semibold"
              href="mailto:sultansdineny@gmail.com"
            >
              sultansdineny@gmail.com
            </a>
            <a
              className="text-decoration-none d-block text-dark fw-semibold"
              href="https://www.google.com/maps/@22.3643356,91.8432024,15z?entry=ttu"
            >
              Get directions
            </a>
          </div>
          <div className="col-lg-3 col-12 order-2 col-sm-6 order-lg-3 mt-2 mt-sm-4">
            <span className="fw-semibold">
              Monday 11:00 am - 10:00 pm <br />
              Tuesday 11:00 am - 10:00 pm <br />
              Wednesday 11:00 am - 10:00 pm <br />
              Thursday 11:00 am - 10:00 pm <br />
              Friday 11:00 am - 10:00 pm <br />
              Saturday 10:00 am - 10:00 pm <br />
              Sunday 10:00 am - 10:00 pm <br />
            </span>
          </div>
        </div>
      </div>
      <div className="container-fulid py-2" style={{background : "#269745"}}>
        <p className="text-center m-0 text-light">
          <Link to="/" className="text-decoration-none fw-bold text-light">
            Kasturi{" "}
          </Link>
          © 2023
        </p>
      </div>
    </div>
  );
};

export default Contact;
