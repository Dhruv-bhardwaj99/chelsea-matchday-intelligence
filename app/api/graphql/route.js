import { createSchema, createYoga } from "graphql-yoga";
import { fixtures } from "../../data/fixtures";

const schema = createSchema({
  typeDefs: `
    type Fixture {
      id: ID!
      opponent: String!
      date: String!
      venue: String!
      competition: String!
      result: String
    }

    type Query {
      hello: String
      fixtures: [Fixture!]!
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Welcome to Chelsea Matchday Intelligence!",
      fixtures: () => fixtures,
    },
  },
});

const yoga = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
});

export const GET = yoga;
export const POST = yoga;