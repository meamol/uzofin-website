
/*==================================
	 Mobile Menu
==================================*/

  const header = document.querySelector(".appHeader");
  const hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    header.classList.toggle("menu-open");
  });





/*==================================
    Industry Standard
==================================*/

  gsap.from(".industry-standards .support-text", {
    scrollTrigger: {
      trigger: ".industry-standards",
      start: "top 80%",
    },
    y: 30,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  gsap.from(".industry-standards .title", {
    scrollTrigger: {
      trigger: ".industry-standards",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power3.out"
  });





  gsap.from(".industry-standards .slick-slide .card-slide", {
    scrollTrigger: {
      trigger: ".industry-standards",
      start: "top 70%",
    },
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.08,
    ease: "power3.out"
  });
















