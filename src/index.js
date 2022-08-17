import headshot from "./images/headshot.jpg";
import homeBg from "./images/image-home-bg.png";
import cmLogoBlack from "./images/cmLogoBlack.png";
import cmLogoWhite from "./images/cmLogoWhite.png";
import cmLogoBrown from "./images/CM-logo-brown.png";
import cmLogoSilver from "./images/CM-logo-silver.png";
import resaElectronics from "./images/resa-electronics.png";
import drinksHub from "./images/drinks-hub.png";
import mapleBear from "./images/maple-bear.png";

const setUpSettings = () => {
  const navHeight = document.getElementById("nav").offsetHeight;
  let yoffset = window.pageYOffset;
  const applyPositionOnSection = (sectionToApply) => {
    let newYoffset = window.pageYOffset;
    const section = document.getElementById(sectionToApply);
    const intViewportHeight = window.innerHeight;
    const intViewportWidth = window.innerWidth;

    if (section.offsetHeight < intViewportHeight * 1.1) {
      if (intViewportWidth >= 1024) {
        section.firstElementChild.style.height = `${section.lastElementChild.offsetHeight}px`;
      }
      return;
    }
    const sectionNameHeight = section.firstElementChild.offsetHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const sectionNameRight = section.getBoundingClientRect().right;
    const sectionFirstChildTop =
      section.lastElementChild.firstElementChild.getBoundingClientRect().top;
    const sectionLastChildTop =
      section.lastElementChild.lastElementChild.getBoundingClientRect().top;
    const sectionLastChildBottom =
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
  const status = document.getElementById("status");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let data = new FormData(e.target);
    fetch(e.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        status.innerHTML = "Thanks for your message.";
        form.reset();
      })
      .catch((error) => {
        status.innerHTML =
          "Sorry, an error ocurred. Contact me through my email moyanocaue@gmail.com";
        form.reset();
      });
    setTimeout(() => {
      status.innerHTML = "";
    }, 3000);
  });

  //handle burger menu
  const burgerBtn = document.getElementById("burger-btn");
  const nav = document.getElementById("nav");
  burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    burgerBtn.classList.toggle("close-menu");
  });
  const menu = document.getElementById("menu");
  menu.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      checkSectionDisplaying();
      nav.classList.remove("show-menu");
      burgerBtn.classList.remove("close-menu");
    });
  });

  //handle light dark color toggler
  const switcher = document.getElementById("switcher");
  const logosBig = document.querySelectorAll(".logoBig");
  const logoNav = document.querySelector(".logoNav");
  switcher.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      logosBig.forEach((logo) => (logo.src = cmLogoSilver));
      logoNav.src = cmLogoWhite;
    } else {
      logosBig.forEach((logo) => (logo.src = cmLogoBrown));
      logoNav.src = cmLogoBlack;
    }
  });
};
const initialize = (() => {
  document.getElementById("CM-logo").src = cmLogoBlack;
  document.getElementById("logoHome").src = cmLogoBrown;
  document.getElementById("logoFooter").src = cmLogoBrown;
  document.getElementById("home-bg").src = homeBg;
  document.getElementById("resa-electronics").src = resaElectronics;
  document.getElementById("drinksHub").src = drinksHub;
  document.getElementById("mapleBear").src = mapleBear;
  document.getElementById("headshot").src = headshot;

  setUpSettings();
  window.addEventListener("resize", () => {
    setUpSettings();
  });
  //type effect on homepage
  /*  const hello = document.querySelector(".hello");
  const cursor = document.querySelector(".cursor");
  const text = "Hello,";
  const typingdelay = 300;
  let charCounter = 0;
  const type = () => {
    if (charCounter < text.length) {
      hello.textContent += text.charAt(charCounter);
      charCounter++;
      setTimeout(type, typingdelay);
    }
    if (charCounter === text.length) {
      setTimeout(() => {
        cursor.classList.add("cursor-fade");
      }, 1000);
    }
  };
  type(); */
})();
