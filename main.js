let docWidth;
let testDiv;
let logo;
let currentPage;
let productsPage;
let ourStoryPage;
let contactUsPage;

document.addEventListener("DOMContentLoaded", () => {
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

    ourStoryNav.style.color = "#429DAD";

    async function swapPage(fromPage, toPage, fromNav, toNav, pageName) {
        fromPage.style.opacity = 0;
        console.log(fromNav, 'im from nav');
        fromNav.style.color = "#FFFFFF";
        toNav.style.color = "#429DAD";
        console.log(toNav);
        setTimeout(() => {
            fromPage.style.display = 'none';
            toPage.style.display = 'block';
            toPage.style.opacity = 1;
            currentPage = pageName;
        }, 400);
        // let counter = 0;
    }

    productsNav.addEventListener("click", () => {
        // console.log(currentPage);
        // ourStoryNav.style.color = "#FFFFFF";
        // contactUsNav.style.color = "#FFFFFF";
        // productsNav.style.color = "#429DAD";
        // document.getElementById(`${currentPage}-container`).style.opacity = 0;
        // setTimeout(() => {
        //     document.getElementById(`${currentPage}-container`).style.display = 'none';
        //     productsPage.style.opacity = 1;
        //     productsPage.style.display = 'block';
        // }, 400);
        // currentPage = "products";
        let previousPage = document.getElementById(`${currentPage}-container`);
        let previousNav = document.getElementById(`${currentPage}-nav`);
        let nextPage = document.getElementById("products-container");
        let nextNav = document.getElementById("products-nav");
        let nextPageName = "products";

        if (currentPage !== "products") {
            swapPage(previousPage, nextPage, previousNav, nextNav, nextPageName);
        }
        
    });

    ourStoryNav.addEventListener("click", () => {
        let previousPage = document.getElementById(`${currentPage}-container`);
        let previousNav = document.getElementById(`${currentPage}-nav`);
        let nextPage = document.getElementById("our-story-container");
        let nextNav = document.getElementById("our-story-nav");
        let nextPageName = "our-story";
        // console.log(currentPage);
        // contactUsNav.style.color = "#FFFFFF";
        // productsNav.style.color = "#FFFFFF";
        // ourStoryNav.style.color = "#429DAD";
        // ourStoryPage.style.display = "block";
        // ourStoryPage.style.opacity = 1;
        // currentPage = "our-story";
        if (currentPage !== "our-story") {
            swapPage(previousPage, nextPage, previousNav, nextNav, nextPageName);
        }
        
    });

    contactUsNav.addEventListener("click", () => {
        currentPage = "contact-us";
        console.log(currentPage);
        ourStoryNav.style.color = "#FFFFFF";
        productsNav.style.color = "#FFFFFF";
        contactUsNav.style.color = "#429DAD";
    });
});
window.addEventListener("resize", () => {
    docWidth.innerHTML = visualViewport.width;
    logo.style.width = (`${Math.max(Math.round(visualViewport.width / 10.9), 120)}px`)
    console.log(logo);
})
