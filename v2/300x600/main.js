var tl;
var tl2;
var startTime;


function init() {
  startTime = new Date();
  tl = gsap.timeline({ onComplete: logDuration });
  animate();
  // setRollover();
}
gsap.config({
    force3D: true
  });
function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });
  tl.set("#hand", { x:30})

  tl.addLabel("frame1", 0)
    .to("#bg1", 6, { scale:1.1, transformOrigin: "right bottom", ease: "power1.inOut" }, "frame1")
    .from(".copy1 span", 1, { autoAlpha:0, x:-50, stagger: 0.45, ease: "power1.inOut" }, "frame1+=1")

  tl.addLabel("frame2", "frame1+=5")
    .to(".copy1", 0.5, { autoAlpha:0, ease: "power1.inOut" }, "frame2")
    .to(["#bg2, #hand"],{autoAlpha: 1}, ">-=0.2")
    .to("#bg2", 6, { scale:1.1, transformOrigin: "bottom right", ease: "power1.inOut" }, "frame2")
    .to("#hand", 4, { x: 0, ease: "power1.inOut" }, "frame2")
    .from(".copy2 span", 1, { autoAlpha:0, x:-50, stagger: 0.45, ease: "power1.inOut" }, "frame2+=1")

  tl.addLabel("frame3", "frame2+=5")
      .to("#hand", 0.2, { autoAlpha:0, ease: "power1.inOut" }, "frame3")
      .to(["#bg3, .line"],0.5,{autoAlpha: 1,  ease: "power1.inOut"}, "frame3")
      .to(["#cta"],0.5, {autoAlpha: 1}, "frame3+=1.3")
  
}

// function setRollover() {
//   document
//     .getElementById("default_exit")
//     .addEventListener("mouseover", defaultOver, false);
//   document
//     .getElementById("default_exit")
//     .addEventListener("mouseout", defaultOut, false);
// }

// function defaultOver() {
//   gsap.to("#cta", 0.5, { scale: 1.05, ease: Power1.easeInOut });
// }

// function defaultOut() {
//   gsap.to("#cta", 0.5, { scale: 1, ease: Power1.easeInOut });
// }


function logDuration() {
  let endTime = new Date();
  console.log(
    "Animation duration: " +
      ((endTime - startTime) / 1000).toFixed(2) +
      " seconds",
  );
}
