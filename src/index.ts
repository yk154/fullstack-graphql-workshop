import { GraphQLServer } from 'graphql-yoga'
import songs from "./data/songs"

const resolvers = {
  Query: {
    songs(parent, args, ctx, info) {
      if(args.first) {
        return songs.slice(0, args.first)
      }
      return songs;
    },
 

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
