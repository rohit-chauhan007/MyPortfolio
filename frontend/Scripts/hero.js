  const  animateHero = () =>{
    const heroIntro = document.querySelector(".hero-intro");
    const heroTittle = document.querySelector(".hero-title");
    const heroLabel = document.querySelector(".hero-label");

    if (!heroLabel && !heroIntro && !heroTittle){
        requestAnimationFrame(animateHero);
        return;
    };
    const tl = gsap.timeline()
    console.log(heroIntro,heroLabel);
    tl.from(heroLabel,{
          y:70,
          opacity:0,
    }),tl.from(heroIntro,{
           y:70,
           opacity:0,
    })
};

animateHero();