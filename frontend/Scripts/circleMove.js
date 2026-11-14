const circleMove = () =>{
    console.log("circle start");
    const circle = document.querySelector(".circle");
    const logoCircleBig = document.querySelector(".btn-text");
    console.log(logoCircleBig);
   
    console.log(circle);
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
        console.log("enter");
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