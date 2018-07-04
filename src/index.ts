import { GraphQLServer } from 'graphql-yoga'

const resolvers = {
  Query: {
    songs(parent, args, ctx, info) {
    },
    playlists(parent, args, ctx, info) {
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
