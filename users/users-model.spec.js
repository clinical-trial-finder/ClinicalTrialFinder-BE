const bcrypt = require('bcryptjs')
const db = require('../database/dbConfig.js')
const UsersModel = require('./users-model.js')

describe('user model ', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('user model add ', () => {
        it('checks to see the user gets added', async () => {
            let user = { "username": "user9", "password": bcrypt.hashSync('pass', 11) }
            await UsersModel.add(user)
            const users = await db('users')
            // console.log('users model length ',users)
            expect(users).toHaveLength(1)
            expect(users[0].username).toBe(user.username)
        });
    });

    describe('user model findBy ', () => {
        it('checks to find the user added is existing', async () => {
            let user = { "username": "user10", "password": bcrypt.hashSync('pass', 11) }
            await UsersModel.add(user)
            const users = await UsersModel.findBy({ "username": "user10" })
            // console.log('users model length ',users)
            expect(users).toHaveLength(1)
            expect(users[0].username).toEqual(user.username)
        });
    });

    describe('user model findById ', () => {
        it('checks to find the user by id', async () => {
            let user = { "username": "user10", "password": bcrypt.hashSync('pass', 11) }
            await UsersModel.add(user)
            const users = await UsersModel.findById(1)
            // console.log('users model length ',users)
            expect(users.id).toBe(1)
            // expect(users.username).toEqual(user.username)
        });
    });
});