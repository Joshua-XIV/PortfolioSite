import { useState, useRef } from "react";
import NavButton from "./NavButton";

const NavBar = () => {
  const [highlightStyle, setHighlightStyle] = useState({ opacity: 0 });
  const containerRef = useRef(null);
  const buttonRefs = useRef([]);

  const clearHighlight = () => setHighlightStyle({ opacity: 0 });

  const handleMouseEnter = (index) => {
    const btn = buttonRefs.current[index];
    const container = containerRef.current;
    if (!btn || !container) return;

    const btnRect = btn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    setHighlightStyle({
      left: btnRect.left - containerRect.left,
      width: btnRect.width,
      opacity: 1,
    });
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-10 w-fit">
      <div
        ref={containerRef}
        className="relative flex backdrop-blur-xs border-2 border-black rounded-2xl overflow-hidden"
      >
        <div
          className="absolute top-0 bottom-0 rounded-2xl bg-white/20 pointer-events-none transition-all duration-300 ease-in-out"
          style={{
            ...highlightStyle,
            height: "100%",
            position: "absolute",
            transitionProperty: "left, width, opacity",
          }}
        />

        {["Home", "Projects", "About", "Contact"].map((content, i) => (
          <div
            key={content}
            ref={(el) => (buttonRefs.current[i] = el)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={clearHighlight}
            className="py-2"
          >
            <NavButton
              content={content}
              isHome={content === "Home"}
              isContact={content === "Contact"}
            />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
