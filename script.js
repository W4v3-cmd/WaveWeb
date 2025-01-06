window.addEventListener("scroll", () => {
    const logoContainer = document.querySelector(".main-intro");
    const textElement = document.querySelector(".hidden-text");
    const textBvn = document.querySelector(".bienvenue-txt");
    const swipeGif = document.querySelector(".swipeGif");
    const trait = document.querySelector(".trait-intro");
    const sectionBureau = document.getElementById("section-bureau");
    const sectionPoleEntreprise = document.getElementById("section-pole-entreprise");
    const sectionPoleCom = document.getElementById("section-pole-com");
    
    const searchBarContainer = document.querySelector(".search-bar-container");

    if (window.scrollY > 30) {
        
        logoContainer.classList.add("logo-small");
        
        searchBarContainer.classList.add("fixed-container");
        textBvn.classList.add("rmvBvn");
        swipeGif.classList.add("rmvSwipeGif");
        sectionBureau.classList.add("active");
        sectionPoleEntreprise.classList.add("active");
        sectionPoleCom.classList.add("active");

    } else {
        
        logoContainer.classList.remove("logo-small");
        
        searchBarContainer.classList.remove("fixed-container");
        textBvn.classList.remove("rmvBvn");
        sectionBureau.classList.remove("active");
        sectionPoleEntreprise.classList.remove("active");
        sectionPoleCom.classList.remove("active");
    }
});
