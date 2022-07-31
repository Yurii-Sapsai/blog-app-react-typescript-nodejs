import UserSchema from '../models/User.js';
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';


export const registration = async (req, res) => {
    try {

        const user = new UserSchema({
            fullName: req.body.fullName,
            email: req.body.email,
            passwordHash: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
            avatar: req.body.avatar
        })
        const savedUser = await user.save();

        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SEC, {
            expiresIn: '3d'
        })

        res.status(200).json({ savedUser, token })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error during registration',
        })
    }
}


export const login = async (req, res) => {
    try {

        const user = await UserSchema.findOne({ email: req.body.email })
        !user && res.status(401).json('Wrong login or password!')

        const hashedPassword = CryptoJS.AES.decrypt(
            user.passwordHash,
            process.env.PASS_SEC
        )
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
        originalPassword !== req.body.password && res.status(401).json('Wrong login or password!')

        const token = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        },
            process.env.JWT_SEC, {
            expiresIn: '3d'
        })

        const { passwordHash, ...other } = user._doc
        res.status(200).json({ ...other, token })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Failed to login',
        })
    }
}

