const bcrypt = require('bcryptjs')
const db = require('../database/dbConfig.js')
const StudiesModel = require('./studies-model.js')

describe('studies model ', () => {
    beforeEach(async () => {
        await db('studies').truncate();
    });

    describe('studies model add ', () => {
        it('checks to see if the study gets added', async () => {
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
            const id = await StudiesModel.addStudy(research)
            // console.log('study model length ',id)
            expect(id[0]).toBe(1)

        });
    });

    describe('studies model findBy ', () => {
        it('checks to find the study added is existing', async () => {
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
            await StudiesModel.addStudy(research)
            const study = await StudiesModel.findBy("suture")
            // console.log('study model length ',study)

            expect(study[0].condition_name).toBe(research.condition_name)

        });
    });

    describe('studies model findById ', () => {
        it('checks to find the study by id', async () => {
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
            const id = await StudiesModel.addStudy(research)
            const study = await StudiesModel.getStudyById(id[0])
            // console.log('study model length ',study)

            expect(study.condition_name).toBe(research.condition_name)


        });
    });

    describe('studies model get ', () => {
        it('check to see if the study can be retrieved', async () => {
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
            await StudiesModel.addStudy(research)
            const study = await StudiesModel.getStudies()
            // console.log('study model get length ',study)
            expect(study.length).toBe(1)

        });
    });

    describe('studies model update ', () => {
        it('check to see if the study can be updated', async () => {
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

            let research1 = {
                "nct_id": "NAA03999560",
                "start_date": "07/02/2019",
                "completion_date": "09/11/2020",
                "study_type": "Interventional",
                "overall_status": "Recruiting",
                "brief_title": "Mesh Suture for Internal Load Bearing Closures",
                "phase": "phase update",
                "source": "Wigmore Clinic",
                "summary": "\n      Determine whether Mesh Suture achieves an acceptable safety and efficacy profile in load\n      bearing internal tissue approximations. Mesh Suture has a novel design that permits tissue\n      ingrowth and limits suture pull-through--items important for internal high-tension repairs\n    ",
                "sponsor": "Wigmore Clinic",
                "condition_name": "Suture, Complication"
            }
            const study = await StudiesModel.addStudy(research)
            const updatedItem = await StudiesModel.update(study[0], research1)
            // console.log('updated item ', updatedItem)
            const retrieve = await StudiesModel.getStudyById(updatedItem)
            // console.log('retrieve ', retrieve)
            expect(retrieve.phase).toBe(research1.phase)

        });
    });

    describe('studies model delete ', () => {
        it('check to see if the study can be deleted', async () => {
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

            const study = await StudiesModel.addStudy(research)
            console.log('add study ', study)
            const del = await StudiesModel.remove(study[0])
            console.log('del value ', del)
            expect(del).toBe(1)
            
        });
    });
});