window.addEventListener("scroll", () => {
    const logoContainer = document.querySelector(".main-intro");
    const textElement = document.querySelector(".hidden-text");
    const textBvn = document.querySelector(".bienvenue-txt");
    
    const searchBarContainer = document.querySelector(".search-bar-container");

    if (window.scrollY > 30) {
        // Réduire le logo et le déplacer en haut à gauche
        logoContainer.classList.add("logo-small");
        // Fixer le conteneur sous le logo
        searchBarContainer.classList.add("fixed-container");
        textBvn.classList.add("rmvBvn");
    } else {
        // Restaurer la position initiale du logo
        logoContainer.classList.remove("logo-small");
        // Restaurer la position initiale du conteneur
        searchBarContainer.classList.remove("fixed-container");
        textBvn.classList.remove("rmvBvn");
    }
});
