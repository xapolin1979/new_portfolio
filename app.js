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
    y: 400,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle4",
      start: "top 40%",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  });
  gsap.to(".section1", {
    backgroundColor: "white",
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle4",
      start: "top 40%",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  });
  gsap.to(".section2", {
    backgroundColor: "white",
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle4",
      start: "top 40%",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  });

  gsap.to(".scrollDown", {
    y: 20,
    duration: 0.6,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
  });

  gsap.to(".textoimg1Section2 ", {
   x:-100,
   opacity: 1,
   width:'45%',
     duration: 1,
     scrollTrigger: {
       trigger: ".textoimg1Section2",
       start: "top 75%",
       end: "bottom",
       toggleActions: "play pause play reverse",
     }
   });


 /*   gsap.to(".section2 ", {
    backgroundColor: "white",
    duration: 1,
    scrollTrigger: {
      trigger: ".section3",
      start: "top 80%  ",
      end: "bottom",
      markers: true,
      toggleActions: "play pause play reverse",
    }
  });
  gsap.to(".section3 ", {
    backgroundColor: "white",
    duration: 1,
    scrollTrigger: {
      trigger: ".section3",
      start: "top 80%  ",
      end: "bottom",
      markers: true,
      toggleActions: "play pause play reverse",
    }
  });
  gsap.to(".textoimg1Section2  ", {
    backgroundColor: "rgb(17,17,17)",
    color: "white",
    duration: 1,
    scrollTrigger: {
      trigger: ".section3",
      start: "top 80%  ",
      end: "bottom",
      markers: true,
      toggleActions: "play pause play reverse",
    }
  }); */
   
 

}
