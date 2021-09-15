# Roycheese Bot

Roycheese bot is a discord bot made for my buddy Roycheese. 
Feel free to ⭐ the repository or add it to your server ➡[here](https://discord.com/oauth2/authorize?client_id=747949168571711639&permissions=0&scope=bot)⬅

## Features
Roycheese offers an exhaustive list of features for you to use on your own private server. Some of these features include:

- Playing music
- Creating memes
- Scraping images from the internet
- Swear jar
- a COVID case and vaccination displayer
- And many other cool features

## Installing
Want to install the code on your own machine?

1. Clone the repository
2. Run `npm install`
3. create an `.env` file and add the following variables:
```
BOT_TOKEN=<discordjs token>
MONGO_URI=<mongouri>
```
4. run `nodemon index.js` to start 

## Some Tools and Libraries I Used
- Discord.js for creating the bot
- MongoDB for the database
- Docker for containerizing the application
- Azure for hosting the container on the cloud


## Commands
| Command       | Parameters                 | Description                                             | Type       |
|---------------|----------------------------|---------------------------------------------------------|------------|
| `%play`       | song-name or song-link     | Plays a song. Retrieves music from Spotify and Youtube  | Music      |
| `%stop`       | -                          | Stops the bot from playing music                        | Music      |
| `%skip`       | -                          | Skips the song currently playing                        | Music      |
| `%queue`      | -                          | Lists the queue of all the songs playing                | Music      |
| `%purge`      | amount-of-messages         | Clears a the number of messages specified               | Moderation |
| `%image`      | image-description          | Scrapes an image from google and returns it             | Fun        |
| `%monkey`     | number or leave empty      | Sends a random picture of a monkey                      | Fun        |
| `%spongebob`  | caption                    | Creates a mocking Spongebob meme with caption given     | Fun        |
| `%monkeymeme` | caption                    | Creates Orangutan meme with caption given               | Fun        |
| `%8ball`      | your-question              | Predicts the question given                             | Fun        |
| `%register`   | -                          | Registers you for the swear jar                         | Moderation |
| `%count`      | @user   or leave empty     | Registers the user given for the swear jar              | Moderation |
| `%score`      | -                          | Lists out the entire score board of how much people owe | Moderation |
| `%clearuser`  |  @user                     | Clears user swear jar                                   | Moderation |
