/*
=====================================================
E-CV Eddy Lemahieu — interactions
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
/* =====================================================
   CAREER TIMELINE
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".career-item");

    items.forEach(item => {

        const header = item.querySelector(".career-header");

        header.addEventListener("click", () => {

            // Ferme toutes les autres expériences

            items.forEach(other => {

                if (other !== item) {

                    other.classList.remove("active");

                    const icon = other.querySelector("i");

                    icon.classList.remove("fa-chevron-down");

                    icon.classList.add("fa-chevron-right");

                }

            });

            // Ouvre ou ferme celle sélectionnée

            item.classList.toggle("active");

            const icon = item.querySelector("i");

            if(item.classList.contains("active")){

                icon.classList.remove("fa-chevron-right");

                icon.classList.add("fa-chevron-down");

            }else{

                icon.classList.remove("fa-chevron-down");

                icon.classList.add("fa-chevron-right");

            }

        });

    });

});
/* =====================================================
CAREER TABS
===================================================== */

document.querySelectorAll(".career-item").forEach(item=>{

    const tabs=item.querySelectorAll(".tab");

    const panels=item.querySelectorAll(".tab-content");

    tabs.forEach((tab,index)=>{

        tab.addEventListener("click",(e)=>{

            e.stopPropagation();

            tabs.forEach(t=>t.classList.remove("active"));

            panels.forEach(p=>p.classList.remove("active"));

            tab.classList.add("active");

            panels[index].classList.add("active");

        });

    });

});

/* Prevent accidental image dragging while keeping navigation and selection usable. */
document.querySelectorAll("img").forEach((image) => {
    image.addEventListener("dragstart", (event) => event.preventDefault());
    image.addEventListener("contextmenu", (event) => event.preventDefault());
});
