let navContainer = document.querySelector(".navContainer")
let menu = document.querySelector(".ri-menu-2-line")
let close = document.querySelector(".ri-close-circle-fill")

//show menu
menu.addEventListener('click', () => {
    navContainer.classList.add('active')
})

//hide menu
close.addEventListener('click', () => {
    navContainer.classList.remove('active')
})

//swiper Code 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    allowTouchMove: false,    // user scroll se rukawat nahi hogi (optional)
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    speed: 4000,
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    loopAdditionalSlides: 3,
    speed: 600,

    breakpoints: {
        1200: { slidesPerView: 3 },
        992: { slidesPerView: 2 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 },
        0: { slidesPerView: 1 }
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



//typed js
var typed = new Typed('#element', {
    strings: ['Appscript Developer', 'Appsheet Developer', 'Web Developer', 'Automation Expert','Google Workspace`'],
    typeSpeed: 50,
    loop: true,
    showCursor: false
});


//show experience

function showMore(e) {
    let mainContainer = e.parentElement
    let expInfo = e.parentElement.querySelector('.expinfo')

    if (expInfo.classList.contains('active')) {


        expInfo.classList.remove('active')
        e.innerHTML = 'Show Less'
    } else {
        expInfo.classList.add('active')
        mainContainer.style.height = "auto"
        e.innerHTML = 'Show More'
    }



}


//GSAP START

const tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });

// NAV ITEMS
tl.from("nav ul li, nav .logo h1", {
    y: -80,
    delay:0.8,
    stagger: 0.1
})

// INTRO H1
.from(".intro .left h1", {
    x: -120,
    stagger: 0.2
})

// INTRO PARAGRAPH
.from(".intro .left p", {
    x: 120,
    stagger: 0.2
})

// TYPED ELEMENT
.from("#element", {
    x: 120,
    stagger: 0.2
})

// BUTTON GROUP (Yaha problem solve ho jayegi!)
.from(".button-group a", {
    x: -200,
    stagger: 0.3
});

gsap.from('.right',{
    x:200,
    opacity:0,
    duration:1.5,
    delay:2
});


gsap.registerPlugin(ScrollTrigger);

// ODD elements
gsap.utils.toArray(".exp:nth-child(odd)").forEach((box) => {
    gsap.from(box, {
        x: -100,                 // left se aayega
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: box,
            start: "top 55%",   // jab element screen me enter ho
            toggleActions: "play none none reverse"
        }
    });
});

// EVEN elements
gsap.utils.toArray(".exp:nth-child(even)").forEach((box) => {
    gsap.from(box, {
        x: 100,              
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: box,
            start: "top 70%",
            toggleActions: "play none none reverse"
        }
    });
});


gsap.from('.aboutusleft img',{
    opacity:0,
    duration:2,
    y:-50,
    scrollTrigger:{
        scroller:'body',
        trigger:'.aboutusleft',
        start:"top 60%",
        toggleActions:"play none none reverse"
    }
})


gsap.from('.aboutusright ul li',{
    opacity:0,
    duration:2,
    y:-50,
    scrollTrigger:{
        scroller:'body',
        trigger:'.aboutusright',
        start:"top 70%",
        toggleActions:"play none none reverse"
    }
})

gsap.from(".contact-left",{
    x:-150,
    opacity:0,
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact-left",
        start: "top 60%",
        end: "top 70%",
        toggleActions : "play none none reverse"

    }
})


gsap.from(".contact-form",{
    x:150,
    opacity:0,
    duration:2,
    scrollTrigger:{
        scroller:"body",
        trigger:".contact-left",
        start: "top 60%",
        end: "top 70%",
        toggleActions : "play none none reverse"

    }
})


//send Enquiry to my mail


function sendMail(e) {

  e.preventDefault()
  let url ="https://script.google.com/macros/s/AKfycbw1YMX9WJ-hFnx82p-nm8SJAJL1kPq6Xonq-_uCI5dBFsAz0SUsy9WYLRxe9BGQSrc1rw/exec"

   let obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("desc").value
};

let payload = {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(obj)
};

fetch(url, payload)
.then(res => res.json())
.then(data => {
    console.log("Success:", data);
    document.querySelector(".contact-form").reset();
})
.catch(err => console.log("Error:", err));


}
