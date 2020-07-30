import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';

import {
    GET_PORTFOLIOS, 
    CREATE_PORTFOLIO, 
    UPDATE_PORTFOLIO, 
    DELETE_PORTFOLIO,

    SIGN_IN,
    SIGN_OUT,
    GET_USER
} from '@/apollo/queries';


//Portfolio Actions Start ------------------------------

export const useGetPortfolios = () => useQuery(GET_PORTFOLIOS);
export const useUpdatePortfolio = () => useMutation(UPDATE_PORTFOLIO);
export const useDeletePortfolio = () => useMutation(DELETE_PORTFOLIO, {
    update(cache, { data : { deletePortfolio } }) {
        const { portfolios } = cache.readQuery({ query : GET_PORTFOLIOS });
        const newPortfolios = portfolios.filter( p => p._id !== deletePortfolio );
        cache.writeQuery({ 
            query: GET_PORTFOLIOS,
            data: { portfolios : newPortfolios }
        });
    }
});
export const useCreatePortfolio = () => useMutation(CREATE_PORTFOLIO, { 
    update(cache, { data : { createPortfolio } }) {
        const { portfolios } = cache.readQuery({ query : GET_PORTFOLIOS });
        cache.writeQuery({ 
            query: GET_PORTFOLIOS,
            data: { portfolios : [...portfolios, createPortfolio ] }
        });
    }
 });

//Portfolio Actions End ------------------------------

 
//Auth Actions Start ------------------------------

export const useSignIn = () => useMutation(SIGN_IN, {
    update(cache, { data: { signIn:signedInUser } }){
        cache.writeQuery({ 
            query: GET_USER,
            data: { user:signedInUser }
        });
    }
});

export const useSignOut = () => useMutation(SIGN_OUT);
export const useLazyGetUser = () => useLazyQuery(GET_USER);
export const useGetUser = () => useQuery(GET_USER);

//Auth Actions End ------------------------------