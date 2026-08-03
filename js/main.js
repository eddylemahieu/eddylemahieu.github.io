/*
=====================================================
E-CV Eddy Lemahieu
main.js
=====================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menu-toggle");
    const navigation = document.querySelector(".main-nav");

    if (!menuToggle || !navigation) {
        return;
    }

    menuToggle.addEventListener("click", () => {

        navigation.classList.toggle("active");

        const expanded =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            !expanded
        );

    });

});