import React from "react";

export const Footer = () => {
  const today = new Date();

  return (
    <footer className="bg-dark">
      <div className="container">
        <p>
          © {today.getFullYear()} Awesome Albums — All rights reserved. (Not
          Really)
        </p>
        <p>
          Sample project by{" "}
          <a
            href="https://github.com/ann-codes/takehome-awesome-albums"
            target="_blank"
            rel="noreferrer"
          >
            Ann Nguyen
          </a>
        </p>
      </div>
    </footer>
  );
};
