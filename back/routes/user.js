const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');

const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const exUser = User.findOne({
           where: {
               email: req.body.email,
           } 
        });
        if(exUser){
            return res.status(403).send('이미 사용중인 아이디 압니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 11);
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword
        });
        res.status(200).send('ok');
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;