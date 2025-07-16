let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        // end: "bottom top",
        markers: true,
        scrub: 1,
        pin: true,
    }
})

tl.to(".overlay-box", {
    left: "50%",
    duration: 5,
    stagger:1,
    ease:Power1
},"h1")


.to(".circle .bottom img",{
    rotate:"-180deg",
    scale:1,
    duration: 1,
    stagger:.1,
    ease:Power1
},"circle")
.to(".circle .top img",{
    // rotate:"-180deg",
    scale:1,
    duration: 1,
    stagger:.1,
    ease:Power1
},"circle")
.to(".overlay-box .center-img img",{
    scale:0,
    duration: 1,
    stagger:.1,
    ease:Power1
},"circle")
.to(".overlay-box h5",{
    opacity:0,
    duration: 1,
    ease:Power1
},"circle")
.to(".circle ",{
    // rotate:"-180deg",
    scale:.6,
    duration: 1,
    stagger:.1,
    ease:Power1
},"circle")

.to(".btmn-title ",{
    // rotate:"-180deg",
    bottom: "-52%",
    
    stagger:.1,
    ease:Power1
},"circle")


.to(".small-circle ",{
    // rotate:"-180deg",
    top: "50%",
    scale:2,
    duration: 1,
    stagger:.1,
    ease:Power1
},"circle")

.to(".small-circle ",{
    // rotate:"-180deg",
    
    opacity:0,
    duration: 1,
    stagger:.1,
    ease:Power1
},"circle1")

.to(".semicircle ",{
    // rotate:"-180deg",
    scale:0,
    duration: 1,
    stagger:.1,
    ease:Power1
},"circle1")
.to(".circle ",{
    // rotate:"-180deg",
    scale:0,
    duration: 1,
    stagger:.1,
    ease:Power1
},"circle1")

.to(".pf ",{
    // rotate:"-180deg",
    
    bottom:"2%",
    rotate:"0deg",
    stagger:.1,
    ease:Power1
},"circle1")
