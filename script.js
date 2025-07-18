// let mainText = document.querySelector(".nav-txt").style.color
// mainText.color = "#fff";

function timelineOne() {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start: "top top",
            end: "bottom -300%",
            // markers: true,
            scrub: 1,
            pin: true,
        }
    })

    tl.to(".overlay-box", {
        left: "50%",
        duration: 5,
        stagger: 1,
        ease: Power1
    }, "h1")




        .to(".navbox6", {
            backgroundColor: "#fefffe",
            // stagger:.1,
            ease: Power1
        }, "circle")
        .to(".navbox5", {
            backgroundColor: "#fdfafae7",
            // stagger:.1,
            ease: Power1
        }, "circle")
        .to(".navbox4", {
            backgroundColor: "#fefffe9a",
            // stagger:.1,
            ease: Power1
        }, "circle")
        .to(".navbox3", {
            backgroundColor: "#fefffea4",
            // stagger:.1,
            ease: Power1
        }, "circle")
        .to(".navbox2", {
            backgroundColor: "#fefffe67",
            // stagger:.1,
            ease: Power1
        }, "circle")
        .to(".navbox1", {
            backgroundColor: "#fefffe2d",
            // stagger:.1,
            ease: Power1
        }, "circle")

        .to(".navbox1", {
            backgroundColor: "#fefffe2d",
            // stagger:.1,
            ease: Power1
        }, "circle")
        .set(".btm-left", { attr: { src: "assets/images/left white.webp" } }, "circle")
        .set(".btm-right", { attr: { src: "assets/images/rght white.webp" } }, "circle")

        // .to(".bg-img",{
        //     // rotate:"-180deg",
        //     scale:1,
        //     duration: 1,
        //     stagger:.1,
        //     ease:Power1
        // },"circle")
        .to(".nav-txt , .rnbtm span ", {
            // mainTextr : "#fff",
            color: "#fff",
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "circle")
        .to(".circle .bottom img", {
            // mainTextr : "#fefffe",
            rotate: "-180deg",
            scale: 1,
            duration: 4,
            stagger: .2,
            ease: Power1
        }, "circle")
        .to(".circle .top img", {
            // rotate:"-180deg",
            scale: 1,
            duration: 4,
            stagger: .2,
            ease: Power1
        }, "circle")
        .to(".overlay-box .center-img img", {
            scale: 0,
            duration: 2,
            stagger: .1,
            ease: Power1
        }, "circle")
        .to(".overlay-box h5", {
            opacity: 0,
            duration: 1,
            ease: Power1
        }, "circle")
        .to(".circle ", {
            // rotate:"-180deg",
            scale: .6,
            duration: 2,
            stagger: .1,
            ease: Power1
        }, "circle")

        .to(".btmn-title ", {
            // rotate:"-180deg",
            bottom: "-52%",

            stagger: .1,
            ease: Power1
        }, "circle")


        .to(".small-circle ", {
            // rotate:"-180deg",
            top: "50%",
            scale: 2,
            duration: 2.2,
            stagger: .1,
            ease: Power1
        }, "circle")

        .to(".small-circle ", {
            // rotate:"-180deg",

            opacity: 0,
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "circle1")

        .to(".semicircle ", {
            // rotate:"-180deg",
            scale: 0,
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "circle1")
        .to(".circle ", {
            // rotate:"-180deg",
            scale: 0,
            duration: 1,
            stagger: .1,
            ease: Power1
        }, "circle1")

        .to(".pf ", {
            // rotate:"-180deg",

            bottom: "7vh",
            rotate: "0deg",
            duration: 2,
            stagger: .1,
            ease: Power1
        }, "circle1")

        .to(".pink-box", {
            top: "0%",
            delay: 2,
            duration: 4,
            ease: Power1
        }, "circle1")

        .to(".pink-box", {
            duration: 1,
            top: "-80%",
            ease: Power1
        })

}

function timelineTwo() {
    let t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".second",
            start: "top top",
            end: "bottom -250%",
            // markers: true,
            scrub: 1,
            pin: true,
        }
    })

    t2.to(".second-circle", {
        top: "50%",
        // duration: 5,
        stagger: .1,
        ease: Power1
    })
        .to(".second-circle", {
            left: "50%",
            duration: 5,
            stagger: .1,
            ease: Power1
        })


        .to(" .pur", {
            scale: 10,
            stagger: .1,
            duration: 2,
            ease: Power1
        })

        .to(" .pur", {
            background: "linear-gradient(to right, #d5a7b4, #b5abd5)",
            stagger: .1,
            duration:2,
            ease: Power1
        }, "hey")
        .to(" .h11", {
            top: "-100%",
            // duration: 6,
            stagger: .1,
            ease: Power1
        }, "hey")

        .to(" .btm-stop p:nth-child(2)", {
            opacity: 0,
            stagger: .1,
            ease: Power1
        }, "hey")
        .to(" .h12", {
            top: "50%",
            // duration: 6,
            stagger: .1,
            ease: Power1
        }, "hey1")
        .to(" .btm-stop p:nth-child(3)", {
            opacity: 1,
            stagger: .1,
            ease: Power1
        }, "hey1")
        .to(" .grand-txt", {
            left: "-300%",
            duration: 8,
            stagger: .1,
            ease: Power1
        }, "hey1")

        .to(".rectangle", {
            top: "0%",
            duration: 5,
            stagger: .5,
            ease: Power1})
         .to(".outer-box", {
            left: "-50%",
            duration: 2,
            // stagger: .1,
            ease: Power1})
         .to(".inner-box", {
            left: "-25%",
            duration: 2,
            // stagger: .1,
            ease: Power1})   
}



timelineOne();
timelineTwo();
