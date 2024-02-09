let tl = gsap.timeline();



tl.from(".goku2 ", {
    x:1000,
    opacity:0,
    duration: 2,
})

tl.from(".nav1 h1", {
    y:-10,
    opacity:0,
    duration:1,
    stagger:1
})


tl.from(".nav2", {
    y:-10,
    opacity:0,
    duration:1,
})


tl.from("i", {
    opacity:0,
    duration:1,
})




tl.from(".circle", {
    opacity:0,
    duration:1,
    scale:0.5,
    color:"black"
})


tl.from(".goku", {
    opacity:0,
    duration:1,
})
