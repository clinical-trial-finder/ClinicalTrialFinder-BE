const supertest = require('supertest')
const server = require('./server.js')

describe('server', () => {
    describe('GET /', () => {

        it('check to see the env points to testing', async () => {

            expect(process.env.DB_ENV).toBe('testing')
        })

        it('responds with 200 OK', () => {
            return supertest(server)
                .get('/')
                .expect(200)
        })

        it('checking the content type to be json', async () => {
            await supertest(server)
                .get('/')
                .expect('Content-Type', /json/i)
        })


        it('responds {api:"up"}', async () => {
            await supertest(server)
                .get('/')
                .then(res => {
                    expect(res.body).toEqual({ api: 'up' });
                })
        })
    })
})