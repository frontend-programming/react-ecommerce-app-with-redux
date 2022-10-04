import React, { useEffect } from "react";
import Products from "../components/Products";

export default function Home(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="hero">
      <div className="card border-0">
        <img src="/assets/slider.jpeg" className="card-img" alt="..." />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <p className="card-text">
              <small>WINTER 2022 COLLECTION</small>
            </p>
            <h5 className="card-title display-3">
              Valentin Paul <br />
              Essential Collection
            </h5>
            <p className="card-text lead fs-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
}
