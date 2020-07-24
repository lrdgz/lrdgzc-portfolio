import { useState } from 'react';
import axios from 'axios';
import PortfolioCard from '@/components/portfolio/PortfolioCard';
import Link from 'next/link';


const fetchPortfolios = () => {
    const query = `
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
        }`;

    return axios.post('http://localhost:3000/graphql', { query: query })
        .then(({ data: graph }) => graph.data)
        .then(data => data.portfolios)
}


const graphCreatePortfolio = () => {
    const query = `
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

    return axios.post('http://localhost:3000/graphql', { query: query })
        .then(({ data: graph }) => graph.data)
        .then(data => data.createPortfolio)
}

const graphUpdatePortfolio = (id) => {
    const query = `
        mutation updatePortfolio { 
            updatePortfolio(id: "${id}" , input: { 
                title: "bb", 
                company: "bb", 
                companyWebSite: "bb", 
                location: "bb", 
                jobTitle: "bb", 
                description: "bb",
                startDate: "bb",
                endDate: "bb"
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

    return axios.post('http://localhost:3000/graphql', { query: query })
        .then(({ data: graph }) => graph.data)
        .then(data => data.updatePortfolio)
}


const graphDeletePortfolio = (id) => {
    const query = `
        mutation deletePortfolio { 
            deletePortfolio(id: "${id}")
        }`;

    return axios.post('http://localhost:3000/graphql', { query: query })
        .then(({ data: graph }) => graph.data)
        .then(data => data.deletePortfolio)
}


const Portfolios = ({ data }) => {

    const [ portfolios, setPortfolios ] = useState(data.portfolios); 

    const createPortfolio = async () => {
        const newPortfolio = await graphCreatePortfolio();
        const newPortfolios = [...portfolios, newPortfolio];
        setPortfolios(newPortfolios);
    }

    const updatePortfolio = async (id) => {
        const updatePortfolio = await graphUpdatePortfolio(id);
        const index = portfolios.findIndex(p => p._id === id);
        const newPortfolios = portfolios.slice();
        newPortfolios[index] = updatePortfolio;
        setPortfolios(newPortfolios);
    }

    const deletePortfolio = async (id) => {
        const deletedId = await graphDeletePortfolio(id);
        const index = portfolios.findIndex(p => p._id === deletedId);
        const newPortfolios = portfolios.slice();
        newPortfolios.splice(index, 1);
        setPortfolios(newPortfolios);
    }

    return (
        <>
            <section className="section-title">
                <div className="px-2">
                    <div className="pt-5 pb-4">
                        <h1>Portfolios</h1>
                    </div>
                </div>
                <button 
                    onClick={createPortfolio}
                    className="btn btn-primary"
                >Create Portfolio</button>
            </section>

            <section className="pb-5">
                <div className="row">
                   { 
                        portfolios.map(portfolio => 
                            <div key={portfolio._id} className="col-md-4"> 
                                <Link 
                                    href='/portfolios/[id]'
                                    as={`/portfolios/${portfolio._id}`}> 
                                    <a className="card-link">
                                        <PortfolioCard portfolio={portfolio} /> 
                                    </a>
                                </Link>
                                <button onClick={() => updatePortfolio(portfolio._id)} className="btn btn-warning">Update Portfolio</button>
                                <button onClick={() => deletePortfolio(portfolio._id)} className="btn btn-danger">Delete Portfolio</button>
                            </div>
                        )
                   }
                </div>
            </section>
        </>
    );
};


Portfolios.getInitialProps = async () => {
    console.log('GET INITIAL PROPS PORTFOLIOS');
    const portfolios = await fetchPortfolios();
    return { data: { portfolios } };
}

export default Portfolios;