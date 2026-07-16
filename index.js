gsap.registerPlugin(ScrollTrigger, SplitText)

// Hero
const stroke = document.querySelector(".stroke path")
const length = stroke.getTotalLength()

gsap.set(stroke, {
  strokeDasharray: length,
  strokeDashoffset: length,
})

gsap.to(stroke, {
  strokeDashoffset: 0,
  duration: 1,
  ease: "power2.inOut",
  repeat: -1,
  repeatDelay: 1,
  yoyo: true,
})

document.querySelectorAll("svg path").forEach((path) => {
  const length = path.getTotalLength()

  gsap.set(path, {
    strokeDasharray: length,
    strokeDashoffset: length,
  })

  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 2,
    ease: "power3.out",
    delay: 0.5,
  })
})

const tl = gsap.timeline({
  defaults: {
    ease: "power3.out",
  },
})

tl.from(".logo", {
  opacity: 0,
  y: 40,
  scale: 0.8,
  duration: 1,
})

const title = new SplitText(".hero-article-1 h1", {
  type: "words,chars",
})

tl.from(
  title.chars,
  {
    opacity: 0,
    yPercent: 120,
    rotate: 10,
    stagger: 0.02,
    duration: 0.8,
  },
  "-=0.5",
)

tl.from(
  ".sous-titre",
  {
    opacity: 0,
    y: 30,
    duration: 0.8,
  },
  "-=0.5",
)
tl.from(
  ".info",
  {
    opacity: 0,
    y: 30,
    duration: 0.8,
  },
  "-=0.6",
)

tl.from(
  ".hero-article-2 img",
  {
    opacity: 0,
    scale: 0.8,
    y: 80,
    duration: 1,
  },
  "-=0.8",
)

tl.from(
  ".polygon",
  {
    opacity: 0,
    rotate: -90,
    scale: 0,
    duration: 0.8,
  },
  "-=0.6",
)

tl.from(
  ".stroke",
  {
    opacity: 0,
    scale: 0,
    rotate: -30,
    duration: 0.7,
  },
  "-=0.5",
)

gsap.to(".circle-container text", {
  rotate: 360,
  transformOrigin: "center",
  duration: 20,
  repeat: -1,
  ease: "none",
})

gsap.to(".smoke", {
  y: -40,
  x: -20,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
})

gsap.to(".smoke-2", {
  y: 40,
  x: 30,
  duration: 6,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
})

gsap.to(".circle-text", {
  rotation: 360,
  transformOrigin: "125px 125px",
  duration: 20,
  repeat: -1,
  ease: "none",
})

const float = (element, y, duration) => {
  gsap.to(element, {
    y,
    rotation: 3,
    duration,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true,
  })
}

float(".stroke", 2, 2)
float(".polygon", 15, 2.5)
float(".red-tri", 15, 2.5)
float(".left-tri", 15, 2.5)

const sections = [
  "header",
  ".section-1",
  ".section-2",
  ".section-3",
  ".section-4",
  "footer",
]

sections.forEach((section, index) => {
  const el = document.querySelector(section)

  ScrollTrigger.create({
    trigger: el,
    start: "bottom bottom",
    end: "+=1000",
    pin: true,
    pinSpacing: false,
    onEnter: () => {
      el.style.zIndex = index + 1
    },
  })
})

const section1 = document.querySelector(".section-1")

const s1Title = new SplitText(".section-1 h2", {
  type: "lines",
  linesClass: "line",
})

const s1Heading = new SplitText(".section-1 .section-1-h", {
  type: "lines",
  linesClass: "line",
})

const s1Text = new SplitText(".section-1 .text", {
  type: "lines",
  linesClass: "line",
})

const tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: section1,
    start: "top 70%",
    end: "top top",
    scrub: 1,
  },
})

tl1
  .from(".section-1 .red-tri", {
    x: -100,
    y: -100,
    rotate: -45,
    opacity: 0,
    ease: "power3.out",
  })

  .from(
    s1Title.lines,
    {
      yPercent: 100,
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.12,
      duration: 0.8,
      ease: "power4.out",
    },
    "-=0.4",
  )

  .from(
    s1Heading.lines,
    {
      yPercent: 100,
      opacity: 0,
      filter: "blur(10px)",
      duration: 0.7,
      ease: "power4.out",
    },
    "-=0.4",
  )

  .from(
    s1Text.lines,
    {
      y: 30,
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.08,
      duration: 0.7,
      ease: "power3.out",
    },
    "-=0.3",
  )

  .from(
    ".section-1 .button",
    {
      y: 30,
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)",
    },
    "-=0.2",
  )

  .from(
    ".section-1 .article-4 > div",
    {
      x: 200,
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.5",
  )

  .from(
    ".section-1 .left-tri",
    {
      x: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.8",
  )

// Section2
const section2 = document.querySelector(".section-2")

const s2Title = new SplitText(".section-2 h2", {
  type: "lines",
  linesClass: "line",
})

const s2CardsText = new SplitText(".section-2 .text p", {
  type: "lines",
  linesClass: "line",
})

const s2BottomText = new SplitText(".section-2 > .content-container > p", {
  type: "lines",
  linesClass: "line",
})

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: section2,
    start: "top 70%",
    end: "top top",
    scrub: 1,
  },
})

