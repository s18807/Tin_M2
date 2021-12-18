function validateForm() {
    //data
    const nazwa = document.getElementById("nazwa");
    const cena = document.getElementById("cena");
    //error fields
    const errorNazwa = document.getElementById("errorNazwa");
    const errorCena = document.getElementById("errorCena");
    const errorSummary = document.getElementById("errorSummary");

    resetErrors([nazwa, cena], [errorNazwa, errorCena], errorSummary);
    let valid = true;
    if (!checkRequired(nazwa.value)) {
        valid = false;
        nazwa.classList.add("error-input");
        errorNazwa.innerText = "Błędna nazwa";
    } else if (!checkTextLength(nazwa.value, 2, 120)) {
        valid = false;
        nazwa.classList.add("error-input");
        errorNazwa.innerText += "Pole powinno zawierać do 2 do 120 znaków";
    }

    if (!checkNumber(cena.value)) {
        valid = false;
        cena.classList.add("error-input");
        errorCena.innerText = "Błędna cena";
    }

    if (!valid) {
        errorSummary.innerText = "Formularz zawiera błędy";
    }
    return valid;
}