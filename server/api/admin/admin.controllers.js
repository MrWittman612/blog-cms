const {Admin} = require('./Admin.model');

const getAdmins = async (req, res) => {
    try {
        const admin = await Admin.find();
        console.log('users', admin);

        return res.send(admin);
    } catch (error) {
        console.error(error);
    }
};

const createAdmin = async (req, res) => {
    try {
        const admin = await Admin.create(req.body);
        return res.send(admin);
    } catch (error) {
        console.log(error);
    }
};

exports.getAdmins = getAdmins;
exports.createAdmin = createAdmin;
