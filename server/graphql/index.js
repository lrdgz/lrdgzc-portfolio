const mongoose = require('mongoose');
const { ApolloServer, gql } = require('apollo-server-express');


//Resolvers
const { 
    portfolioQueries, 
    portfolioMutations,
    userMutations
} = require('./resolvers');


//Types
const { 
    portfolioTypes, 
    userTypes
} = require('./types');

//Grapql Models
const Portfolio = require('./models/Portfolio');
const User = require('./models/User');


exports.createApolloServer = () => {

    //Construct a schema, using GRAPHQL schema language 
    const typeDefs = gql`
        ${portfolioTypes}
        ${userTypes}

        type Query {
            portfolio(id: ID): Portfolio
            portfolios: [Portfolio]
        }

        type Mutation {
            createPortfolio(input: PortfolioInput): Portfolio
            updatePortfolio(id: ID, input: PortfolioInput): Portfolio
            deletePortfolio(id: ID): ID

            signUp(input: SignUpInput): String
            signIn: String
            signOut: String

        }
    `;

    //The root providers a resolver fom each API endpoint
    const resolvers = {
        Query: {
            ...portfolioQueries
        },
        Mutation: {
            ...portfolioMutations,
            ...userMutations
        }
    };

    const apolloServer = new ApolloServer({
        typeDefs, 
        resolvers,
        context: () => ({ 
            models: {
                Portfolio: new Portfolio(mongoose.model('Portfolio')),
                User: new User(mongoose.model('User')),
            }
        })
    });

    return apolloServer;
};