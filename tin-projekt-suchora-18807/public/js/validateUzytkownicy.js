function validateForm() {
    //data
    const imie = document.getElementById("imie");
    const nazwisko = document.getElementById("nazwisko");
    const mail = document.getElementById("mail");
    //error fields
    const errorImie = document.getElementById("errorImie");
    const errorNazwisko = document.getElementById("errorNazwisko");
    const errorMail = document.getElementById("errorMail");
    const errorSummary = document.getElementById("errorSummary");

    resetErrors([imie, nazwisko, mail], [errorImie, errorNazwisko, errorMail], errorSummary);
    let valid = true;
    if (!checkRequired(imie.value)) {
        valid = false;
        imie.classList.add("error-input");
        errorImie.innerText = "Błędne imie";
    } else if (!checkTextLength(imie.value, 2, 60)) {
        valid = false;
        imie.classList.add("error-input");
        errorImie.innerText += "Pole powinno zawierać do 2 do 60 znaków";
    }

    if (!checkRequired(nazwisko.value)) {
        valid = false;
        imie.classList.add("error-input");
        errorNazwisko.innerText = "Błędne nazwisko";
    } else if (!checkTextLength(nazwisko.value, 2, 60)) {
        valid = false;
        imie.classList.add("error-input");
        errorNazwisko.innerText += "Pole powinno zawierać do 2 do 60 znaków";
    }

    if (!checkRequired(mail.value)) {
        valid = false;
        imie.classList.add("error-input");
        errorMail.innerText = "Błędny mail";
    } else if (!checkTextLength(mail.value, 2, 60)) {
        valid = false;
        imie.classList.add("error-input");
        errorMail.innerText += "Pole powinno zawierać do 2 do 60 znaków";
    } else if (!checkMail(mail.value)) {
        valid = false;
        imie.classList.add("error-input");
        errorMail.innerText = "Błędny mail";
    }
    if (!valid) {
        errorSummary.innerText = "Formularz zawiera błędy";
    }
    return valid;
}