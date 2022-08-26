// document.documentElement.style.setProperty('--bgColor', 'green');

// ------------------------------ ICONS ------------------------------ 
// ------------------------------ Colors ------------------------------ 
const setting = document.querySelector(".icons1");
const theme = document.querySelector(".theme");
let count = 1;
setting.addEventListener('click', (e) => {
    e.preventDefault();
    count++;
    if (count % 2 == 0) {
        theme.style.position = "relative";
        theme.style.right = 0;
    } else {
        theme.style.position = "absolute";
        theme.style.right = "-200px";
    }
})

// ------------------------------ Body Color ------------------------------ 
function renkDegis(deger) {

    switch (deger) {
        case 1:
            document.documentElement.style.setProperty('--skin-color', 'tomato');
            break;
        case 2:
            document.documentElement.style.setProperty('--skin-color', 'rgb(57, 57, 255)');
            break;
        case 3:
            document.documentElement.style.setProperty('--skin-color', 'red');
            break;
        case 4:
            document.documentElement.style.setProperty('--skin-color', 'green');
            break;
        case 5:
            document.documentElement.style.setProperty('--skin-color', 'pink');
            break;
    }
}

// ------------------------------ Theme Color ------------------------------ 
const moon = document.querySelector(".icons2");
let count2 = 1;
moon.addEventListener('click', (e) => {
    e.preventDefault();
    count2++;
    if (count2 % 2 == 0) {
        document.documentElement.style.setProperty('--bg-black-900', '#151515');
        document.documentElement.style.setProperty('--bg-black-100', '#222222');
        document.documentElement.style.setProperty('--bg-black-50', '#393939');
        document.documentElement.style.setProperty('--text-black-900', '#ffffff');
        document.documentElement.style.setProperty('--text-black-700', '#e9e9e9');
        document.documentElement.style.setProperty('--text-black-400', '#ffffff');
        moon.innerHTML = `<i class="fa-solid fa-sun site-icons "></i>`

    } else {
        document.documentElement.style.setProperty('--bg-black-900', '#f2f2fc');
        document.documentElement.style.setProperty('--bg-black-100', '#fdf9ff');
        document.documentElement.style.setProperty('--bg-black-50', '#e8dfec');
        document.documentElement.style.setProperty('--text-black-900', '#302e4d');
        document.documentElement.style.setProperty('--text-black-700', '#504e70');
        document.documentElement.style.setProperty('--text-black-400', '#64618688');
        moon.innerHTML = `<i class="fa-solid fa-moon site-icons "></i>`
    }
})



// ------------------------------ Different Text ------------------------------ 

const typed = new Typed(".job", {
    strings: ["Front-End Developer", "Back-End Developer", "Youtuber"],
    typeSpeed: 100,
    BackSpeed: 60,
    loop: true
});


// Scroll Animate

// SCROLL BAR ANIMATION
console.log($(window).scrollTop());


// HOME
$(".nav-home").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 700);
    return false;
})

// ABOUT

$(".nav-about").click(function () {
    $("html,body").animate({ scrollTop: 1000 }, 700);
    return false;
})

// Services

$(".nav-services").click(function () {
    $("html,body").animate({ scrollTop: 3200 }, 700);
    return false;
})


// Portfolio
$(".nav-port").click(function () {
    $("html,body").animate({ scrollTop: 3880 }, 700);
    return false;
})

// Contact
$(".nav-contact").click(function () {
    $("html,body").animate({ scrollTop: 5550 }, 700);
    return false;
})

// More about me
$(".more").click(function () {
    $("html,body").animate({ scrollTop: 1000 }, 700);
    return false;
})


/*----------------- İLETİŞİM ---------------------- */

function sendEmail() {
    Email.send({
        SecureToken : "48d2252a-a024-4cab-aa3b-52d96499c30d",
        
        To: 'emre.mrt98@gmail.com',
        From: document.querySelector(".input2").value,
        Subject: document.querySelector(".input3").value,
        Body: document.querySelector(".textArea").value
    }).then(
        message => alert(message)
    );
}


/*----------------- LOADER ---------------------- */

const loader = document.querySelector('.loader');
const loaderText = document.querySelector('.loader-text');
setTimeout(() => {
    loaderText.style.animation = "text-animate 2s linear forwards"
}, 5000);
setTimeout(() => {
    loader.style.display = "none";
}, 9000);