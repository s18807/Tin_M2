function resetErrors(inputs, errorTexts, errorInfo) {
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList.remove("error-input");
    }
    for (let i = 0; i < errorTexts.length; i++) {
        errorTexts[i].innerText = "";
    }
    errorInfo.innerText = "";
}

function checkRequired(value) {
    if (!value) { return false; }
    value = value.toString().trim();
    if (value == "") {
        return false;
    }
    return true;
}

function checkNumber(value) {
    if (!value) {
        return false;
    }
    if (isNaN(value)) {
        return false;
    }
    if (value < 0) {
        return null;
    }
    return true;
}

function checkNumberRange(value, min, max) {
    if (!value) {
        return false;
    }
    if (isNaN(value)) {
        return false;
    }
    value = parseFloat(value);
    if (value < min) {
        return false;
    }
    if (value > max) {
        return false;
    }
    return true;
}

function checkDate(value) {
    if (!value) {
        return false;
    }
    const pattern = /(\d{4})-(\d{2})-(\d2)/;
    return re.test(value);
}

function checkDateAfter(value) {
    let now = new Date();
    month = '' + (now.getMonth() + 1);
    day = '' + now.getDate();
    year = now.getFullYear();
    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    const dayString = [year, month, day].join('-');
    console.log(dayString);
    if (!value) {
        return false;
    }
    const valueDate = new Date(value);
    const today = new Date(dayString);
    if (valueDate < today) {
        return false;
    }
    return true;
}

function checkTextLength(val, min, max) {
    if (!val) return false;
    val.toString().trim();
    const length = val.length;
    if (length < min || length > max) {
        return false;
    }
    return true;
}

function checkMail(value) {
    if (!value) return false;
    value = value.toString().trim();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}