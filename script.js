var tl = gsap.timeline({
    repeat:-1
});

tl.to(".img-container",{
    width:"100%",
    duration:2,
    stagger:2,
    ease: Power3.easeInOut
},'a')

.to(".text h1",{
    top:0,
    stagger:2,
    ease: Power3.easeInOut
},'a')

.to(".text h1",{
    delay:2,
    stagger:2,
    top:"-100%",
    ease: Power3.easeInOut,
},'a')