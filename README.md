# ClinicalTrialFinder-BE
Backend Repository

The purpose of this project is to provide the user to register, login, crud and the search endpoints

Register Endpoint: https://clinical-trial-finder.herokuapp.com/auth/register (or) http://localhost:3344/auth/register

    A new user will be able to register by giving the username and the password. The password gets hashed and gets stored as password.

Login Endpoint: https://clinical-trial-finder.herokuapp.com/auth/login (or) http://localhost:3344/auth/login

    A user will be able to login using the username and the password, a token gets generated after the user is verified.

Get Endpoint : https://clinical-trial-finder.herokuapp.com/studies (or) http://localhost:3344/studies 

    A user only if logged in, will be able to get all the clinical trials data.

Get by id Endpoint : https://clinical-trial-finder.herokuapp.com/studies/:id (or) http://localhost:3344/studies/:id 

    A user only if logged in, will be able to get the clinical trials data for the specific data

Post Endpoint : https://clinical-trial-finder.herokuapp.com/studies (or) http://localhost:3344/studies 

    A user only if logged in, will be able to post or create a new study item.    

Update Endpoint : https://clinical-trial-finder.herokuapp.com/studies/:id (or) http://localhost:3344/studies/:id 

    A user only if logged in, will be able to update the item with the id provided

Delete Endpoint : https://clinical-trial-finder.herokuapp.com/studies:id (or) http://localhost:3344/studies/:id

    A user only if logged in, will be able to delete the item with the id provided.

Search Endpoint : https://clinical-trial-finder.herokuapp.com/studies/search/:filter (or) http://localhost:3344/studies/search/:filter 

    A user only if logged in, will be able to search the database with the condition name.


It has a Database of 'Clinic':
    Table 1: Users 
                => Username column
                => Password column

                Models:
                    User Model : 
                        => add
                        => findBy
                        => findById

                    Tested:
                        => add   
                        => findBy
                        => findById 

                Router:  
                    Auth Router:
                        => Register Endpoint: https://clinical-trial-finder.herokuapp.com/auth/register (or) http://localhost:3344/auth/register

                        => Login Endpoint: https://clinical-trial-finder.herokuapp.com/auth/login (or) http://localhost:3344/auth/login   

                    Tested:
                        => Register Endpoint   
                        => Login Endpoint
                        

    Table 2: Studies
                => nct_id column                             
                => start_date column 
                => completion_date column 
                => study_type column 
                => overall_status column 
                => brief_title column 
                => phase column 
                => source column 
                => summary column 
                => sponsor column 
                => condition_name column 

                Seeds:
                    Data was seeded using a json file. The data was extracted from by the Data Science from https://clinicaltrials.gov/ct2/resources/trends.

                Models:
                    Studies Model : 
                        => addStudy
                        => getStudies
                        => getStudyById
                        => update
                        => remove
                        => findBy

                        Tested:
                            => addStudy
                            => getStudies
                            => getStudyById
                            => update
                            => remove
                            => findBy                        

                Router:  
                    Studies Router:
                        => Get Endpoint : https://clinical-trial-finder.herokuapp.com/studies (or) http://localhost:3344/studies 

                        => Get by id Endpoint : https://clinical-trial-finder.herokuapp.com/studies/:id (or) http://localhost:3344/studies/:id  

                        => Post Endpoint : https://clinical-trial-finder.herokuapp.com/studies (or) http://localhost:3344/studies 

                        => Delete Endpoint : https://clinical-trial-finder.herokuapp.com/studies:id (or) http://localhost:3344/studies/:id

                        => Search Endpoint : https://clinical-trial-finder.herokuapp.com/studies/search/:filter (or) http://localhost:3344/studies/search/:filter


                            Tested:
                                => Get Endpoint
                                => Get by id Endpoint
                                => Post Endpoint
                                => Delete Endpoint
                                => Search Endpoint
                                


The server connects the both the user router and the studies router using express.

Testing was conducted using jest and supertest.
                