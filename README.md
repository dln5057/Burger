# Eat-The-Burgers App

#### Burger App using Node, Express, Handlebars and our own ORM (Object-relational mapping). It uses the Model–View-Controller (MVC) design pattern, Node and MySQL to query and route data in the app and Handlebars for generating the HTML. 

Link to the Burger App: https://eattheburgers.herokuapp.com/burgers

***

## How the app functions:
  App Uses some CRUD functionality to `CREATE`, `READ`, and `UPDATE` From a created ORM. 

    1. READ function reads all the burgers from MySQL database and displays them with Handlebars.
    2.UPDATE function takes the Burger and Devours it which will hit a Express route `burgers/update` that changes the burger to devoured and re-routes the index page to show the updated list.
    3. CREATE function creates a new burger from the create form. After clicking the "create" button, the Express route `/burgers/create` is hit and the newly created burger is inserted into the MySQL database and displyed with Handlebars. 



***
##Screen Shots of the app

### Here is the Index page of the Burger App. It list all the burgers that were created and stored in the MySQL database.
![Burgers](public/assets/images/ScreenShots/index.JPG)

###Clicking on the "Devour it!" button, will move the burger under the Devoured list. 
![BigMac](public/assets/images/ScreenShots/BigMacDevoured.JPG)

### Simply type which burger you would like to create and click "create"
![South](public/assets/images/ScreenShots/SouthwestBurger1.JPG)

### After creating the burger of your choice, the burger is now displayed and stored in the database.
![SouthWest](public/assets/images/ScreenShots/SouthwestBurger2.JPG)

## Technologies Built with...
- Node.js
- Handlebars - http://handlebarsjs.com/
- MySQL
- Express NPM Package - https://www.npmjs.com/package/express
- mysql NPM Package - https://www.npmjs.com/package/mysql
- body-parser NPM Package - https://www.npmjs.com/package/inquirer
- express-handlbars NPM Package - https://www.npmjs.com/package/express-handlebars
- handlebars NPM Package - https://www.npmjs.com/package/handlebars
