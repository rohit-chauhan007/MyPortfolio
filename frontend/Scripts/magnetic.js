function magneticLogo(){
const magnetic = document.querySelector(".magnetic");
const text = document.querySelector(".btn-text");
if(!text && !magnetic){
    requestAnimationFrame(magneticLogo,magneticNavigation);
    return;
}

const moveX = gsap.quickTo(text, "x", {
  duration: 0.3,
  ease: "power3.out",
});

const moveY = gsap.quickTo(text, "y", {
  duration: 0.3,
  ease: "power3.out",
});

magnetic.addEventListener("pointermove", (event) => {
  const rect = magnetic.getBoundingClientRect();

  const buttonCenterX = rect.left + rect.width / 2;
  const buttonCenterY = rect.top + rect.height / 2;

  const x = (event.clientX - buttonCenterX) * 0.30;
  const y = (event.clientY - buttonCenterY) * 0.30;

  moveX(x);
  moveY(y);
});

magnetic.addEventListener("pointerleave", () => {
  gsap.to(text, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "elastic.out(1, 0.4)",
  });
});
}
magneticLogo();

//magnetic navigation
function magneticNavigation(){
const magneticNav = document.querySelectorAll(".navigation a");
if( magneticNav.length == "0"){
    requestAnimationFrame(magneticNavigation);//reload the browser/rerender  
    return;
}
magneticNav.forEach((links)=>{
if(!links && magneticNav){
    requestAnimationFrame(magneticNavigation);
    return;
}

const moveX = gsap.quickTo(links, "x", {
  duration: 0.3,
  ease: "power3.out",
});

const moveY = gsap.quickTo(links, "y", {
  duration: 0.3,
  ease: "power3.out",
});

links.addEventListener("pointermove", (event) => {
  const rect = links.getBoundingClientRect();
  const buttonCenterX = rect.left + rect.width / 2;
  const buttonCenterY = rect.top + rect.height / 2;
  const x = (event.clientX - buttonCenterX) * 0.50;
  const y = (event.clientY - buttonCenterY) * 0.50;

  moveX(x);
  moveY(y);
});

links.addEventListener("pointerleave", () => {
  gsap.to(links, {
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "elastic.out(1, 0.4)",
  });
});
})
}
magneticNavigation();
