const {User} = require('./User.model');

const me = async (req, res) => res.status(200).send(req.user);

const getUsers = async (req, res) => {
    try {
        const users = await User.find();

        return res.send(users);
    } catch (error) {
        console.error(error);
    }
};

module.exports = {getUsers, me};
