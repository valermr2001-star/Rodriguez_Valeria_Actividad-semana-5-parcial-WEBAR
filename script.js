/* =====================================================
   BOGOTAFITDEALS
   JAVASCRIPT
===================================================== */


/* ===============================
   MOBILE MENU
================================ */

const menuToggle = document.getElementById("menuToggle");

const menu = document.querySelector(".menu");


if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        menu.classList.toggle("mobile-open");

    });

}


/* ===============================
   CLOSE MOBILE MENU
================================ */

const menuLinks = document.querySelectorAll(".menu a");


menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("mobile-open");

    });

});


/* ===============================
   PRODUCT MODEL
================================ */

const productModel =
    document.getElementById("productModel");


if (productModel) {

    productModel.addEventListener(
        "load",
        () => {

            console.log(
                "Modelo 3D cargado correctamente."
            );

        }
    );


    productModel.addEventListener(
        "error",
        () => {

            console.log(
                "No se pudo cargar el modelo 3D."
            );

        }
    );

}


/* ===============================
   SIZE SELECTOR
================================ */

const sizes =
    document.querySelectorAll(".size");

const sizeMessage =
    document.getElementById("sizeMessage");

const buyButton =
    document.getElementById("buyButton");


let selectedSize = null;


sizes.forEach(size => {

    size.addEventListener("click", () => {

        sizes.forEach(item => {

            item.classList.remove("active");

        });


        size.classList.add("active");


        selectedSize = size.textContent;


        sizeMessage.textContent =
            `Talla seleccionada: ${selectedSize}`;


        /*
        Cambiamos el enlace de WhatsApp
        */

        const message =
            `Hola, estoy interesado en los adidas Terrex Skychaser AX5 GORE-TEX de BogotaFitDeals. Talla: ${selectedSize}. Precio: $260.000`;

        const encodedMessage =
            encodeURIComponent(message);


        /*
        CAMBIA ESTE NÚMERO POR TU WHATSAPP

        Ejemplo:

        https://wa.me/573001234567

        */

        const phone =
            "573001234567";


        buyButton.href =
            `https://wa.me/${phone}?text=${encodedMessage}`;

    });

});


/* ===============================
   PREVENT BUY WITHOUT SIZE
================================ */

if (buyButton) {

    buyButton.addEventListener(
        "click",
        (event) => {

            if (!selectedSize) {

                event.preventDefault();

                sizeMessage.textContent =
                    "⚠ Selecciona una talla antes de continuar.";

                sizeMessage.style.color =
                    "#c7ff00";

            }

        }
    );

}


/* ===============================
   3D MODEL INTERACTION
================================ */

if (productModel) {

    productModel.addEventListener("load", () => {

        console.log("Modelo 3D cargado correctamente.");

        const modelError = document.getElementById("modelError");

        if (modelError) {
            modelError.style.display = "none";
        }

    });

}

    /*
    Pausar rotación mientras el usuario
    interactúa con el modelo.
    */

    productModel.addEventListener(
        "pointerdown",
        () => {

            productModel.autoRotate = false;

        }
    );


    productModel.addEventListener(
        "pointerup",
        () => {

            setTimeout(() => {

                productModel.autoRotate = true;

            }, 3000);

        }
    );

}


/* ===============================
   SCROLL REVEAL
================================ */

const revealElements =
    document.querySelectorAll(
        ".use-card, .tech-item, .section-heading, .price-content, .buy-form"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "reveal-visible"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* ===============================
   PRICE ANCHOR ANIMATION
================================ */

const currentPrice =
    document.querySelector(".current-price");


if (currentPrice) {

    const priceObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        currentPrice.classList.add(
                            "price-highlight"
                        );

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    priceObserver.observe(currentPrice);

}


/* ===============================
   CONSOLE MESSAGE
================================ */

console.log(
`
========================================

        BOGOTAFITDEALS

        adidas TERREX
        SKYCHASER AX5 GORE-TEX

        $260.000

========================================
`
);
