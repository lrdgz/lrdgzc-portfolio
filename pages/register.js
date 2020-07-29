import RegisterForm from "@/components/forms/RegisterForm";
import { Mutation } from 'react-apollo';

import withApollo from '@/hoc/withApollo';

import { SIGN_UP } from '@/apollo/queries';


const Register = () => {
    return (
        <>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <h1 className="page-title">Register</h1>
                        <Mutation mutation={SIGN_UP}>
                            {
                                ( signUpUSer, { data, error } ) => 
                                <>
                                    <RegisterForm onSubmit={registerData => {
                                        signUpUSer({ variables: registerData });
                                    }} />
                                </>
                            }
                        </Mutation>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withApollo(Register);