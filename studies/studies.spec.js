const supertest = require('supertest')

const server = require('../api/server.js')
const db = require('../database/dbConfig.js')

let token;

beforeAll((done) => {
    let user = { "username": "user9", "password": "pass" }
    supertest(server)
        .post('/auth/register')
        .send(user)
        .then(res => {
            expect(res.body).not.toBeNull()

        })
    supertest(server)
        .post('/auth/login')
        .send(user)
        .end((err, response) => {
            token = response.body.token; // save the token!
            done();
        });
});


describe('studies router', () => {

    beforeEach(async () => {
        await db('studies').truncate();
    });

    describe('POST /', () => {
        it('checks if res.body is not null', async () => {

            let research = {
                "nct_id": "NAA03999560",
                "start_date": "07/02/2019",
                "completion_date": "09/11/2020",
                "study_type": "Interventional",
                "overall_status": "Recruiting",
                "brief_title": "Mesh Suture for Internal Load Bearing Closures",
                "phase": "N/A",
                "source": "Wigmore Clinic",
                "summary": "\n      Determine whether Mesh Suture achieves an acceptable safety and efficacy profile in load\n      bearing internal tissue approximations. Mesh Suture has a novel design that permits tissue\n      ingrowth and limits suture pull-through--items important for internal high-tension repairs\n    ",
                "sponsor": "Wigmore Clinic",
                "condition_name": "Suture, Complication"
            }


            await supertest(server)
                .post('/studies')
                .set('Authorization', `${token}`)
                .send(research)
                .expect(201)

        })

        it('responds with 201 OK', async () => {

            let research = {
                "nct_id": "whatever1",
                "start_date": "07/02/2019",
                "completion_date": "09/11/2020",
                "study_type": "Interventional",
                "overall_status": "Recruiting",
                "brief_title": "Mesh Suture for Internal Load Bearing Closures",
                "phase": "N/A",
                "source": "Wigmore Clinic",
                "summary": "\n      Determine whether Mesh Suture achieves an acceptable safety and efficacy profile in load\n      bearing internal tissue approximations. Mesh Suture has a novel design that permits tissue\n      ingrowth and limits suture pull-through--items important for internal high-tension repairs\n    ",
                "sponsor": "Wigmore Clinic",
                "condition_name": "Suture, Complication"
            }

            await supertest(server)
                .post('/studies')
                .send(research)
                .set('Authorization', `${token}`)
                .expect(201)

        })
    })

    describe('GET /', () => {


        it('check for an empty array', async () => {
            const res = await supertest(server)
                .get('/studies')
                .set('Authorization', `${token}`)
            expect(res.body).toEqual([])
        })

        it('responds with 200 OK', async () => {

            let research = {
                "nct_id": "whatever1",
                "start_date": "07/02/2019",
                "completion_date": "09/11/2020",
                "study_type": "Interventional",
                "overall_status": "Recruiting",
                "brief_title": "Mesh Suture for Internal Load Bearing Closures",
                "phase": "N/A",
                "source": "Wigmore Clinic",
                "summary": "\n      Determine whether Mesh Suture achieves an acceptable safety and efficacy profile in load\n      bearing internal tissue approximations. Mesh Suture has a novel design that permits tissue\n      ingrowth and limits suture pull-through--items important for internal high-tension repairs\n    ",
                "sponsor": "Wigmore Clinic",
                "condition_name": "Suture, Complication"
            }

            await supertest(server)
                .post('/studies')
                .send(research)
                .set('Authorization', `${token}`)
            const res = await supertest(server)
                .get('/studies')
                .set('Authorization', `${token}`)
                .expect(200)

        })
    })

    describe('GET by id/', () => {
        it('responds with 200 OK', async () => {
            let research = {
                "nct_id": "whatever1",
                "start_date": "07/02/2019",
                "completion_date": "09/11/2020",
                "study_type": "Interventional",
                "overall_status": "Recruiting",
                "brief_title": "Mesh Suture for Internal Load Bearing Closures",
                "phase": "N/A",
                "source": "Wigmore Clinic",
                "summary": "\n      Determine whether Mesh Suture achieves an acceptable safety and efficacy profile in load\n      bearing internal tissue approximations. Mesh Suture has a novel design that permits tissue\n      ingrowth and limits suture pull-through--items important for internal high-tension repairs\n    ",
                "sponsor": "Wigmore Clinic",
                "condition_name": "Suture, Complication"
            }

            await supertest(server)
                .post('/studies')
                .send(research)
                .set('Authorization', `${token}`)
            await supertest(server)
                .get('/studies/1')
                .set('Authorization', `${token}`)
                .expect(200)

        })

        it('responds with 404 OK', async () => {
            await supertest(server)
                .get('/studies/1')
                .set('Authorization', `${token}`)
                .expect(404)
        })
    })

    describe('DELETE /', () => {

        it('responds with 201 OK', async () => {
            let research = {
                "nct_id": "whatever1",
                "start_date": "07/02/2019",
                "completion_date": "09/11/2020",
                "study_type": "Interventional",
                "overall_status": "Recruiting",
                "brief_title": "Mesh Suture for Internal Load Bearing Closures",
                "phase": "N/A",
                "source": "Wigmore Clinic",
                "summary": "\n      Determine whether Mesh Suture achieves an acceptable safety and efficacy profile in load\n      bearing internal tissue approximations. Mesh Suture has a novel design that permits tissue\n      ingrowth and limits suture pull-through--items important for internal high-tension repairs\n    ",
                "sponsor": "Wigmore Clinic",
                "condition_name": "Suture, Complication"
            }

            await supertest(server)
                .post('/studies')
                .send(research)
                .set('Authorization', `${token}`)
            const res = await supertest(server)
                .get('/studies')
                .set('Authorization', `${token}`)
            await supertest(server)
                .delete(`/studies/${res.body[0].id}`)
                .set('Authorization', `${token}`)
                .expect(201)
        })

        it('responds with 404 OK', async () => {


            await supertest(server)
                .delete('/studies/1')
                .set('Authorization', `${token}`)
                .expect(404)
        })
    })

    describe('PUT /', () => {

        it('responds with 201 OK', async () => {
            let research = {
                "nct_id": "whatever1",
                "start_date": "07/02/2019",
                "completion_date": "09/11/2020",
                "study_type": "Interventional",
                "overall_status": "Recruiting",
                "brief_title": "Mesh Suture for Internal Load Bearing Closures",
                "phase": "N/A",
                "source": "Wigmore Clinic",
                "summary": "\n      Determine whether Mesh Suture achieves an acceptable safety and efficacy profile in load\n      bearing internal tissue approximations. Mesh Suture has a novel design that permits tissue\n      ingrowth and limits suture pull-through--items important for internal high-tension repairs\n    ",
                "sponsor": "Wigmore Clinic",
                "condition_name": "Suture, Complication"
            }

            let research1 = {
                "nct_id": "whatever12",
                "start_date": "07/02/2019",
                "completion_date": "09/11/2020",
                "study_type": "Interventional",
                "overall_status": "Recruiting",
                "brief_title": "Mesh Suture for Internal Load Bearing Closures",
                "phase": "N/A",
                "source": "Wigmore Clinic",
                "summary": "\n      Determine whether Mesh Suture achieves an acceptable safety and efficacy profile in load\n      bearing internal tissue approximations. Mesh Suture has a novel design that permits tissue\n      ingrowth and limits suture pull-through--items important for internal high-tension repairs\n    ",
                "sponsor": "Wigmore Clinic UPDATE",
                "condition_name": "Suture, Complication"
            }

            await supertest(server)
                .post('/studies')
                .send(research)
                .set('Authorization', `${token}`)
            const res = await supertest(server)
                .get('/studies')
                .set('Authorization', `${token}`)
            await supertest(server)
                .put(`/studies/${res.body[0].id}`)
                .send(research1)
                .set('Authorization', `${token}`)
                .expect(201)
        })

    })

    describe('SEARCH /', () => {

        it('checks if the search content matches', async () => {
            let research = {
                "nct_id": "whatever1",
                "start_date": "07/02/2019",
                "completion_date": "09/11/2020",
                "study_type": "Interventional",
                "overall_status": "Recruiting",
                "brief_title": "Mesh Suture for Internal Load Bearing Closures",
                "phase": "N/A",
                "source": "Wigmore Clinic",
                "summary": "\n      Determine whether Mesh Suture achieves an acceptable safety and efficacy profile in load\n      bearing internal tissue approximations. Mesh Suture has a novel design that permits tissue\n      ingrowth and limits suture pull-through--items important for internal high-tension repairs\n    ",
                "sponsor": "Wigmore Clinic",
                "condition_name": "Suture, Complication"
            }
            const search1 = "suture"

            await supertest(server)
                .post('/studies')
                .send(research)
                .set('Authorization', `${token}`)
            const res = await supertest(server)
                .get(`/studies/search/${search1}`)
                .set('Authorization', `${token}`)
            expect(res.body[0].condition_name).toEqual(research.condition_name)
        })

        it('checks for 200 ok', async () => {
            let research = {
                "nct_id": "whatever1",
                "start_date": "07/02/2019",
                "completion_date": "09/11/2020",
                "study_type": "Interventional",
                "overall_status": "Recruiting",
                "brief_title": "Mesh Suture for Internal Load Bearing Closures",
                "phase": "N/A",
                "source": "Wigmore Clinic",
                "summary": "\n      Determine whether Mesh Suture achieves an acceptable safety and efficacy profile in load\n      bearing internal tissue approximations. Mesh Suture has a novel design that permits tissue\n      ingrowth and limits suture pull-through--items important for internal high-tension repairs\n    ",
                "sponsor": "Wigmore Clinic",
                "condition_name": "Suture, Complication"
            }
            const search1 = "suture"

            await supertest(server)
                .post('/studies')
                .send(research)
                .set('Authorization', `${token}`)
            await supertest(server)
                .get(`/studies/search/${search1}`)
                .set('Authorization', `${token}`)
                .expect(201)
        })
    })
});