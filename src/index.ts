import { GraphQLServer } from 'graphql-yoga'
import songs from "./data/songs"
import playlists from "./data/playlists"

const resolvers = {
  Query: {
    songs(parent, args, ctx, info) {
      return songs
    },
    playlists(parent, args, ctx, info) {
      return playlists
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
