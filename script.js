window.addEventListener("scroll", () => {
    const logoContainer = document.querySelector(".main-intro");
    const textElement = document.querySelector(".hidden-text");
    const textBvn = document.querySelector(".bienvenue-txt");
    
    const searchBarContainer = document.querySelector(".search-bar-container");

    if (window.scrollY > 30) {
        
        logoContainer.classList.add("logo-small");
        
        searchBarContainer.classList.add("fixed-container");
        textBvn.classList.add("rmvBvn");
    } else {
        
        logoContainer.classList.remove("logo-small");
        
        searchBarContainer.classList.remove("fixed-container");
        textBvn.classList.remove("rmvBvn");
    }
});
