function validateInput() {
    let inputField = document.getElementById("inputfield");
    let inputValue = inputField.value.trim();
    const errorMesaage = document.getElementById("errormssg");

    if (inputValue === "") {
        inputField.classList.add("shake");
        errorMesaage.style.visibility = "visible";

        setTimeout(function () {
        inputField.classList.remove("shake");
        errorMesaage.style.visibility = "hidden";
    },500);
    } else {
        alert("Valid Input")
    }
}