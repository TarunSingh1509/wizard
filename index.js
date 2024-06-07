function page1Animation(){
    const tl=gsap.timeline();
tl.from("nav h1",{
    opacity: 0, y: 100, duration: 2
})
gsap.to("nav h1 i",{
    rotation:315,
    duration:1,
    repeat:-1,
    repeatDelay:1
})
tl.from("nav h4",{
    opacity: 0, y: 100, duration: 1,stagger:0.1
})
tl.from("nav button",{
    opacity: 0, y: 100, duration: 1,
})
tl.from(".centerPart1 h1",{
    opacity: 0,x:-200, duration: 1,
})
tl.from(".centerPart1 p",{
    opacity: 0,x:-200, duration: 1,
},"something")
tl.from(".centerPart1 button",{
    opacity: 0,x:-200, duration: 1,
})
tl.from(".centerPart2",{
    opacity:0,x:200, duration:1
},"something")
tl.from(".section1Bottom img ",{
    opacity:0,y:100, duration:1,stagger:0.1
})

}

function page2Animation(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".section2",
            scroller:"body",
            start:"top 85%",
            end:"top 0",
            scrub:2,
        }
    })
    tl2.from(".services",{
        y:30,opacity:0,
    })
    tl2.from(".elem.line1.left",{
        x:-300,opacity:0
    },"line1")
    tl2.from(".elem.line1.right",{
        x:300,opacity:0
    },"line1")
    tl2.from(".elem.line2.left",{
        x:-300,opacity:0
    },"line2")
    tl2.from(".elem.line2.right",{
        x:300,opacity:0
    },"line2")
}

page1Animation();
page2Animation();
