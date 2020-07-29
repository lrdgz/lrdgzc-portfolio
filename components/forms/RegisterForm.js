import React from "react";
import { useForm } from "react-hook-form";


const RegisterForm = ({ onSubmit }) => {

    // const [ form, setForm ] = useState({});

    // const handleChange = ( e ) => {
    //     const { name, value } = e.target;
    //     setForm({
    //         ...form,
    //         [name] : value
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     onSubmit(form);
    // };

    const { register, handleSubmit } = useForm();

    return (
        <>
            <form>
                <div className="form-group">
                    <label htmlFor="avatar">Avatar</label>
                    <input
                        ref={register}
                        name="avatar"
                        type="text"
                        className="form-control"
                        id="avatar" />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                        ref={register}
                        name="username"
                        type="text"
                        className="form-control"
                        id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        ref={register}
                        name="email"
                        type="text"
                        className="form-control"
                        id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        ref={register}
                        name="password"
                        type="password"
                        className="form-control"
                        id="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="passwordConfirmation">Password Confirmation</label>
                    <input
                        ref={register}
                        name="passwordConfirmation"
                        type="password"
                        className="form-control"
                        id="passwordConfirmation" />
                </div>
                <button
                    onClick={handleSubmit(onSubmit)}
                    type="button"
                    className="btn btn-main bg-blue py-2 ttu">Submit</button>
            </form>
        </>
    );
};


export default RegisterForm;