tl2
  .from(".section-2 .side", {
    x: (i) => (i === 0 ? -100 : 100),
    opacity: 0,
    duration: 1,
    ease: "power3.out",
  })

  // Main title
  .from(
    s2Title.lines,
    {
      yPercent: 100,
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.12,
      duration: 0.8,
      ease: "power4.out",
    },
    "-=0.5",
  )

  // Cards
  .from(
    ".section-2 .content",
    {
      y: 100,
      opacity: 0,
      scale: 0.9,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    },
    "-=0.3",
  )

  // Icons
  .from(
    ".section-2 .img-container",
    {
      scale: 0,
      rotate: 180,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
    },
    "-=0.7",
  )

  // Secret titles
  .from(
    ".section-2 h3",
    {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.6",
  )

  // Card paragraphs
  .from(
    s2CardsText.lines,
    {
      y: 20,
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.05,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.7",
  )

  .from(
    s2BottomText.lines,
    {
      y: 30,
      opacity: 0,
      filter: "blur(10px)",
      stagger: 0.06,
      duration: 0.6,
      ease: "power3.out",
    },
    "-=0.3",
  )

  .from(
    ".section-2 .button",
    {
      y: 40,
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      ease: "back.out(1.7)",
    },
    "-=0.2",
  )
//Section3
const section3 = document.querySelector(".section-3")
const stroke2 = document.querySelector(".stroke2 path")
const length2 = stroke2.getTotalLength()

const tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: section3,
    start: "top 70%",
    end: "top top",
    scrub: 1,
    onEnter: () => {
      gsap.to(stroke2, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 1,
        yoyo: true,
      })
    },
  },
})

tl3
  .from(".section-3 .h2-1", {
    x: -100,
    opacity: 0,
  })
  .from(
    ".section-3 .h2-2",
    {
      x: 100,
      opacity: 0,
    },
    "-=0.5",
  )
  .from(
    ".section-3 svg",
    {
      scale: 0,
      rotate: 45,
      opacity: 0,
    },
    "-=0.3",
  )
  .from(
    ".section-3 .cards-container img",
    {
      y: 100,
      opacity: 0,
      scale: 0.8,
      stagger: 0.15,
    },
    "-=0.3",
  )
  .from(
    ".section-3 .p-container",
    {
      y: 50,
      opacity: 0,
    },
    "-=0.2",
  )

const slider = document.querySelector(".cards-container")
const slides = document.querySelectorAll(".cards-container img")
const buttons = document.querySelectorAll(".b-container button")

let current = 0

function updateSlides() {
  slides.forEach((slide, index) => {
    gsap.to(slide, {
      scale: index === current ? 1 : 0.85,
      opacity: index === current ? 1 : 0.4,
      duration: 0.4,
      ease: "power2.out",
    })
  })
  buttons.forEach((b, index) => {
    gsap.to(b, {
      backgroundColor: index === current ? "#db3d4c" : "#666666",
      duration: 0.4,
      ease: "power2.out",
    })
  })
}

function goToSlide(index) {
  current = index

  gsap.to(slider, {
    xPercent: -50 * current,
    duration: 0.8,
    ease: "power3.out",
  })

  updateSlides()

  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === current)
  })
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    goToSlide(index)
  })
})

goToSlide(0)

//Section4
const tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-4",
    start: "top 70%",
    end: "top top",
    scrub: 1,
  },
})

tl4
  .from(".article-5 h2", {
    y: 100,
    opacity: 0,
    duration: 1,
  })
  .from(
    ".article-5 p",
    {
      y: 60,
      opacity: 0,
    },
    "-=0.5",
  )
  .from(
    ".article-5 .button",
    {
      y: 40,
      opacity: 0,
      scale: 0.8,
    },
    "-=0.3",
  )
  .from(
    ".article-6 img",
    {
      x: 150,
      opacity: 0,
      scale: 0.9,
    },
    "-=0.7",
  )
  .from(
    ".ant",
    {
      x: -150,
      opacity: 0,
    },
    "-=0.8",
  )
  .from(
    ".oine",
    {
      x: 150,
      opacity: 0,
    },
    "-=0.8",
  )
  .from(
    ".blanco",
    {
      y: 80,
      opacity: 0,
    },
    "-=0.5",
  )
