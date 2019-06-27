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
                    // console.log('post for register testing ',res.body)
                    expect(res.body).not.toBeNull()

                })
                await supertest(server)
                .post('/auth/login')
                .send(user)
                .then(res => {
                    // console.log('post for login testing ',res.body.token)
                    expect(res.body.token).not.toBeNull()

                })

        })

    //     it('responds with 201 OK', async () => {
    //         let game = { "title": 'Pacman2', "genre": "Arcade2", "releaseYear": 1982 }
    //         await supertest(server)
    //             .post('/games')
    //             .send(game)
    //             .expect(201)


    //     })

    //     it('responds with 422 OK', async () => {
    //         let game = { "title": '', "genre": "Arcade3", "releaseYear": 1983 }
    //         await supertest(server)
    //             .post('/games')
    //             .send(game)
    //             .expect(422)


    //     })

    //     it('checking the content type to be json', async () => {
    //         let game = { "title": 'Pacman4', "genre": "Arcade4", "releaseYear": 1984 }

    //         await supertest(server)
    //             .post('/games')
    //             .send(game)
    //             .expect('Content-Type', /json/i)
    //     })
    })
})