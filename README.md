# Ceng Store
the project is a mock digital video game distribution services originate from Steam and Epic Games Store,
that people can play, rate and comment on games. Add and remove user, disable and enable comment for a game.
## Site
[https://ceng-store.oa.r.appspot.com/](https://ceng-store.oa.r.appspot.com/)
### System
#### Database
MongoDB used for database and it is on MongoDB Atlas

#### Back-end
MongoDB Realm has a API services that can work as backend service and  can be written in JavaScript. All code for this api service is inside "api" folder.

### Front-End
I used React and Redux for front-end. To work with project  locally you need node.js and npm.

```bash
sudo apt update
sudo apt install nodejs npm
```

To run it
```
npm i 
npm start
```
Code hierarcy for the front-end is like below. 
```bash
├───components
│   ├───games
│   ├───home
│   └───user
├───Pages
└───requests
```
* **Pages:** Include three main pages HomePage, GamePage, UserPage
* **components:** Include compoenent for each page seperately 
* **requests:**  Includes communication protocol for API service on Atlas Realm



# Usage
Project  consist of three pages HomePage, GamePage, UserPage.

## HomePage
It the main page when website is opened. User Operations and Game Operations can be handled here.
#### Games Operations
To open Games Operations click green  **games** button.
This opens two parts. Game form and games list. 
In game form you can 
 * add game name ( game names must be unique)
 * genre(to add a genre write it ınput box and click to blue button on the right), 
 * photo URL 
 * other fields(add a field name yo add field field and click to blue button on the right. This will add a field label and input box. Then u can enter the field value.)

Save button will add the new game to games. To see the new game on the list click fetch games button and update games list.
In games list you can see all games on the database. For each game u can disable or enable comment and ratings. Also you can delete a game by clicking delete button.

#### User Operations
To open Games Operations click green  **games** button.
This opens two parts. User form and users list. 
In form form you can 
 * add username name, ( usernames must be unique)

Save button will add the new user to users. To see the new user on the list click fetch users button and update user list.
In user list you can see all users on the database. For each user you can delete a user or login as a user. Login will goto user page for the spesific user.

## UserPage
This page has two parts, user details o the left and games on the right. To see games, click fetch games button.
#### User details 
* **username**
* **Average rate:** average of all ratings given by user with out weight
* **Most Played Game:** Game with highest play time will be displayed.
* **Total Play Time**
* **Comments:** displayes all comments and game of the comment 
#### Game List 
Displayes all games.
For each games there is
* Game name 
* **comment button:** comment button will be disabled if game's enabled property is false (if user has play time is higher than 60 minutes for that game s/he can comment )
* **rate button:** rate button will be disabled if game's enabled property is false.(input has 1-5 range)
* **play button:** play time will be saved in minutes

## GamesPage
To open Games Page click games in navbar. This will open games list.
For each game click game name to open details.
* Every field that is entered on saving game will be displayed
* **rating:** (∑(userPlayTime * userRating))/playTimeOfTheGame 
* Total Play Time
* **Comments**: The order is determined by the play time. i.e. you see the comment of a user
who plays the game most before the one who played less. 


