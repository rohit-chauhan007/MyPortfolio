const circleMove = () =>{
    const circle = document.querySelector(".circle");
    const logoCircleBig = document.querySelector(".btn-text");
   
    if(!circle){
        requestAnimationFrame(circleMove);
        return;
    }
     window.addEventListener("mousemove",(evt) =>{
        const circleX = evt.clientX;
        const circleY = evt.clientY;
        gsap.to(circle,{
            x :circleX,
            y:circleY,
            opacity:1,   
        });
     });
     //circle big after enter the logo
      logoCircleBig.addEventListener("mouseenter",(ev)=>{
        console.log("mouse enter")
        gsap.to(circle,{
            scale:5,
             duration:0.3,
                   ease:"power3.out",
        });
        //circle normal after leave the logo
        logoCircleBig.addEventListener("mouseleave",(evt)=>{
            gsap.to(circle,{
                scale:1,
                 duration:0.3,
                   ease:"power3.out",
            })
        })
    });
    //navigation anchor tag 
    const navigationCircleBig = document.querySelectorAll(".navigation a");
    navigationCircleBig.forEach((allNav)=>{
        allNav.addEventListener("mouseenter",(elm) => {
               console.log("mouse entr in navigation");
             gsap.to(circle,{
                      scale:5,
                   duration:0.3,
                   ease:"power3.out",
        });
        });
        allNav.addEventListener("mouseleave",(el) => {
             gsap.to(circle,{
                      scale:1,
                   duration:0.3,
                   ease:"power3.out",
        });
        });
    });
}
circleMove();