function validateForm() {
    //data
    const IdOs = document.getElementById("IdOs");
    const Idp = document.getElementById("Idp");
    const koszt = document.getElementById("koszt");
    const data = document.getElementById("data");
    //error fields
    const errorIdOs = document.getElementById("errorIdOs");
    const errorIdp = document.getElementById("errorIdp");
    const errorKoszt = document.getElementById("errorKoszt");
    const errorData = document.getElementById("errorData");
    const errorSummary = document.getElementById("errorSummary");

    resetErrors([koszt, data], [errorKoszt, errorData], errorSummary);
    let valid = true;
    if (!checkNumber(koszt.value)) {
        valid = false;
        koszt.classList.add("error-input");
        errorKoszt.innerText = "Błędna cena";
    }

    if (!checkDateAfter(data.value)) {
        valid = false;
        data.classList.add("error-input");
        errorData.innerText = "Błędna data";
    }

    if (!valid) {
        errorSummary.innerText = "Formularz zawiera błędy";
    }
    return valid;
}