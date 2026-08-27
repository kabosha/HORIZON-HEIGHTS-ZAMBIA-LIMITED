
/* ================================
   MOBILE NAVIGATION
================================ */

const menuButton = document.getElementById("menu-button");

const navLinks = document.getElementById("nav-links");


if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("open");

    });

}



/* ================================
   BOOKING FORM
================================ */

const bookingForm =
    document.getElementById("booking-form");


if (bookingForm) {

    bookingForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value;


            const phone =
                document.getElementById("phone").value;


            const date =
                document.getElementById("date").value;


            const time =
                document.getElementById("time").value;


            const message =
                document.getElementById("message").value;


            const whatsappMessage =

                "Hello Horizon Heights Zambia Limited." +

                "\n\n" +

                "I would like to book a site viewing." +

                "\n\n" +

                "Name: " +
                name +

                "\n" +

                "Phone: " +
                phone +

                "\n" +

                "Preferred Date: " +
                date +

                "\n" +

                "Preferred Time: " +
                time +

                "\n" +

                "Message: " +
                message;


            const encodedMessage =
                encodeURIComponent(whatsappMessage);


            /*
                Horizon Heights WhatsApp number:
                0978168925

                Zambia country code:
                +260
            */

            const whatsappNumber =
                "260978168925";


            const whatsappURL =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodedMessage;


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}
