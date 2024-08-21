let docWidth;
let testDiv;

document.addEventListener("DOMContentLoaded", () => {
    console.log(visualViewport.width);
    docWidth = document.createElement("div");
    testDiv = document.getElementById("test");
    testDiv.appendChild(docWidth);
    docWidth.innerHTML = visualViewport.width;
    
});
window.addEventListener("resize", () => {
    docWidth.innerHTML = visualViewport.width;
})