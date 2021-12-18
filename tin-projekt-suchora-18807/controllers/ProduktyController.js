exports.showProduktyList = (req, res, next) => {
    res.render('Produkty/Produkty', {});
}
exports.showProduktyForm = (req, res, next) => {
    res.render('Produkty/ProduktyForm', {});
}
exports.showProduktyDetails = (req, res, next) => {
    res.render('Produkty/ProduktyFormDetails', {});
}