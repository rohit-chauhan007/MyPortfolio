const circleMove = () => {
  const circle = document.querySelector(".circle");
  if (!circle) {
    requestAnimationFrame(circleMove);
    return;
  }
  window.addEventListener("mousemove", (evt) => {
    const circleX = evt.clientX;
    const circleY = evt.clientY;
    gsap.to(circle, {
      x: circleX,
      y: circleY,
      opacity: 1,
    });
    //cirle move pr sqeeze ho 
    //  gsap.to(circle,{
    //   scaleX:Math.min(Math.abs(evt.movementX,2)),
    //   scaleY:Math.min(Math.abs(evt.movementY,1.5)),
   const squeezeX =  gsap.quickTo(circle,"scaleX",{
      duration:0.1,
      ease:"power3.out"
    });
   const squeezeY =  gsap.quickTo(circle,"scaleY",{
      duration:0.1,
      ease:"power3.out"
    });
    const speedX = Math.min(Math.abs(evt.movementX),10);
    const speedY = Math.min(Math.abs(evt.movementY),5);

    const scaleX = 1 + speedX * 0.5;
    const scaleY = 1 - speedY * 0.02;


    squeezeX(Math.min(3.5,scaleX));
    // squeezeY(Math.min(1.2,scaleY));
 let timer;
  clearTimeout(timer);
   timer = setTimeout(() => {
    // Mouse stop hone par animation
    gsap.to(circle, {
      scaleX: 1,
      scaleY: 1,
      duration: 0.2,
      ease: "power2.out"
    });
  }, 100);


  });
  
};
circleMove();
const circleBig = () => {
  const logoCircleBig = document.querySelector(".btn-text");
  if(!logoCircleBig){
    requestAnimationFrame(circleBig);
    return
  }
  //circle big after enter the logo
  logoCircleBig.addEventListener("mouseenter", (ev) => {
    gsap.quickTo(".circle", {
      scale:5,
      duration: 0.3,
      ease: "power3.out",
        background:"rgba(255, 255, 255, 0.5)",
    border:"1px solid rgba(255, 255, 255, 0.22)",
    // backdropFiltter:"blur(8px)",   
     boxShadow:" 0 8px 30px rgba(0, 0, 0, 0.5)",
    });
    //circle normal after leave the logo
    logoCircleBig.addEventListener("mouseleave", (evt) => {
-      gsap.to(".circle", {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
        background:"black"
      });
    });
  });
  //navigation anchor tag
  const navigationCircleBig = document.querySelectorAll(".navigation a");
  navigationCircleBig.forEach((allNav) => {
    allNav.addEventListener("mouseenter", (elm) => {
      gsap.to(".circle", {
        scale: 5,
        duration: 0.3,
        ease: "power3.out",
          background:"rgba(255, 255, 255, 0.5)",
    border:"1px solid rgba(255, 255, 255, 0.22)",
    // backdropFiltter:"blur(8px)",   
     boxShadow:" 0 8px 30px rgba(0, 0, 0, 0.5)",
      });
    });
    allNav.addEventListener("mouseleave", (el) => {
      gsap.to(".circle", {
        scale: 1,
        duration: 0.3,
        ease: "power3.out",
        background:"black"
      });
    });
  });
};
circleBig();