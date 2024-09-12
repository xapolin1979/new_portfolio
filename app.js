
gsap.registerPlugin(ScrollTrigger);

// Verificar si el ancho de la pantalla es menor a 1350px
const isSmallScreen = window.matchMedia("(max-width: 1350px)");

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
    y:400,
    scale: 0.5,
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle4",
      start: "top 40%",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  });

/*   gsap.to(".section1", {
    backgroundColor: "rgb(232, 226, 218)",
    duration: 1,
    scrollTrigger: {
      trigger: ".textTitle4",
      start: "top 40%",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  });  */
  gsap.to(".scrollDown", {
    y: 20,
    duration: 0.6,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
  });

  
  //section2


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
   gsap.to(".textoimg1Section2 ", {
    y:400,
      duration: 1,
      scrollTrigger: {
        trigger: ".section3",
        start: "top 60%",
        end: "bottom",
        toggleActions: "play pause play reverse",
      }
    });
    gsap.to(".img1Section2  ", {
      y:650,
        duration: 1,
        scrollTrigger: {
          trigger: ".section3",
          start: "top 60%",
          end: "bottom",
          toggleActions: "play pause play reverse",
        }
      });
 
   
 //SECCION 3

 let myText=new SplitType('.skills')

 gsap.from(myText.chars,{
  y:'100%',
  stagger:0.1,
  scrollTrigger: {
          trigger: ".section3",
          start: "top 60%",
          end: "bottom",
          toggleActions: "play pause play reverse",
        }
 })
 gsap.to(".section3 ", {
  width:'100%',
    duration: 1,
    scrollTrigger: {
      trigger: ".section3",
      start: "top 60%",
      end: "bottom",
      toggleActions: "play pause play reverse",
    }
  });

}
