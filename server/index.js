const express = require('express');
const next = require('next');

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


const data = {
    portfolios: [
        { _id: '32aaasssaa', title: 'Job in RD', company: 'Test', companyWebSite: '', location: '', jobTitle: '', description: '', startDate: '01/01/2014', endDate: '01/01/2015' },
        { _id: '32aaasssaa', title: 'Job in RD', company: 'Test', companyWebSite: '', location: '', jobTitle: '', description: '', startDate: '01/01/2014', endDate: '01/01/2015' },
        { _id: '32aaasssaa', title: 'Job in RD', company: 'Test', companyWebSite: '', location: '', jobTitle: '', description: '', startDate: '01/01/2014', endDate: '01/01/2015' },
        { _id: '32aaasssaa', title: 'Job in RD', company: 'Test', companyWebSite: '', location: '', jobTitle: '', description: '', startDate: '01/01/2014', endDate: '01/01/2015' },
        { _id: '32aaasssaa', title: 'Job in RD', company: 'Test', companyWebSite: '', location: '', jobTitle: '', description: '', startDate: '01/01/2014', endDate: '01/01/2015' },
    ]
}

app.prepare().then(() => {
    const server = express();

    //Construct a schema, using GRAPHQL schema languaje 
    const schema = buildSchema(`
        type Portfolio {
            _id: ID
            title: String
            company: String
            companyWebSite: String
            location: String
            jobTitle: String
            description: String
            startDate: String
            endDate: String
        }

        type Query {
            hello: String
            portfolio: Portfolio
            portfolios: [Portfolio]
        }
    `);

    //The root providers a resolver fom each API endpoint
    const root = {
        hello: () => {
            return 'Hello World'
        },

        portfolio: () => {
            return data.portfolios[0]
        },

        portfolios: () => {
            return data.portfolios
        }
    };

    server.use('/graphql', graphqlHTTP({
        schema,
        rootValue: root,
        graphiql: true
    }));

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});