import React from "react";
import "./sass/style.css";

export default function Schimmer() {
  return (
    <section className="schimmer">
      {Array(10)
        .fill(" ")
        .map(() => (
          <div key={Math.random()} className="schimmer-card"></div>
        ))}
    </section>
  );
}
