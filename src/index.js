const setUpSettings = () => {
  const section = document.getElementById("projects");
  const navHeight = document.getElementById("nav").offsetHeight;
  const sectionNameHeight = section.firstElementChild.offsetHeight;

  let yoffset = window.pageYOffset;
  const intViewportHeight = window.innerHeight;
  const intViewportWidth = window.innerWidth;
  window.addEventListener("scroll", () => {
    newYoffset = window.pageYOffset;
    sectionTop = section.getBoundingClientRect().top;
    sectionBottom = section.getBoundingClientRect().bottom;
    sectionNameRight = section.getBoundingClientRect().right;
    sectionLastChildTop =
      section.lastElementChild.lastElementChild.getBoundingClientRect().top;
    sectionLastChildBottom =
      section.lastElementChild.lastElementChild.getBoundingClientRect().bottom;
    //scrolling down
    if (newYoffset > yoffset) {
      yoffset = newYoffset;
      //phones and tablets config
      if (intViewportWidth < 1024) {
        //fix name div
        if (
          sectionTop <= navHeight &&
          sectionLastChildTop > intViewportHeight
        ) {
          section.firstElementChild.classList.add("fixed");
          section.firstElementChild.style.top = "10vh";
          section.lastElementChild.firstElementChild.style.marginTop = `${sectionNameHeight}px`;
        }
        //unfix name div
        if (sectionLastChildTop < navHeight + sectionNameHeight) {
          section.firstElementChild.classList.remove("fixed");
          section.firstElementChild.classList.add("absolute");
          section.firstElementChild.style.top = `${section.lastElementChild.lastElementChild.offsetTop}px`;
        }
      } else {
        //desktop config
        //fix name div
        if (sectionTop <= 0) {
          section.firstElementChild.classList.add("fixed");
          section.firstElementChild.style.top = "0";
          section.firstElementChild.style.borderBottom = "10px solid black";
          section.lastElementChild.style.marginLeft = "auto";
        }
        //unfix name div
        if (sectionLastChildBottom < intViewportHeight) {
          console.log(sectionLastChildBottom);
          section.firstElementChild.classList.remove("fixed");
          section.firstElementChild.style.marginTop = "auto";
          section.firstElementChild.style.marginBottom = "0";
          section.firstElementChild.style.borderBottom = "none";
        }
      }
    } else {
      //scrolling up
      yoffset = newYoffset;
      //phones and tablets config
      if (intViewportWidth < 1024) {
        //unfix name div
        if (sectionTop > navHeight) {
          section.firstElementChild.classList.remove("fixed");
          section.firstElementChild.style.top = "0";
          section.lastElementChild.firstElementChild.style.marginTop = "0";
        }
        //fix name div
        if (
          sectionTop < 0 &&
          sectionLastChildTop > navHeight + sectionNameHeight
        ) {
          section.firstElementChild.classList.remove("absolute");
          section.firstElementChild.classList.add("fixed");
          section.firstElementChild.style.top = "10vh";
        }
      } else {
        //desktop config
        //fix name div
        if (sectionTop > 0) {
          section.firstElementChild.classList.remove("fixed");
          section.firstElementChild.style.top = "0";
          section.firstElementChild.style.borderBottom = "none";
        }
        //unfix name div
        if (sectionTop < 0 && sectionLastChildBottom > innerHeight) {
          section.firstElementChild.classList.add("fixed");
          section.firstElementChild.style.top = "0";
          section.firstElementChild.style.marginTop = "0";
          section.firstElementChild.style.marginBottom = "auto";
          section.firstElementChild.style.borderBottom = "10px solid black";
        }
      }
    }
  });
};
const initialize = (() => {
  setUpSettings();
  window.addEventListener("resize", () => setUpSettings());
})();
