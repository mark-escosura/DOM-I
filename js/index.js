const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
// header selector
const linkOne = document.createElement('a');
const linkTwo = document.createElement('a');
const linkThree = document.createElement('a');
const linkFour = document.createElement('a');
const linkFive = document.createElement('a');
const linkSix = document.createElement('a');
let logo = document.getElementById("logo-img");
// nav-html
linkOne.textContent = siteContent['nav']['nav-item-1'];
linkOne.href = '#';
document.querySelector('nav').appendChild(linkOne);
linkTwo.textContent = siteContent['nav']['nav-item-2'];
linkTwo.href = '#';
document.querySelector('nav').appendChild(linkTwo);
linkThree.textContent = siteContent['nav']['nav-item-3'];
linkThree.href = '#';
document.querySelector('nav').appendChild(linkThree);
linkFour.textContent = siteContent['nav']['nav-item-4'];
linkFour.href = '#';
document.querySelector('nav').appendChild(linkFour);
linkFive.textContent = siteContent['nav']['nav-item-5'];
linkFive.href = '#';
document.querySelector('nav').appendChild(linkFive);
linkSix.textContent = siteContent['nav']['nav-item-6'];
linkSix.href = '#';
document.querySelector('nav').appendChild(linkSix);
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// cta selector
const imageFirstCard = document.querySelector('#cta-img');
const titleFirstCard = document.querySelector('h1');
const buttonFirstCard = document.querySelector('button');
// cta
imageFirstCard.src = siteContent['cta']['img-src'];
titleFirstCard.textContent = siteContent['cta']['h1'];
buttonFirstCard.textContent = siteContent['cta']['button'];

// main-content-selectors

const mainContentSelector = document.querySelectorAll('.main-content');
const textContentSelector = document.querySelectorAll('.text-content');
const mainContImg = document.querySelector('#middle-img');

const textContent1 = textContentSelector[0];
const textContent1h = textContent1.querySelector('h4');
const textContent1p = textContent1.querySelector('p');

const textContent2 = textContentSelector[1];
const textContent2h = textContent2.querySelector('h4');
const textContent2p = textContent2.querySelector('p');

const textContent3 = textContentSelector[2];
const textContent3h = textContent3.querySelector('h4');
const textContent3p = textContent3.querySelector('p');

const textContent4 = textContentSelector[3];
const textContent4h = textContent4.querySelector('h4');
const textContent4p = textContent4.querySelector('p');

const textContent5 = textContentSelector[4];
const textContent5h = textContent5.querySelector('h4');
const textContent5p = textContent5.querySelector('p');

// main-content

mainContImg.src = siteContent['main-content']['middle-img-src'];

textContent1h.textContent = siteContent['main-content']['features-h4'];
textContent1p.textContent = siteContent['main-content']['features-content'];

textContent2h.textContent = siteContent['main-content']['about-h4'];
textContent2p.textContent = siteContent['main-content']['about-content']

textContent3h.textContent = siteContent['main-content']['services-h4'];
textContent3p.textContent = siteContent['main-content']['services-content'];

textContent4h.textContent = siteContent['main-content']['product-h4'];
textContent4p.textContent = siteContent['main-content']['product-content'];

textContent5h.textContent = siteContent['main-content']['vision-h4'];
textContent5p.textContent = siteContent['main-content']['vision-content'];

//contact selector 
const contactH4 = document.querySelector('.contact h4');
const address = document.querySelector('.contact p:nth-of-type(1)');
const phone = document.querySelector('.contact p:nth-of-type(2)');
const email = document.querySelector('.contact p:nth-of-type(3)');
// contact
contactH4.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];

// footer selector
const footer = document.querySelector('footer p');
// footer
footer.textContent = siteContent['footer']['copyright'];

// css
linkOne.style.color= 'green';
linkTwo.style.color= 'green';
linkThree.style.color= 'green';
linkFour.style.color= 'green';
linkFive.style.color= 'green';
linkSix.style.color= 'green';
linkSeven.style.color = 'green'

const linkSeven = document.createElement('a');
linkSeven.textContent = 'Shop';
linkSeven.href = '#';
document.querySelector('nav').appendChild(linkSeven);


