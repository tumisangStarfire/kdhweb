
import React from "react";
import { Link } from 'react-router-dom';
import { apiURL, post } from "../../components/requests";
import ErrorLabel from "../../components/ErrorLabel";



const URL = apiURL + '/register';

class RegisterPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = { email: '', password: '', message: '', isRegistered: false, isError: true }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        var email = this.state.email;
        var password = this.state.password;

        var user = {
            email: email,
            password: password
        };
        // eslint-disable-next-line no-unreachable
        if (email && password) {
            post(URL, user).then(res => {
                console.log(res);
                if (res.status !== 'success') {
                    this.setState({ message: res.message });

                }

                this.setState({ message: '' });
            }).catch(err => {
                if (err) throw new Error(err);
                console.log(err);
            })
        }
    }

    render() {
        return (
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth">
                    <div className="row flex-grow">

                        <div className="col-lg-4 mx-auto">
                            <div className="auth-form-light text-left p-5">
                                <h4>New Here</h4>
                                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps.</h6>
                                <ErrorLabel message={this.state.message}></ErrorLabel>
                                <form className="pt-3" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            className="form-control form-control-lg"
                                            id="emai"
                                            placeholder="johndoe@mail.com"
                                            onChange={(e) => this.setState({ email: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="password"
                                            className="form-control form-control-lg"
                                            id="password"
                                            placeholder="Password"
                                            onChange={(e) => this.setState({ password: e.target.value })}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" >Register</button>
                                    </div>
                                    <div className="text-center mt-4 font-weight-light"> Have an Account <Link to="/login" className="text-primary">Sign In</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default RegisterPage;
