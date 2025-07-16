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

tl.to(".circle .bottom img",{
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
