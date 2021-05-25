const setUpSettings = () => {
  const navHeight = document.getElementById("nav").offsetHeight;
  let yoffset = window.pageYOffset;
  const applyPositionOnSection = (sectionToApply) => {
    newYoffset = window.pageYOffset;
    const section = document.getElementById(sectionToApply);
    const sectionNameHeight = section.firstElementChild.offsetHeight;
    const lastChild = section.lastElementChild.lastElementChild;

    const intViewportHeight = window.innerHeight;
    const intViewportWidth = window.innerWidth;

    sectionTop = section.getBoundingClientRect().top;
    sectionBottom = section.getBoundingClientRect().bottom;
    sectionNameRight = section.getBoundingClientRect().right;
    sectionLastChildTop =
      section.lastElementChild.lastElementChild.getBoundingClientRect().top;
    sectionLastChildBottom =
      section.lastElementChild.lastElementChild.getBoundingClientRect().bottom;
    //control margin-auto
    if (sectionTop <= 0 && intViewportWidth >= 1024) {
      section.firstElementChild.classList.remove("margin-bottom-auto");
      section.firstElementChild.classList.add("margin-top-auto");
    } else {
      section.firstElementChild.classList.add("margin-bottom-auto");
      section.firstElementChild.classList.remove("margin-top-auto");
    }
    //scrolling down
    if (newYoffset > yoffset) {
      yoffset = newYoffset;
      //both devices
      if (
        sectionTop <= navHeight &&
        sectionLastChildBottom > intViewportHeight
      ) {
        section.firstElementChild.classList.add("fixed-name");
      }
      //phones and tablets config
      if (intViewportWidth < 1024) {
        //fix name div
        if (
          sectionTop <= navHeight &&
          sectionLastChildTop > intViewportHeight
        ) {
          section.lastElementChild.firstElementChild.style.marginTop = `${sectionNameHeight}px`;
        }
        //unfix name div
        if (sectionLastChildTop < navHeight + sectionNameHeight) {
          section.firstElementChild.classList.remove("fixed-name");
          section.firstElementChild.classList.add("absolute-name");
          section.firstElementChild.style.marginBottom = `${lastChild.offsetHeight}px`;
        }
      } else {
        //desktop config
        //unfix name div
        if (sectionLastChildBottom < intViewportHeight) {
          section.firstElementChild.classList.remove("fixed-name");
        }
      }
    } else {
      //scrolling up
      yoffset = newYoffset;
      //both devices
      if (sectionTop > navHeight) {
        section.firstElementChild.classList.remove("fixed-name");
      }

      //phones and tablets config
      if (intViewportWidth < 1024) {
        //unfix name div
        if (sectionTop > navHeight) {
          section.lastElementChild.firstElementChild.style.marginTop = `0px`;
        }
        //fix name div
        if (
          sectionTop < 0 &&
          sectionLastChildTop > navHeight + sectionNameHeight
        ) {
          section.firstElementChild.classList.remove("absolute-name");
          section.firstElementChild.classList.add("fixed-name");
          section.firstElementChild.style.marginBottom = "0";
        }
      } else {
        //desktop config
        //unfix name div
        if (sectionTop < 0 && sectionLastChildBottom > innerHeight) {
          section.firstElementChild.classList.add("fixed-name");
        }
      }
    }
  };

  window.addEventListener("scroll", () => {
    const intViewportHeight = window.innerHeight;
    const projectsTop = document
      .getElementById("projects")
      .getBoundingClientRect().top;
    const projectsBottom = document
      .getElementById("projects")
      .getBoundingClientRect().bottom;
    const aboutTop = document
      .getElementById("about")
      .getBoundingClientRect().top;
    const aboutBottom = document
      .getElementById("about")
      .getBoundingClientRect().bottom;
    if (
      (projectsTop <= navHeight || projectsTop <= intViewportHeight) &&
      projectsBottom > navHeight
    ) {
      applyPositionOnSection("projects");
    }
    if (
      (aboutTop <= navHeight || aboutTop <= intViewportHeight) &&
      aboutBottom > navHeight
    ) {
      applyPositionOnSection("about");
    }
  });
};
const initialize = (() => {
  setUpSettings();
  window.addEventListener("resize", () => {
    setUpSettings();
  });
})();
