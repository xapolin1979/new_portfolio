gsap.registerPlugin(ScrollTrigger);

// Verificar si el ancho de la pantalla es menor a 1300px
const isSmallScreen = window.matchMedia("(max-width: 1300px)");

if (!isSmallScreen.matches) {
  gsap.to(".textTitle1", {
    x: -400,
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle1",
      start: "top",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  });

  gsap.to(".guion", {
    scale: 1.2,
    duration: 1,
    scrollTrigger: {
      trigger: ".guion",
      start: "top",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  });

  gsap.to(".textTitle3", {
    x: 400,
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle3",
      start: "top",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  });

  gsap.to(".textTitle4", {
    x: -700,
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle4",
      start: "top 40%",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  });

/*   gsap.to(".section1", {
    backgroundColor: "rgb(119, 119, 119)",
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle4",
      start: "top",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  }); */

  gsap.to(".scrollDown", {
    y: 20,
    duration: 0.6,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
  });
  gsap.to(".img1Section2 ", {
   scale: 1.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle4",
      start: "top",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  });
  gsap.to(".textoimg1Sction2 ", {
   x:-580,
     duration: 1,
     scrollTrigger: {
       trigger: ".textoimg1Sction2",
       start: "top 50%",
       end: "bottom",
       toggleActions: "play pause play reverse",
     }
   });

}
