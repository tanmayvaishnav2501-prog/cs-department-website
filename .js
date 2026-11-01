// ===============================
// CS DEPARTMENT WEBSITE JAVASCRIPT
// ===============================


// 1. MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

}


// 2. CLOSE MENU AFTER CLICKING LINK
if (navLinks) {

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            if (menuToggle) {
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            }

        });

    });

}


// 3. AUTOMATIC CURRENT YEAR
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// 4. CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        if (formNote) {

            formNote.textContent =
                "Thank you! Your message has been received in this demo.";

        }

        contactForm.reset();

    });

}


// 5. SMOOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId && targetId.length > 1) {

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    });

});


// 6. WEBSITE LOADED
console.log("Computer Science Department Website Loaded Successfully!");