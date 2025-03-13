# InterviewPrep
Note system for backend

Express Framework with MVC was used because of reliability and scalability. Organization done with MVC to keep file management to a minimum. 

Dependencies:
        "bcryptjs": "^3.0.2",
        "body-parser": "^1.20.3",
        "cors": "^2.8.5",
        "dotenv": "^16.4.7",
        "express": "^4.21.2",
        "pg": "^8.14.0",
        "sequelize": "^6.37.6"

DevDependencies:

        "nodemon": "^3.1.9"
      


Route, Controller and Model created in the Develop branch.
use /api route to get to the api and
use endpoints to GET, POST, DELETE AND PUT notes or user




        ****MODEL****
Note:
Title: title of the note
Content: content of the note
userId: userId of the user who posted the note
id: count of number of notes

User:
Username: Used to login and check credentials
Email: Used to recover account
Password: used to check credentials and login

       ****CONTROLLER**** 
Methods used to GET, POST, PUT, DELETE notes and users

          ****ROUTE****
Require route on the localhost port
