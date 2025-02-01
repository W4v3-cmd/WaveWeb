window.addEventListener("scroll", () => {
    const logoContainer = document.querySelector(".main-intro");
    const textElement = document.querySelector(".hidden-text");
    const textBvn = document.querySelector(".bienvenue-txt");
    const swipeGif = document.querySelector(".swipeGif");
    const trait = document.querySelector(".trait-intro");

    const sectionBureau = document.getElementById("section-bureau"); //mettre ces variables en global pour gain de temps ?
    const sectionEntreprise = document.getElementById("section-entreprise");
    const sectionSoiree = document.getElementById("section-soiree");
    const sectionEvent = document.getElementById("section-event");
    const sectionVoyage = document.getElementById("section-voyage");
    const sectionCommunication = document.getElementById("section-communication");
    const sectionPolyvalent = document.getElementById("section-polyvalent");
    
    const searchBarContainer = document.querySelector(".search-bar-container");
    const secondSearchBarContainer = document.querySelector(".second-search-bar-container");

    if (window.scrollY > 30) {
        
        logoContainer.classList.add("logo-small");
        
        searchBarContainer.classList.add("fixed-container");
        secondSearchBarContainer.classList.add("second-fixed-container");
        textBvn.classList.add("rmvBvn");
        swipeGif.classList.add("rmvSwipeGif");


        sectionBureau.classList.add("active");
        sectionEntreprise.classList.add("active");
        sectionCommunication.classList.add("active");
        sectionEvent.classList.add("active");
        sectionSoiree.classList.add("active");
        sectionVoyage.classList.add("active");
        sectionPolyvalent.classList.add("active");
    
    } else {
    

        logoContainer.classList.remove("logo-small");
        searchBarContainer.classList.remove("fixed-container");
        secondSearchBarContainer.classList.remove("second-fixed-container");
        textBvn.classList.remove("rmvBvn");

        sectionBureau.classList.remove("active");
        sectionEntreprise.classList.remove("active");
        sectionCommunication.classList.remove("active");
        sectionEvent.classList.remove("active");
        sectionSoiree.classList.remove("active");
        sectionVoyage.classList.remove("active");
        sectionPolyvalent.classList.remove("active");
    }
});

//il existe surement un moyen de simplifier les boutton suivant a regarder ...

document.getElementById("bureau-button").addEventListener("click", () => {
    window.scrollTo({
        top: 300,
        left: 0,
        behavior: "smooth"
    });

});

document.getElementById("entreprise-button").addEventListener("click", () => {
        window.scrollTo({
            top: 1650,
            left: 0,
            behavior: "smooth"
        });
});

document.getElementById("communication-button").addEventListener("click", () => {
    window.scrollTo({
        top: 2575,
        left: 0,
        behavior: "smooth"
    });
});

document.getElementById("soiree-button").addEventListener("click", () => {
    window.scrollTo({
        top: 3500,
        left: 0,
        behavior: "smooth"
    });
});

document.getElementById("event-button").addEventListener("click", () => {
    window.scrollTo({
        top: 4425,
        left: 0,
        behavior: "smooth"
    });
});

document.getElementById("voyage-button").addEventListener("click", () => {
    window.scrollTo({
        top: 5350,
        left: 0,
        behavior: "smooth"
    });
});

document.getElementById("polyvalent-button").addEventListener("click", () => {
    window.scrollTo({
        top: 6275,
        left: 0,
        behavior: "smooth"
    });
});