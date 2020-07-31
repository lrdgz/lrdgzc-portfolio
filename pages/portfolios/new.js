import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';

import PortfolioNewForm from "@/components/forms/PortfolioNewForm";

const PortfolioNew = () => {

    return (
        <>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <h1 className="page-title">Create New Portfolio</h1>
                        <PortfolioNewForm 
                            loading={null}
                            onSubmit={data => console.log(JSON.stringify(data))}/>
                    </div>
                </div>
            </div>
        </>
    );

};


export default withApollo(withAuth(PortfolioNew, ['admin', 'developer']));