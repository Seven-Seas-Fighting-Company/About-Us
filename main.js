let docWidth;
let testDiv;
let logo;
let currentPage;

document.addEventListener("DOMContentLoaded", () => {
    console.log(visualViewport.width);
    docWidth = document.createElement("div");
    testDiv = document.getElementById("test");
    testDiv.appendChild(docWidth);
    docWidth.innerHTML = visualViewport.width;
    logo = document.getElementById("logo");
    currentPage = "our story";
    let productsNav = document.getElementById("products-nav");
    let ourStoryNav = document.getElementById("our-story-nav");
    let contactUsNav = document.getElementById("contact-us-nav");

    ourStoryNav.style.color = "#429DAD"

    productsNav.addEventListener("click", () => {
        currentPage = "products";
        console.log(currentPage);
        ourStoryNav.style.color = "#FFFFFF";
        contactUsNav.style.color = "#FFFFFF";
        productsNav.style.color = "#429DAD";
        // document.getElementById("our-story-container").style.visibility = "hidden";
        document.getElementById("our-story-container").classList.add("fade-out");
        // document.getElementById("our-story-container").style.opacity = 0;
    });

    ourStoryNav.addEventListener("click", () => {
        currentPage = "our story";
        console.log(currentPage);
        contactUsNav.style.color = "#FFFFFF";
        productsNav.style.color = "#FFFFFF";
        ourStoryNav.style.color = "#429DAD";
        document.getElementById("our-story-container").style.visibility = "visible";
    });

    contactUsNav.addEventListener("click", () => {
        currentPage = "contact us";
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
