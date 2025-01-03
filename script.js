window.addEventListener("scroll", () => {
    const logoContainer = document.querySelector(".main-intro");
    const textElement = document.querySelector(".hidden-text");
    const textBvn = document.querySelector(".bienvenue-txt");
    const swipeGif = document.querySelector(".swipeGif");
    const trait = document.querySelector(".trait-intro");
    
    const searchBarContainer = document.querySelector(".search-bar-container");

    if (window.scrollY > 30) {
        
        logoContainer.classList.add("logo-small");
        
        searchBarContainer.classList.add("fixed-container");
        textBvn.classList.add("rmvBvn");
        swipeGif.classList.add("rmvSwipeGif");
    } else {
        
        logoContainer.classList.remove("logo-small");
        
        searchBarContainer.classList.remove("fixed-container");
        textBvn.classList.remove("rmvBvn");
        swipeGif.classList.remove("rmvSwipeGif");
    }
});
