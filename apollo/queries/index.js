import { gql } from 'apollo-boost';

export const GET_PORTFOLIO = gql`
    query Portfolio ($id: ID){
        portfolio (id: $id) { 
            _id,
            title,
            company,
            companyWebSite,
            location,
            jobTitle,
            description,
            startDate,
            endDate
        }
    }
`;

export const GET_PORTFOLIOS = gql`
    query Portfolios { 
        portfolios { 
            _id, 
            title, 
            company, 
            companyWebSite, 
            location, 
            jobTitle, 
            description,
            startDate,
            endDate
        } 
    }
`;

export const CREATE_PORTFOLIO = gql`
    mutation createPortfolio {
        createPortfolio(input: { 
            title: "aa", 
            company: "aa", 
            companyWebSite: "aa", 
            location: "aa", 
            jobTitle: "aa", 
            description: "aa",
            startDate: "aa",
            endDate: "aa"
        }){
            _id, 
            title, 
            company, 
            companyWebSite, 
            location, 
            jobTitle, 
            description,
            startDate,
            endDate
        }
    }`;