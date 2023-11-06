function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var elem = document.getElementById("myButton1");
    if (elem.value == "Dark mode") elem.value = "Light mode", elem.style.background = "white", elem.style.color = "black";
    else elem.value = "Dark mode", elem.style.background = "#1a1d28", elem.style.color = "white";
}