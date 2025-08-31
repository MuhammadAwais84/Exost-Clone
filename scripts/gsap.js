function animateLoader() {
    let txt = document.querySelector(".txt");

    let tl = gsap.timeline({
        onComplete: function () {
            // ensure 100% at the end
            document.querySelector("body").style.overflowY = "scroll";
        }
    });

    // Line animation with counter
    tl.to(".line", {
        height: "100vh",
        duration: 2,
        ease: "none",
        onUpdate: function () {
            // progress sirf is tween ka milega
            let progress = this.progress(); // 0 → 1
            let percent = Math.round(progress * 100);
            txt.textContent = percent + "%";
        },
        onComplete: function () {
            // ensure 100% at the end
            txt.textContent = "100%";
            document.querySelector(".track").style.display = "none"
        }
    });

    // Baaki animations start after line completes
    tl.to(".left", {
        x: "-100%",
        duration: 0.2,
        ease: "steps(4)",
    })
    tl.to(".right", {
        x: "100%",
        duration: 0.2,
        ease: "steps(4)",
    })
    tl.to(".loader", {
        display: "none",
    });
}
function animateVideo() {

    gsap.to(".video", {
        scale: 0.9,
        borderRadius: "3rem",
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            start: "top 100%",
            end: "top 0%",
            scrub: true,
        }
    });
    gsap.to(".discover-btn i", {
        y: 10,
        repeat: -1,
        duration: 0.1,
        yoyo: true
    })
}
function page2_page3Animate() {
    gsap.from(".page2 h1,.page2 p,.page2 button", {
        x: -900,
        opacity: 0,
        duration: 1.5,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            start: "top 60%",
            end: "top 30%",
        }
    })

    gsap.from(".page3 h1,.page3 p", {
        x: -900,
        opacity: 0,
        duration: 1.5,
        stagger: 0.5,
        scrollTrigger: {
            trigger: ".page3",
            scroller: "body",
            start: "top 60%",
            end: "top 30%",
        }
    })

}

function animatethepics() {


    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".page4",
            scroller: "body",
            scrub: 2,
            pin: true,
            start: "top top",
            end: "+=500"
        }
    });

    // sab boxes left shift
    tl.to(".warpper", { x: "-20%" }, 0);

    // ab har box ki apni alag animation
    tl.to(".box1", { y: 10, rotateZ: 20 }, 0);
    tl.to(".box2", { Y: 100, rotateZ: 20 }, 0);
    tl.to(".box3", { y: 20, rotateZ: 0 }, 0);
    tl.to(".box4", { x: 0, rotateZ: 0 }, 0);
    tl.to(".box5", { y: -20, rotate: -3 }, 0);

}
function limitation() {
    

const boxes = gsap.utils.toArray(".limitation-box");

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".limitation",
    start: "top top",
    end: "+=" + (boxes.length * window.innerHeight),
    scrub: true,
    pin: true,
  }
});

boxes.forEach((box, i) => {
  if (i === 0) return; // skip first

  tl.fromTo(
    box,
    { y: "100%", scale: 1, opacity: 0 },
    { y: "0%", opacity: 1, duration: 1 },
    i
  );

  // previous box scale down
  tl.to(
    boxes[i - 1],
    { scale: 0.95,opacity:0.5, duration: 1 },
    i
  );
});

}
animateLoader();
animateVideo();
// at page 3 home bg color changing here 
gsap.to(".home", {
    backgroundColor: "#000000ff", // new color
    ease: "back.inOut(2)",
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        scrub: 5,
        start: "top 80%",
        end: "top 20%"
    }
})
page2_page3Animate();

animatethepics();
limitation();

