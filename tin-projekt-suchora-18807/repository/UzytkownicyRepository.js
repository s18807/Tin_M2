const db = require('../config/mysql2/db');
exports.GetUser = () => {
    return db.promise().query("SELECT * FROM Osoba").then((res, fields) => {
        console.log(res[0]);
        return res[0];
    }).catch(err => { console.log(err); throw err; })
};
/* exports.GetUserById = (userId) => {
    return db.query("SELECT * FROM Osoba WHERE _id = ?", userId).then((res, fields) => {
        const fRow = res[0][0];
        if (!fRow) return {};
        const user = {
            _id = parseInt(userId),
            Imie = fRow.Imie,
            Nazwisko = fRow.Nazwisko,
            Adres = fRow.Adres,
            Numer = fRow.NumerTelefonu,
            Email = fRow.Email
        }
        return user;
    }).catch(err => { console.log(err); throw err; })
};
exports.CreateUser = (newUserData) => {};
exports.UpdateUser = (userId, UserData) => {};
exports.DeleteUser = (userId) => {}; */