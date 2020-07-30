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
            startDate: "2012-12-12T23:59Z",
            endDate: "2012-12-12T23:59Z"
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

export const UPDATE_PORTFOLIO = gql`
    mutation updatePortfolio($id: ID) {
        updatePortfolio(id: $id, input: {
            title: "bb", 
            company: "bb", 
            companyWebSite: "bb", 
            location: "bb", 
            jobTitle: "bb", 
            description: "bb",
            startDate: "2012-12-12T23:59Z",
            endDate: "2012-12-12T23:59Z"
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


export const DELETE_PORTFOLIO = gql`
    mutation deletePortfolio($id: ID){ 
        deletePortfolio(id: $id)
    }`;


//AUTH QUERIES STARTS -------------------------------------------------
export const SIGN_UP = gql`
    mutation SignUp(
        $avatar: String,
        $username: String!,
        $email: String!,
        $password: String!,
        $passwordConfirmation: String!,
    ) {
        signUp (input: {
            avatar: $avatar,
            username: $username,
            email: $email,
            password: $password,
            passwordConfirmation: $passwordConfirmation
        })
    }`;    

export const SIGN_IN = gql`
    mutation SignIn(
        $email: String!
        $password: String!
    ) {
        signIn(input: {
            email: $email
            password: $password
        }) {
            _id
            username
            role
            avatar
        }
    }`;  

export const SIGN_OUT = gql`mutation SignOut { signOut }`;    

export const GET_USER = gql`
    query User{
        user { 
            _id,
            username,
            avatar,
            role
        }
    }`;

//AUTH QUERIES END -------------------------------------------------