

const backgroundSelect = document.getElementById("backgroundSelect");


backgroundSelect.addEventListener("change", function () {

    const selectedBackground = backgroundSelect.value;

    if (selectedBackground === "light-blue") {
        document.body.style.backgroundImage = "url('light-blue.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }

    else if (selectedBackground === "light-gold") {
        document.body.style.backgroundImage = "url('light-gold.jpg')";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundAttachment = "fixed";
    }

    else {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "white";
    }

});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("service-worker.js")
            .then(function (registration) {
                console.log("Service Worker registered successfully!");
            })
            .catch(function (error) {
                console.log("Service Worker registration failed:", error);
            });
    });
}
