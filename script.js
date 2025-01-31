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
    const section = document.getElementById("section-bureau");
    section.classList.toggle("active");
    document.getElementById("section-entreprise").classList.remove("active");
    document.getElementById("section-soiree").classList.remove("active");
    document.getElementById("section-event").classList.remove("active");
    document.getElementById("section-polyvalent").classList.remove("active");
    document.getElementById("section-communication").classList.remove("active");
    document.getElementById("section-voyage").classList.remove("active");


});

document.getElementById("entreprise-button").addEventListener("click", () => {
    const section = document.getElementById("section-entreprise");
    section.classList.toggle("active");
    document.getElementById("section-bureau").classList.remove("active");
    document.getElementById("section-soiree").classList.remove("active");
    document.getElementById("section-event").classList.remove("active");
    document.getElementById("section-polyvalent").classList.remove("active");
    document.getElementById("section-communication").classList.remove("active");
    document.getElementById("section-voyage").classList.remove("active");

});

document.getElementById("soiree-button").addEventListener("click", () => {
    const section = document.getElementById("section-soiree");
    section.classList.toggle("active");
    document.getElementById("section-entreprise").classList.remove("active");
    document.getElementById("section-bureau").classList.remove("active");
    document.getElementById("section-event").classList.remove("active");
    document.getElementById("section-polyvalent").classList.remove("active");
    document.getElementById("section-communication").classList.remove("active");
    document.getElementById("section-voyage").classList.remove("active");

});

document.getElementById("event-button").addEventListener("click", () => {
    const section = document.getElementById("section-event");
    section.classList.toggle("active");
    document.getElementById("section-entreprise").classList.remove("active");
    document.getElementById("section-bureau").classList.remove("active");
    document.getElementById("section-soiree").classList.remove("active");
    document.getElementById("section-polyvalent").classList.remove("active");
    document.getElementById("section-communication").classList.remove("active");
    document.getElementById("section-voyage").classList.remove("active");

});

document.getElementById("voyage-button").addEventListener("click", () => {
    const section = document.getElementById("section-voyage");
    section.classList.toggle("active");
    document.getElementById("section-entreprise").classList.remove("active");
    document.getElementById("section-bureau").classList.remove("active");
    document.getElementById("section-event").classList.remove("active");
    document.getElementById("section-polyvalent").classList.remove("active");
    document.getElementById("section-communication").classList.remove("active");
    document.getElementById("section-soiree").classList.remove("active");

});

document.getElementById("communication-button").addEventListener("click", () => {
    const section = document.getElementById("section-communication");
    section.classList.toggle("active");
    document.getElementById("section-entreprise").classList.remove("active");
    document.getElementById("section-bureau").classList.remove("active");
    document.getElementById("section-event").classList.remove("active");
    document.getElementById("section-polyvalent").classList.remove("active");
    document.getElementById("section-soiree").classList.remove("active");
    document.getElementById("section-voyage").classList.remove("active");

});

document.getElementById("polyvalent-button").addEventListener("click", () => {
    const section = document.getElementById("section-polyvalent");
    section.classList.toggle("active");
    document.getElementById("section-entreprise").classList.remove("active");
    document.getElementById("section-bureau").classList.remove("active");
    document.getElementById("section-event").classList.remove("active");
    document.getElementById("section-soiree").classList.remove("active");
    document.getElementById("section-communication").classList.remove("active");
    document.getElementById("section-voyage").classList.remove("active");

});