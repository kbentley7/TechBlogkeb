# TechBlogkeb


# Table Of Contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Questions/contact](#questions)
## Technologies
Project is created with 
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Sequelize](https://www.npmjs.com/package/sequelize)
* [MySQL2](https://www.npmjs.com/package/mysql2)
* [Express](https://www.npmjs.com/package/express)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
* [Express-Handlebars](https://www.npmjs.com/package/express-handlebars)
* [bcrypt](https://www.npmjs.com/package/bcrypt)

## General Info
This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
 [Link to deployed application](https://techblogkb.herokuapp.com/)
<br>
## Installation
To get started clone this repository using 
<br>
```terminal
git clone git@github.com:kbentley7/TechBlogkeb.git
```
Both Node.js and MySQL must be installed on your computer.

Install dependencies 
```terminal
npm init --y
``` 
```terminal
npm install express sequelize mysql2 dotenv bcrypt express-session express-handlebars connect-session-sequelize
```
Open up MySQL shell and input 
```terminal
source db/schema.sql
```
and 
```terminal
use tech_blog
```
Then quit MySQL shell and input the following in your terminal to start running application
```terminal
node server.js
```
Once all that is done, navigate to - http://localhost:3001 to begin!



## Usage
The application is used publish blog posts and comment on other developersâ€™ posts as well.
### Contact-Information
[GitHub](https://github.com/kbentley7)

## Questions/Contact-Information

Questions about this repository? Please contact me at 
[kenmo8466@gmail.com](kenmo8466@gmail.com)



