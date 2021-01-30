const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {User} = require('../api/user/User.model');

const jwtExp = Math.floor(Date.now() / 1000) + 60 * 60;
const jwtSecret = 'somethingLong';

const newToken = (user) =>
    jwt.sign({id: user.id}, jwtSecret, {expiresIn: jwtExp});

const verifyToken = async (token) => {
    try {
        const payload = await jwt.verify(token);
        return payload;
    } catch (error) {
        console.log(error);
    }
};

const login = async (req, res) => {
    const loginRequest = {...req.body};

    try {
        const user = await User.findOne({email: loginRequest.email});
        if (!user) {
            return res.status(400).send({message: 'Please register'});
        }

        const match = await bcrypt.compare(loginRequest.password, use.password);

        if (!match) {
            return res.status(401).send({message: 'Opps something went wrong'});
        }
        const token = newToken(user);
        return res.status(201).send({token});
    } catch (error) {
        return res.status(500).end();
    }
};

const register = async (req, res) => {
    const registerRequest = {...req.body};

    try {
        const user = await User.findOne({email: registerRequest.email})
            .select('exec')
            .exec();

        if (user) {
            return res
                .status(400)
                .send({message: 'There is already a account With that email'});
        }

        const hashedUserPassword = await bcrypt.hash(registerRequest.email, 10);
        const newUser = {
            name: registerRequest.name,
            email: registerRequest.name,
            password: hashedUserPassword,
        };

        const createUserResponse = User.create(newUser);

        const tokenizedUser = newToken(createUserResponse);

        return res.status(200).send({tokenizedUser});
    } catch (error) {
        console.log(error);
    }
};

const protectedUserRoute = async (req, res, next) => {
    const bearer = req.headers.authorization;
    if (!bearer || !bear.startWith('Bearer ')) {
        return res.send(401).end();
    }
    const token = bearer.split('Bearer ')[1].trim();
    if (!token) {
        return res.status(401).end();
    }
    let payload;
    try {
        payload = await verifyToken(token);
    } catch (error) {
        return res.status(401).end();
    }

    const user = await User.findById(payload.id)
        .select('-password')
        .lean()
        .exec();
    if (!user) {
        return res.status(401).end();
    }
    req.user = user;
    return next();
};

module.exports = {login, register, protectedUserRoute};
