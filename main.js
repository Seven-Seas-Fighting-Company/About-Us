let docWidth;
let testDiv;
let logo;
let currentPage;
let productsPage;
let ourStoryPage;
let contactUsPage;
let containers;

document.addEventListener("DOMContentLoaded", () => {
    
    //add buy now button below products, include free shipping for sf and san luis obispo

    console.log(visualViewport.width);
    docWidth = document.createElement("div");
    testDiv = document.getElementById("test");
    testDiv.appendChild(docWidth);
    docWidth.innerHTML = visualViewport.width;
    logo = document.getElementById("logo");
    currentPage = "our-story";

    let productsNav = document.getElementById("products-nav");
    let ourStoryNav = document.getElementById("our-story-nav");
    let contactUsNav = document.getElementById("contact-us-nav");

    productsPage = document.getElementById("products-container");
    ourStoryPage = document.getElementById("our-story-container");
    contactUsPage = document.getElementById("contact-us-container");

    productsPage.style.display = 'none';
    contactUsPage.style.display = 'none';

    // ourStoryNav.style.color = "#429DAD";
    ourStoryNav.classList.add("selected");

    function swapPage(fromPage, toPage, fromNav, toNav, pageName) {
        fromPage.style.opacity = 0;
        console.log(fromNav, 'im from nav');
        // fromNav.style.color = "#FFFFFF";
        // toNav.style.color = "#429DAD";
        fromNav.classList.remove("selected");
        toNav.classList.add("selected");
        console.log(toNav);
        let counter = 0;
        let interval = setInterval(() => {
            if (counter === 0) {
                fromPage.style.display = 'none';
                toPage.style.display = 'block';
                currentPage = pageName;
                counter += 1;
            } else if (counter === 1) {
                toPage.style.opacity = 1;
                counter += 1;
            } else {
                counter = 0;
                clearInterval(interval);
            }
        }, 200)
    }

    if (visualViewport.width <= 768) {
        document.getElementById("header-bottom-text").style.display = "none";
        document.getElementById("header-main").style.display = "none";
    }

    productsNav.addEventListener("click", () => {
        let previousPage = document.getElementById(`${currentPage}-container`);
        let previousNav = document.getElementById(`${currentPage}-nav`);
        let nextPage = document.getElementById("products-container");
        let nextNav = document.getElementById("products-nav");
        let nextPageName = "products";

        if (currentPage !== "products") {
            swapPage(previousPage, nextPage, previousNav, nextNav, nextPageName);
        };
        
    });

    ourStoryNav.addEventListener("click", () => {
        let previousPage = document.getElementById(`${currentPage}-container`);
        let previousNav = document.getElementById(`${currentPage}-nav`);
        let nextPage = document.getElementById("our-story-container");
        let nextNav = document.getElementById("our-story-nav");
        let nextPageName = "our-story";
        if (currentPage !== "our-story") {
            swapPage(previousPage, nextPage, previousNav, nextNav, nextPageName);
        };
        
    });

    contactUsNav.addEventListener("click", () => {
        let previousPage = document.getElementById(`${currentPage}-container`);
        let previousNav = document.getElementById(`${currentPage}-nav`);
        let nextPage = document.getElementById("contact-us-container");
        let nextNav = document.getElementById("contact-us-nav");
        let nextPageName = "contact-us";
        if (currentPage !== "contact-us") {
            swapPage(previousPage, nextPage, previousNav, nextNav, nextPageName);
        };
    });
});
/*
window.addEventListener("resize", () => {
    docWidth.innerHTML = visualViewport.width;
    logo.style.width = (`${Math.max(Math.round(visualViewport.width / 10.9), 120)}px`)
    console.log(logo);
});
*/

window.addEventListener("resize", () => {
    docWidth.innerHTML = visualViewport.width;
    if (visualViewport.width <= 768) {
        logo.style.width = '100px';
    } else {
        logo.style.width = (`${Math.max(Math.round(visualViewport.width / 10.9), 90)}px`);

    }

    // console.log(containers);
    // console.log(docWidth)

    if (visualViewport.width > 768) {
        
        ourStoryPage.style.marginRight = `${Math.min(400, Math.max(100, 400 - (1920 - visualViewport.width) / 2))}px`;
        productsPage.style.marginRight = `${Math.min(400, Math.max(100, 400 - (1920 - visualViewport.width) / 2))}px`;
        contactUsPage.style.marginRight = `${Math.min(400, Math.max(100, 400 - (1920 - visualViewport.width) / 2))}px`;
        
        ourStoryPage.style.marginLeft = `${Math.min(400, Math.max(100, 400 - (1920 - visualViewport.width) / 2))}px`;
        productsPage.style.marginLeft = `${Math.min(400, Math.max(100, 400 - (1920 - visualViewport.width) / 2))}px`;
        contactUsPage.style.marginLeft = `${Math.min(400, Math.max(100, 400 - (1920 - visualViewport.width) / 2))}px`;
        
        document.getElementById("header-main").style.display = "block";
        document.getElementById("header-bottom-text").style.display = "block";
    } else {
        document.getElementById("header-bottom-text").style.display = "none";
        document.getElementById("header-main").style.display = "none";
    }
    
    // console.log(logo);
});

