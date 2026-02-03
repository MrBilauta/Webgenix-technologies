document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  const testimonials = document.querySelectorAll(".testimonial");
  const nextButton = document.querySelector("[data-next]");
  const prevButton = document.querySelector("[data-prev]");
  let index = 0;

  const showTestimonial = (newIndex) => {
    testimonials.forEach((item, idx) => {
      item.classList.toggle("active", idx === newIndex);
    });
  };

  const goNext = () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
  };

  const goPrev = () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
  };

  if (testimonials.length > 0) {
    showTestimonial(index);
    const timer = setInterval(goNext, 6000);

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        goNext();
        clearInterval(timer);
      });
    }

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        goPrev();
        clearInterval(timer);
      });
    }
  }
});
