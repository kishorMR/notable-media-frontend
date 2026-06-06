// CustomCursor.jsx
import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const ring = document.querySelector(".cursor-ring");
    const dot = document.querySelector(".cursor-dot");

    const moveCursor = (e) => {
      ring.style.opacity = "1";
      dot.style.opacity = "1";

      ring.style.transform =
        `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`;

      dot.style.transform =
        `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor-ring"></div>
      <div className="cursor-dot"></div>
    </>
  );
}