// useIntersectionObserver.js
import { useEffect } from "react";

const useIntersectionObserver = (className = "fade-in", options = {}) => {
  useEffect(() => {
    const elements = document.querySelectorAll(`.${className}`);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [className, options]);
};

export default useIntersectionObserver;
