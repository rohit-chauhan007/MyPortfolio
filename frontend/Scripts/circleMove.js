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
        gsap.to(circle,{
            scale:1.5
        });
        //circle normal after leave the logo
        logoCircleBig.addEventListener("mouseleave",(evt)=>{
            gsap.to(circle,{
                scale:1
            })
        })
    });

}
circleMove();