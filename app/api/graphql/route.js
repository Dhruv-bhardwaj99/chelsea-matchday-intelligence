import { createSchema, createYoga } from "graphql-yoga";
import { fixtures } from "../../data/fixtures";
import { stadiums } from "@/app/data/stadiums";

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

    type Stadium {
     id: ID!
     name: String!
     club: String!
     city: String!
     capacity: Int!
     surface: String!
     funFact: String! 
    }

    type Query {
      hello: String
      fixtures: [Fixture!]!
      stadiums: [Stadium!]!
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Welcome to Chelsea Matchday Intelligence!",
      fixtures: () => fixtures,
      stadiums: () => stadiums
    },
  },
});

const yoga = createYoga({
  schema,
  graphqlEndpoint: "/api/graphql",
});

export const GET = yoga;
export const POST = yoga;