const {User} = require('./User.model');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        console.log('users', users);

        return res.send(users);
    } catch (error) {
        console.error(error);
    }
};
exports.getUsers = getUsers;
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        console.log('user', user);

        return res.send(user);
    } catch (error) {
        console.log(error);
    }
};

exports.createUser = createUser;
