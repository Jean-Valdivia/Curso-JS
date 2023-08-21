let botonDarkMode = document.getElementById("botonDarkMode");
let botonLightMode = document.getElementById("botonLightMode");
let body = document.body;

botonDarkMode.addEventListener("click", () => {
        body.classList.remove("lightMode");
        body.classList.add("darkMode");
})

botonLightMode.addEventListener("click", () => {
        body.classList.remove("darkMode");
        body.classList.add("lightMode");
    })
