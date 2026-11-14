function startLoader() {
  const count = document.querySelector(".loader-count h2");

  if (!count) {
    requestAnimationFrame(startLoader);
    return;
  }

  const obj = { value: 0 };

  gsap.to(obj, {
    value: 100,
    duration: 2,
    ease: "linear",
    onUpdate: () => {
      count.textContent = `${Math.round(obj.value)}%`;
    },
    onComplete: () => {
      gsap.to(".loader-count", {
        duration: 2,
        opacity: 0,
        ease: "power3.out",
        onComplete: () => tl.play(),
      });
    },
  });
  
console.log("start")
const tl = gsap.timeline({paused:true})
tl.to(".loader",{
    yPercent:-100,
     duration:0.8,
        borderBottomLeftRadius:"30%",
       borderBottomRightRadius:"30%",
    ease:"power3.out",

}).to(".Home")

}

startLoader();