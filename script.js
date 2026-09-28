// ========================================
// ELORA CAFÉ - JAVASCRIPT
// ========================================


// ========================================
// 1. SMOOTH SCROLLING
// ========================================

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ========================================
// 2. NAVBAR SCROLL EFFECT
// ========================================

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

}


// ========================================
// 3. ACTIVE NAVBAR LINK
// ========================================

const navLinks = document.querySelectorAll(".nav a");

if (navLinks.length > 0) {

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

}


// ========================================
// 4. RESERVATION FORM
// ========================================

const reservationForm = document.querySelector("#reservation-form");

if (reservationForm) {

    reservationForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");
        const guests = document.querySelector("#guests");
        const date = document.querySelector("#date");
        const time = document.querySelector("#time");

        if (
            name.value.trim() === "" ||
            email.value.trim() === "" ||
            phone.value.trim() === "" ||
            guests.value === "" ||
            date.value === "" ||
            time.value === ""
        ) {

            alert("Please fill in all the required fields.");

            return;
        }

        alert(
            "Thank you, " +
            name.value +
            "! Your table reservation has been submitted."
        );

        reservationForm.reset();

    });

}


// ========================================
// 5. CONTACT FORM
// ========================================

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#contact-name");
        const email = document.querySelector("#contact-email");
        const message = document.querySelector("#message");

        if (
            !name.value.trim() ||
            !email.value.trim() ||
            !message.value.trim()
        ) {

            alert("Please fill in all the fields.");

            return;
        }

        alert(
            "Thank you, " +
            name.value +
            "! Your message has been sent."
        );

        contactForm.reset();

    });

}


// ========================================
// 6. GALLERY LIGHTBOX
// ========================================

const galleryImages = document.querySelectorAll(".gallery-item img");

if (galleryImages.length > 0) {

    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            const lightbox = document.createElement("div");

            lightbox.classList.add("lightbox");

            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <button class="lightbox-close">&times;</button>
                    <img src="${image.src}" alt="${image.alt}">
                </div>
            `;

            document.body.appendChild(lightbox);

            const closeButton =
                lightbox.querySelector(".lightbox-close");

            closeButton.addEventListener("click", function () {
                lightbox.remove();
            });

            lightbox.addEventListener("click", function (event) {

                if (event.target === lightbox) {
                    lightbox.remove();
                }

            });

        });

    });

}


// ========================================
// 7. BACK TO TOP BUTTON
// ========================================

const backToTop = document.querySelector("#back-to-top");

if (backToTop) {

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {
            backToTop.classList.add("show");
        } else {
            backToTop.classList.remove("show");
        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ========================================
// 8. CURRENT YEAR
// ========================================

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// ========================================
// 9. CONSOLE MESSAGE
// ========================================

console.log("☕ Elora Café JavaScript loaded successfully!");