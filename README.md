### NFL Rushing Table Demo 👶🏽

## To get started

### Install Node Modules

`npm install` or `yarn install`

### Add Material-UI

`npm install @material-ui/core @material-ui/icons`

### If Changing Scripts:

Step 1
`npm uninstall -D react-scripts`

Step 2
`npm install react-scripts`

### To Run

We can run our client side application by (The front end portion of the application is a React application) typing:
`npm run start:client`

Next, let's get the back end of our application running. In order to run the back end, we will use the server start command available in our `package.json` file.
`npm run start:server`

## Installing MongoDB

```
brew services stop mongodb
brew uninstall mongodb

brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

https://github.com/mongodb/homebrew-brew

## Connecting To A Database

`npm install mongoose`

## To Do

(In no particular order)

- Clean up warnings
- Add tests
- Fix build - Seems to keep pointing to hackeryou links
- Deploy
- Add top most ranking player (sort players by rank and output first player)
- Table | Display 15 players at a time. If list exceeds 15 players then "See more rushing stats" link should display so that you can click for more players. Or implement auto scroll on load more items.
- Table | The user should be able to sort the players by Total Rushing Yards, Longest Rush and Total Rushing Touchdowns
- Table | The user should be able to filter by the player's name
- Table | The user should be able to download the sorted/filtered data as a CSV
- Create a card that display's card format of player's stats when player is clicked on.
