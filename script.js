window.addEventListener("scroll", () => {
    const logoContainer = document.querySelector(".main-intro");
    const textElement = document.querySelector(".hidden-text");
    const searchBarContainer = document.querySelector(".search-bar-container");

    if (window.scrollY > 30) {
        // Réduire le logo et le déplacer en haut à gauche
        logoContainer.classList.add("logo-small");
        // Fixer le conteneur sous le logo
        searchBarContainer.classList.add("fixed-container");
    } else {
        // Restaurer la position initiale du logo
        logoContainer.classList.remove("logo-small");
        // Restaurer la position initiale du conteneur
        searchBarContainer.classList.remove("fixed-container");
    }
});
