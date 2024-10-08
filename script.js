function initialize(){
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
}
initialize();

var swiper = new Swiper(".mySwiper", {
  scrollbar: {
    el: ".swiper-scrollbar",
    preview:4,
    hide: true,
  },
});

document.querySelector("#lnav #menu").addEventListener("click",function(){
  document.querySelector("#nav-page").style.left = "0"
})

document.querySelector("#nav-top i").addEventListener("click",function(){
  document.querySelector("#nav-page").style.left = "-100%"
})

const cursor = document.querySelector("#cursor");
const video = document.querySelector("#video");

video.addEventListener("mousemove",function(dets){
  cursor.style.left = `${dets.x}px`
  cursor.style.top = `${dets.y}px`
  cursor.style.transform = "scale(1)"

})

video.addEventListener("mouseleave",function(dets){
  cursor.style.left = "50%"
  cursor.style.top = "50%"
  cursor.style.transform = "scale(0)"
})


const circleTxt = document.querySelector("#circle-txt");
const smallCursor = document.querySelector("#small-cursor");

circleTxt.addEventListener("mousemove",function(dets){
  console.log("hey")
  var dim = circleTxt.getBoundingClientRect();
  smallCursor.style.top = `${dets.clientY - dim.top}px`
  smallCursor.style.left = `${dets.clientX - dim.left}px`
})

circleTxt.addEventListener("mouseleave",function(dets){
  var dim =circleTxt.getBoundingClientRect();
  smallCursor.style.top = "50%";
  smallCursor.style.left = "50%";
})

document.querySelector("#brand").addEventListener("mouseenter",function(){
  document.querySelector("#bvideo").style.opacity = 1
  circleTxt.style.opacity = 0
})

document.querySelector("#brand").addEventListener("mouseleave",function(){
  document.querySelector("#bvideo").style.opacity = 0
  circleTxt.style.opacity = 1
})


document.querySelector("#product").addEventListener("mouseenter",function(){
  document.querySelector("#pvideo").style.opacity = 1
  circleTxt.style.opacity = 0
})

document.querySelector("#product").addEventListener("mouseleave",function(){
  document.querySelector("#pvideo").style.opacity = 0
  circleTxt.style.opacity = 1
})


document.querySelector("#motion").addEventListener("mouseenter",function(){
  document.querySelector("#mvideo").style.opacity = 1
  circleTxt.style.opacity = 0
})

document.querySelector("#motion").addEventListener("mouseleave",function(){
  document.querySelector("#mvideo").style.opacity = 0
  circleTxt.style.opacity = 1
})


gsap.from("#text-content h1, #line, #check",{
    opacity: 0,
    y: 50,
    ease: Expo.easeInOut,
    duration: 1,
    stagger: .5
})

gsap.from("#page2 p",{
  scrollTrigger: {
    trigger: "#page2 p",
    start: "top 80%",
    scroller: "#main",
  },
  opacity: 0,
  y: 100,
  ease: Expo.easeInOut,
  duration: 1
})

gsap.from("#orbital h1",{
  scrollTrigger: {
    trigger: "#orbital h1",
    start: "top 80%",
    scroller: "#main",
  },
  opacity: 0,
  // stagger: .7,
  y: 100,
  ease: Expo.easeInOut,
  duration: 0.7
})

gsap.from("#design h1",{
  scrollTrigger: {
    trigger: "#design h1",
    start: "top 90%",
    scroller: "#main",
  },
  opacity: 0,
  // stagger: .7,
  y: 100,
  ease: Expo.easeInOut,
  duration: 0.7
})

gsap.from("#brand,#product,#motion,#small-circle",{
  scrollTrigger:{
    trigger: "#page4",
    start: "top 60%",
    scroller: "#main",
  },
  x: -50,
  ease: Expo.easeInOut,
  stagger: .5,
  opacity: 0
})

gsap.from("#page5 h1",{
  scrollTrigger: {
    trigger: "#page5 h1",
    start: "top 80%",
    scroller: "#main",
  },
  opacity: 0,
  y: 100,
  ease: Expo.easeInOut,
  duration: 1
})

ScrollTrigger.create({
  trigger: "#page1",
  start: "top top", 
  pin: "#text-content",
  scroller: "#main",
});

ScrollTrigger.create({
  trigger: "#page7",
  start: "top top", 
  end: "bottom -170%",
  pin: "#page7-txt",
  scroller: "#main",
});

ScrollTrigger.create({
  trigger: "#page9",
    start: "top top", 
    end: "bottom 450px",
    pin: "#page9-content",
    scroller: "#main",
    scrub:.1
});

gsap.to("#all-work",{
  scrollTrigger:{
    trigger: "#all-work",
    start: "top 30%",
    end: "top 29%",
    scroller: "#main",
    scrub: .3
  },
  backgroundColor: "#DBFF00",
  color: "black",
})

gsap.to("#line",{
  scrollTrigger:{
    trigger: "#all-work",
    start: "top 30%",
    end: "top 29%",
    scroller: "#main",
    scrub: .3
  },
  backgroundColor: "#fff",
  color: "black",
})

gsap.to("#page9",{
  scrollTrigger:{
    trigger: "#all-work",
    start: "top 30%",
    end: "top 29%",
    scroller: "#main",
    scrub: .3
  },
  backgroundColor: "#000",
  color: "#fff",
})