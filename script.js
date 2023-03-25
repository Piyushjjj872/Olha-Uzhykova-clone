function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
init()




if (window.innerWidth <= 600) {
    
    var fullscr = document.querySelector("#full-scr");
    var navmenu =document.querySelector("#nav-menu");
    var line1 = document.querySelector("#nav-menu #line1");
    var line2 = document.querySelector("#nav-menu #line2");
    var line3 = document.querySelector("#nav-menu #line3");
    var b = 100;
    navmenu.addEventListener("click",function(){
        if( b >= 100){
            // console.log("ni");
            fullscr.style.opacity = 1;
            fullscr.style.top = 0;
            line1.style.rotate = "35deg";
            line1.style.top = 5;
            line2.style.rotate = "-35deg";

            line3.style.opacity = 0;
            b -= 1
        }
        else{
            // console.log("ha");
            fullscr.style.opacity = 1;
            fullscr.style.top = "-100%";
            line2.style.rotate = "0deg";
            line2.style.top = 1;


            line1.style.rotate = "0deg" ;
            line1.style.top = -1;

            line3.style.opacity = 1;
            b += 1
        }
    })




    console.log("This is a mobile device");
  } else {
    var nh1 = document.getElementById("nav-prt1-inner");
var a = -150;
setInterval(function(){
    if(a>-450){
        gsap.to("#nav-prt1-inner h1",{
           
            y: a+"%",
            opacity: 1
        })
        // console.log(a)
    }else{
        a = 150,
        gsap.to("#nav-prt1-inner h1",{
            y:"0%",
            duration: 0.8,
            opacity: 0,
            delay: 1
        })
    }
    
    a -= 150;
    
},3000)


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top -5%",
        scrub:3,
        // markers: true
    }
})
tl.to("#gola",{
    left:"95%",
    rotate:540,
    top:"50vh",
    duration:2
},"anim")

tl.to("#platform",{
    rotate:15,
    
},"anim")

gsap.from("#nav",{
    y:-150,
    opacity:0,
    duration:1,
    delay:0.2
})

gsap.from("#page1 h1",{
    y:100,
    delay:1,
    opacity:0,
    duration:0.8,
    stagger: 1,
   
})
gsap.from("#gola",{
    y:-550,
    duration:0.8,
    delay:0.2,

})
gsap.from("#platform",{
    y:550,
    duration:1,
})

// page-2
var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page2-box h1",
        scroller:"#main",
        // markers:true,
        start: "top 95%",
        scrub:true
    }
})
tl2.to("#page2-box",{
    
    y:100,
    onUpdate:function(){
        $('#page2-box h1').textillate({ in: { effect: 'fadeInUpBig' } });
    }
})
gsap.from("#page2-elem button,#page2-elem p",{
    y: 200,
    duration: 1,
    delay: 0.5,
    opacity: 0,
    stagger:true,
    scrollTrigger:{
        trigger: "#page2-elem button",
        scroller:"#main",
        // markers:true,
        start: "top 80%",
        
    }
})
gsap.from("#page2-circle img,#page2-circle video",{
    
    duration: 1,
    delay: 0.5,
    opacity: 0,
    scrollTrigger:{
        trigger: "#page2-circle",
        scroller:"#main",
        // markers:true,
        start: "top 85%",
        
    }
})
gsap.to("#page2-circle img,#page2-circle video",{
    y: -180,
    duration: 0.5,
    delay: 0.5,
    
    scrollTrigger:{
        trigger: "#page2-circle",
        scroller:"#main",
        // markers:true,
        start: "top 20%",
        scrub:3
    }
})

// page-4
var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:"#page4",
        scroller:"#main",
        start:"top 85%",
        // scrub:3,
        // markers: true
    }
})
tl4.from("#page4-prt h1",{
    duration: 0.2,
    onStart:function(){
        $('#page4-prt h1').textillate({ in: { effect: 'fadeInUpBig' } });
    }
})
tl4.from("#page4-prt-2,#page4 .matter",{
    y: 300,
    delay: 1,
    duration: 1,
    stagger: 0.2,
    opacity: 0
})
// console.log(tl4);

// page-5
gsap.from("#page5 p",{
    y: 200,
    duration: 0.5,
    opacity: 0,
    // delay: 1,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
    },
    onStart:function(){
        $('#page5 h1').textillate({ in: { effect: 'fadeInUpBig' } });
    }
})

gsap.to("#safed-gola",{
    scale:13,
    scrollTrigger:{
        trigger:"#page5",
        scroller:"#main",
        // markers:true,
        start:"top -65%",
        // end:"top 24%",
        scrub:3
    }
})
gsap.to(".page5-elem",{
    y: -300,
    duration: 0.5,
    delay: 0.5,
    
    scrollTrigger:{
        trigger: ".page5-elem",
        scroller:"#main",
        // markers:true,
        start: "top 20%",
        scrub:3
    }
})

// page-6
gsap.to(".page6-elem",{
    y: -400,
    duration: 0.5,
    delay: 0.5,
    
    scrollTrigger:{
        trigger: ".page6-elem",
        scroller:"#main",
        // markers:true,
        start: "top 20%",
        scrub:3
    }
})

// page-7
gsap.from("#page7 h1",{
    duration: 0.2,
    scrollTrigger:{
        trigger: "#page7 h1",
        scroller:"#main",
        // markers:true,
        start: "top 85%",
        scrub:3
    },
    onStart:function(){
        $('#page7 h1').textillate({ in: { effect: 'fadeInUpBig' } });
    }
})

// page-8
gsap.from("#page8-content h1",{
    duration: 0.2,

    scrollTrigger:{
        trigger: "#page8-content h1",
        scroller:"#main",
        // markers:true,
        start: "top 85%",
        scrub:3
    },
    onStart:function(){
        $('#page8-content h1').textillate({ in: { effect: 'fadeInUpBig' } });
    }
})

var imgg = document.querySelectorAll(".inner-content");
console.log(imgg);

// mouse Events
imgg.forEach(function(elem){
    elem.addEventListener("mouseenter",function (){
        elem.childNodes[1].style.scale = 1,
        elem.childNodes[1].style.opacity = 1
        // console.log("aa gya")
        
    })
    elem.addEventListener("mouseleave",function (){
        elem.childNodes[1].style.scale = 0,
        elem.childNodes[1].style.opacity = 1
        // console.log("chala gya")
        
    })
    elem.addEventListener("mousemove",function (dets){
        elem.childNodes[1].style.left = `${dets.x/5}px`
        console.log("ha")
        
    })
})

gsap.from("#page9 h1",{
    
    // delay: 0.5,
    duration:0.5,
    scrollTrigger:{
        trigger:"#page9 h1",
        scroller: "#main",
        // markers: true,
        start: "top 90%",
        // scrub:3
    },
    onUpdate:function(){
        $('#page9 h1').textillate({ in: { effect: 'fadeInDownBig' } });
    }
})

// page10-circle animations...
var tl3 = gsap.timeline({
    repeat : -1,
    yoyo : true,
})

tl3.to("#page10-circle1,#page10-circle5",{
    duration: 1.3,
    x : 10,
    y: 5,
   
})
tl3.to("#page10-circle4",{
    duration: 2,
    x :12,
    y : 6
})
tl3.to("#page10-circle3",{
    duration: 1.5,
    x :12,
    y : 6
})
tl3.to("#page10-circle2",{
    duration: 1.1,
    x :10,
    y : 6
})
  }
window.addEventListener("resize",function(){
    this.location.reload();
})