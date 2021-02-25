'use strict';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {Admin} = require('./Admin.model');

const jwtExp = Math.floor(Date.now() / 1000) + 60 * 60;
const jwtSecret = 'somethingLong';

const newToken = (admin) =>
    jwt.sign({id: admin.id}, jwtSecret, {expiresIn: jwtExp});

function verifyToken(token) {
    return new Promise(function (res, rej) {
        jwt.verify(token, jwtSecret, function (err, payload) {
            if (err) {
                return rej(err);
            }
            res(payload);
        });
    });
}

const getAdmin = async (req, res) => {
    try {
        const admin = await Admin.findById(req.admin._id).select('-password');

        return res.send(admin);
    } catch (error) {
        console.error(error);
    }
};

const adminLogin = async (req, res) => {
    const loginRequest = req.body;

    try {
        const admin = await Admin.findOne({
            username: loginRequest.username,
        }).select('password username');

        if (!admin) {
            return res.status(400).send({message: 'You are not welcome'});
        }

        const match = await bcrypt.compare(
            loginRequest.password,
            admin.password
        );

        if (!match) {
            return res.status(401).send({message: 'Password is invalid'});
        }
        const token = newToken(admin);
        return res.status(201).send({token});
    } catch (error) {
        console.log('error::', error);
        return res.status(500).end();
    }
};

const registerAdmin = async (req, res) => {
    const registerRequest = {...req.body};

    try {
        const user = await Admin.findOne({username: registerRequest.username});

        if (user) {
            return res
                .status(400)
                .send({message: 'There is already a account With that email'});
        }

        const hashedUserPassword = await bcrypt.hash(
            registerRequest.password,
            10
        );
        const newAdmin = {
            username: registerRequest.username,
            user: registerRequest.user,
            password: hashedUserPassword,
        };

        const createAdminResponse = Admin.create(newAdmin);

        const tokenizedAdmin = newToken(createAdminResponse);

        return res.status(200).send({token: tokenizedAdmin});
    } catch (error) {
        console.log(error);
    }
};

const protectedAdminRoute = async (req, res, next) => {
    const bearer = req.headers.authorization;

    if (!bearer || !bearer.startsWith('AdminBearer ')) {
        return res.status(401).end();
    }
    const token = bearer.split('AdminBearer ')[1].trim();
    if (!token) {
        return res.status(401).end();
    }
    let payload;
    try {
        payload = await verifyToken(token);
    } catch (error) {
        console.log(error);
        return res.status(401).end();
    }

    const admin = await Admin.findById(payload.id)
        .select('-password -salt')
        .lean()
        .exec();
    if (!admin) {
        return res.status(401).end();
    }
    req.admin = admin;
    return next();
};

const getAdmins = async (req, res) => {
    try {
        const admin = await Admin.find();

        return res.send(admin);
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    adminLogin,
    registerAdmin,
    protectedAdminRoute,
    getAdmins,
    getAdmin,
};
