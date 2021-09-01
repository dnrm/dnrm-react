import React from "react";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <div className="footer p-6 absolute bottom-0 w-full bg-gray">
      <h1 className="font-space-grotesk">Made by Daniel Medina</h1>
      <a href="https://github.com/dnrm" className="font-space-grotesk text-blue-500">
        My GitHub
      </a>
    </div>
  );
}
