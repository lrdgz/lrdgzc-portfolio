import withApollo from '@/hoc/withApollo';
import withAuth from '@/hoc/withAuth';

const Secret = () => {


    return (
        <>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <h1 className="page-title">Secret</h1>
                        <p>Secret Page, Only Autheticated users allowed!</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withApollo(withAuth(Secret, ['admin', 'developer']));