function loadNavbar() {
     fetch("navbar.html")
         .then(response => response.text())
         .then(html => {
             document.getElementById("navbar-container").innerHTML = html;
         })
         .catch(error => {
             console.error("Error loading navigation bar:", error);
         });
 }

function scrollToSection(targetId) {
    var targetElement = document.getElementById(targetId);
    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: "smooth"
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            var targetId = this.getAttribute("href").substring(1);

            scrollToSection(targetId);
        });
    });
});

 window.addEventListener("DOMContentLoaded", loadNavbar);
