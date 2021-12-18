const UserRepository = require('../repository/UzytkownicyRepository');
exports.getUser = (req, res, next) => {
    UserRepository.getUser().then(users => {
        res.status(200).json(users);
    }).catch(err => { console.log(err); })
};
exports.GetUserById = (req, res, next) => {
    const id = req.params._id;
    UserRepository.GetUserById(id).then(users => {
        if (!users) {
            res.status(404).json({ message: 'no emp id= ' + id + ' in database' })
        } else {
            res.status(200).json(users);
        }
    }).catch(err => { console.log(err); })
};
/* exports.CreateUser = (req, res, next) => {
    UserRepository.getUser().then(users => {
        res.status(200).json(users);
    }).catch(err => { console.log(err); })
};
exports.UpdateUser = (req, res, next) => {
    UserRepository.getUser().then(users => {
        res.status(200).json(users);
    }).catch(err => { console.log(err); })
};
exports.DeleteUser = (req, res, next) => {
    UserRepository.getUser().then(users => {
        res.status(200).json(users);
    }).catch(err => { console.log(err); })
}; */