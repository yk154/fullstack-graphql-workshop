<h1 align="center"><strong> GraphQL Workshop </strong></h1>

<br />

# Getting started

1. Clone the project
```sh
git clone https://github.com/iExperience/fullstack-graphql-workshop.git
```

2. Install dependencies with `Yarn`

*NOTE: IF YOU DO NOT HAVE YARN, INSTALL IT WITH THIS COMMAND: `npm install -g yarn`*  (optional, if you do not use this use `npm`)

```sh
yarn install
```
OR
```sh
npm install
```

3. Run the server which will also open up the playground:

```sh
yarn dev
```

OR

```sh
npm run dev
```

4. Start Coding!


## Create some types!

We're going to be creating a simple graphql server for me to retrieve songs and playlists. Here is what I am expecting:

* Create type definitions for User.
* Create type definitions for Song.
* Create type definitions for Playlist.

Hint: Look at the data in data/* to get an idea of the type definitions to add.

## Query it.

Now that you have your type definitions, let's start interacting with this data. 

* Create a Query that sends me back a list of songs (you can hardcode the array of songs since we do not have a database yet.)

* Create a Query that sends me back a list of playlists.

* Create a Query that sends me back a list of all users.

* Create a Query that returns a random song from the list of songs. Call this query `randomSong`. 

Bonus: make sure you can query the songs of the playlist in the `playlists` Query as well. Do this by mapping over the playlist(s) and populating them with the respective songs.

## Enrich the data

Notice that you have a folder called data with `songs.ts` and `playlist.ts`. Enrich this data by adding more songs and a few more playlists.

## Add some filters to them!

* Modify the songs Query and make it accept an argument called `first` that takes an `Int` and allows me to control how many songs I get back.

* Now do the same for `last`. 

/Hint/: look at the `.slice` on the Array prototype!

* Make the songs query accept an 'id' and give me back only the song with said ID.

* Make the `users` Query filterable by `email`.


# Bonus


![alt text](https://media.giphy.com/media/P0RWkdsRpK7ss/giphy.gif "Bonus Poutine")

## Pokemon API to Graphql

https://pokeapi.co/ is a pokemon API that allows you to query any pokemon, ability and much more via a REST API. Getting a pokemon using pokeapi looks like this:

![alt text](/screens/pokepoke.png "Bonus Poutine")

This should be very familiar to you by now. We are making a GET request using fetch to their API and the last part of our URL is the pokemon we want to get:

```js
fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
.then((raw) => raw.json())
.then(console.log)
```

Go ahead and try it in your browser's console to see for yourself. You should get back information about Squirtle

![alt text](https://media.giphy.com/media/awRutawdcWLJe/giphy.gif "squiirtle")

Now for the mission...

Since by now, you probably know that GraphQL is much more powerful than REST for your front-end, let's expose this same API through our graphql server so that we do not have to deal with REST endpoints later on if we want to use it.

Note: If you'd like more information about the pokeapi, check out their documentation by clicking "docs" on their homepage.

Hints: 

* Create a Query that gets pokemons based on their names

* Remember, you can use `fetch` on the server in your node.js application.

* You will probably put that `fetch` request in your resolver.

* Make sure that you pass through the argument from our graphql Query to the API's endpoint. 

e.g: `https://pokeapi.co/api/v2/pokemon/${ARGUMENT_OF_POKEMON's_NAME_HERE}`

* For your type definition, look at an example response from the poke API. You don't need to type everything, the minimum i want to get back from your API is the id, name, height and base_experience.



