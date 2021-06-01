const setUpSettings = () => {
  const navHeight = document.getElementById("nav").offsetHeight;
  let yoffset = window.pageYOffset;
  const applyPositionOnSection = (sectionToApply) => {
    newYoffset = window.pageYOffset;
    const section = document.getElementById(sectionToApply);
    const intViewportHeight = window.innerHeight;
    const intViewportWidth = window.innerWidth;

    if (section.offsetHeight < intViewportHeight * 1.1) return;
    const sectionNameHeight = section.firstElementChild.offsetHeight;
    sectionTop = section.getBoundingClientRect().top;
    sectionBottom = section.getBoundingClientRect().bottom;
    sectionNameRight = section.getBoundingClientRect().right;
    sectionFirstChildTop =
      section.lastElementChild.firstElementChild.getBoundingClientRect().top;
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
        if (sectionBottom < intViewportHeight) {
          section.firstElementChild.classList.remove("fixed-name");
          section.firstElementChild.classList.add("absolute-name");
          section.firstElementChild.style.marginBottom = `${
            intViewportHeight - navHeight - sectionNameHeight
          }px`;
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
      //phones and tablets config
      if (intViewportWidth < 1024) {
        //unfix name div
        if (sectionFirstChildTop > navHeight + sectionNameHeight) {
          section.firstElementChild.classList.remove("fixed-name");
          section.lastElementChild.firstElementChild.style.marginTop = `0px`;
        }
        //fix name div
        if (sectionTop < 0 && sectionBottom > intViewportHeight) {
          section.firstElementChild.classList.remove("absolute-name");
          section.firstElementChild.classList.add("fixed-name");
          section.firstElementChild.style.marginBottom = "0";
        }
      } else {
        //desktop config
        //unfix name div
        if (sectionFirstChildTop > navHeight) {
          section.firstElementChild.classList.remove("fixed-name");
        }
        //fix name div
        if (sectionTop < 0 && sectionLastChildBottom > innerHeight) {
          section.firstElementChild.classList.add("fixed-name");
        }
      }
    }
  };

  const checkSectionDisplaying = () => {
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
  };

  //handle section fixing
  window.addEventListener("scroll", checkSectionDisplaying);

  //handle form
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    console.log(name, email, message);
    name.value = "";
    email.value = "";
    message.value = "";
  });

  //handle burger menu
  const burgerBtn = document.getElementById("burger-btn");
  burgerBtn.addEventListener("click", () => {
    const nav = document.getElementById("nav");
    nav.classList.toggle("show-menu");
  });
  const menu = document.getElementById("menu");
  menu.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      checkSectionDisplaying();
      const nav = document.getElementById("nav");
      nav.classList.remove("show-menu");
    });
  });

  //handle light dark color toggler
  const switcher = document.getElementById("switcher");
  switcher.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
};
const initialize = (() => {
  setUpSettings();
  window.addEventListener("resize", () => {
    setUpSettings();
  });
})();
