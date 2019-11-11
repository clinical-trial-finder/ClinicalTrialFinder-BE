const supertest = require('supertest')

const server = require('../api/server.js')
const db = require('../database/dbConfig.js')

describe('auth router', () => {
    beforeEach(async () => {
        await db('users').truncate();
    });

    describe('POST /', () => {
        it('checks if res.body is not null', async () => {
            let user = { "username":"user9", "password":"pass" }
            await supertest(server)
                .post('/auth/register')
                .send(user)
                .then(res => {
                    expect(res.body).not.toBeNull()

                })
                await supertest(server)
                .post('/auth/login')
                .send(user)
                .then(res => {
                    expect(res.body.token).not.toBeNull()

                })

        })

    })
})