import { useState, useEffect } from "react";

export const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {visible && (
        <button onClick={scrollToTop} style={styles.button}>↑</button>
      )}
    </>
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "11rem",
    right: "1rem",
    width: "3rem",
    height: "3rem",
    zIndex: 99999999,
    fontSize: "18px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "var(--pink-main-color)",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.3)",
  },
};