document.addEventListener("DOMContentLoaded", () => {

    let currentPage = "story-page";
    

    let productsLink = document.getElementById("products-link");
    let storyLink = document.getElementById("story-link");
    let contactLink = document.getElementById("contact-link");
    
    
    let currentLink = "story-link";
    storyLink.classList.add("selected");
    
    let swappable = true;
    
    let handwrapsButton = document.getElementById("handwraps-order-button");
    let handwrapsXOut = document.getElementById("handwraps-modal-x-out");
    let handwrapsSubmitOrderButton = document.getElementById("handwraps-submit-order-button");
    

    function swapPage(from, fromLink, to, toLink) {
        let cPage = document.getElementById(from);
        if (currentPage !== to) {
            cPage.style.opacity = 0;
            document.getElementById(fromLink).classList.remove("selected");
            document.getElementById(toLink).classList.add("selected");
            currentLink = toLink;
            swappable = false;
            setTimeout(() => {
                cPage.style.display = "none";
                currentPage = to;
                document.getElementById(to).style.display = "block";
            }, 400);

            setTimeout(() => {
                document.getElementById(to).style.opacity = 1;
            }, 410);

            setTimeout(() => {swappable = true;}, 900);
        }
    };

    function openProductModal(productName) {
        let modal = document.getElementById(`${productName}-modal`);
        modal.style.display = "block";
        setTimeout(() => {
            modal.style.opacity = 1;
        }, 10);
    }

    function closeProductModal(productName) {
        let modal = document.getElementById(`${productName}-modal`);
        modal.style.opacity = 0;
        setTimeout(() => {modal.style.display = "none";}, 400);
    }

    function submitProductOrder(productName) {
        let form = document.getElementById(`${productName}-order-form`);
        form.submit();
        setTimeout(() => {
            form.reset();
        }, 900);
    }


    handwrapsButton.addEventListener("click", () => {
        openProductModal("handwraps");
    });

    handwrapsXOut.addEventListener("click", () => {
        closeProductModal("handwraps");
    });

    handwrapsSubmitOrderButton.addEventListener("click", () => {
        submitProductOrder("handwraps");
    })

    productsLink.addEventListener("click", () => {
        if (swappable) {
            swapPage(currentPage, currentLink, "products-page", "products-link");
        }
    });

    storyLink.addEventListener("click", () => {
        if (swappable) {
            swapPage(currentPage, currentLink, "story-page", "story-link");
        }
    });

    contactLink.addEventListener("click", () => {
        if (swappable) {
            swapPage(currentPage, currentLink, "contact-page", "contact-link");
        }
    });


});