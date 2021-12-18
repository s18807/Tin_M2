exports.showTransakcjeList = (req, res, next) => {
    res.render('Transakcje/Transakcje', {});
}
exports.showProduktyForm = (req, res, next) => {
    res.render('Transakcje/TransakcjeForm', {});
}
exports.showTransakcjeDetails = (req, res, next) => {
    res.render('Transakcje/TransakcjeFormDetails', {});
}