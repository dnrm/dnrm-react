import React from "react";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <div className="footer border-t-2 border-gray-900">
      <h1>Made by Daniel Medina</h1>
      <a href="https://github.com/dnrm" style={{ textDecoration: "none" }}>
        My GitHub
      </a>
    </div>
  );
}
