var buttons = document.querySelectorAll("nav > button");
var iframe = document.querySelectorAll(".iframe > iframe");
var lastIframe = null;

//* Check if iframe are open from main menu opening
function checkMenu() {
    var result = true;
    for (var i = 0; i < iframe.length; i++) {
        if (!iframe[i].classList.contains("hide")) {
            result = false;
            break;
        }
    }
    if (result == true) {
        iframe[2].classList.remove("hide");
        lastIframe = iframe[2];
    }
}

//* Main

//* Open iframe when button clicked
buttons.forEach((value, index) => {
    value.addEventListener("click", () => {
        iframe[index].classList.toggle("hide");
        if (lastIframe !== null && lastIframe !== iframe[index] && !lastIframe.classList.contains("hide")) {
            lastIframe.classList.add("hide");
        }
        lastIframe = iframe[index];
        checkMenu();
    });
});

checkMenu(); //* Check when site is opened