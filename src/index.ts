import { GraphQLServer } from 'graphql-yoga'
import songs from "./data/songs"
import playlists from "./data/playlists"
import users from "./data/users"
import fetch from "node-fetch"
import { raw } from 'body-parser';

const resolvers = {
  Query: {
    songs(parent, args, ctx, info) {
      if(args.first) {
        return songs.slice(0, args.first)
      }
      if(args.last){
        return songs.slice(songs.length - args.last, songs.length)
      }
      return songs;
    },
		playlists(parent, args, ctx, info) {
			if(args.first) {
        return playlists.slice(0, args.first)
      }
      if(args.last){
        return playlists.slice(playlists.length - args.last, playlists.length)
      }
			return playlists;
		},
		users(parent, args, ctx, info) {
			if(args.first) {
        return users.slice(0, args.first)
      }
      if(args.last){
        return users.slice(users.length - args.last, users.length)
      }
      // for(var i = 0; i <users.length; i++){
      //   if(args.email == users[i].email){
      //     return users[i].email
      //   }
      // }
      if(args.email){
        return [users.find (
          function(user) {
            return user.email == args.email
          }
        )]
      }
			return users;
    },

    pokemon(parent, args, ctx, info){
      if(args.name){
        return fetch('https://pokeapi.co/api/v2/pokemon/squirtle')
        .then((raw) => raw.json())
      }
    },

    randomSongs(parent, args, ctx, info) {
      return songs[Math.floor(Math.random() * songs.length)];
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: req => ({
    ...req
  }),
})
server.start(() => console.log('Server is running on http://localhost:4000'))
