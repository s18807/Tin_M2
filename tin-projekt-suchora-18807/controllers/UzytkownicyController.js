const userRepo = require('../repository/UzytkownicyRepository');

exports.showUsersList = (req, res, next) => {
    userRepo.GetUser().then(emps => {

        res.render('Uzytkownicy/Uzytkownicy', {
            emps: emps,
            navlocation: 'user'
        });
    });
}
exports.showUsersForm = (req, res, next) => {
    res.render('Uzytkownicy/UsersForm', {});
}
exports.showUsersDetails = (req, res, next) => {
    res.render('Uzytkownicy/UsersFormDetails', {});
}