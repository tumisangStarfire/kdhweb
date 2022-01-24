
import React from "react";
import { Link } from 'react-router-dom'
import { url,post } from "../../components/requests";
import ErrorLabel from "../../components/ErrorLabel";
import Loader from "../../components/Loader";
import { withNavigation } from '../../components/navigationHooks';


const URL = url+ '/login'; 

class LoginPage extends React.Component{
    

    constructor(props){
        super(props); 
       
        this.state = { email : '', 
            password : '',  
            message : '' ,
            isRegistered : false, 
            isError : false, 
            isLoading : false,
            user : {}
        }
        
    }  




    handleSubmit = (e) => { 
        e.preventDefault();
        var email = this.state.email;
        var password = this.state.password;
         
       var authCredentials ={ 
            email : email,
            password : password
        }; 
        try {
            if(email && password){
             this.setState({ isLoading : true });
               post(URL, authCredentials).then(res =>{
                 if (res.status !== 'success') { 
                     this.setState({ message : res.message });
                     this.setState({ isLoading : false });
                    
                 }else{
                     this.setState({ isLoading : false });
                     // set the state of the user
                    this.setState({user : res.data});
                    localStorage.setItem('user',JSON.stringify(res.data)) 
                    this.setState({ message :'' });
                   this.props.navigate('/my-health');
                   
                   
                 }
            }).catch(err=>{ 
                this.setState({ isLoading : false });
                if (err) throw new Error(err);
                console.log(err);
            })
        }else{
            this.setState({ isLoading : false });
            this.setState({ message :'Email and Password cannot be empty.' });
        }
        } catch (error) {
            this.setState({ isLoading : false });
            this.setState({ message :'Something went wrong, please try again' });
            console.log(error);
        }
        
    }

    render(){ 
          

        
        return( 
           
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                 <div className="content-wrapper d-flex align-items-center auth">
            <div className="row flex-grow">
                <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                    <h4>Hello! let's get started</h4>
                    <h6 className="font-weight-light">Sign in to continue.</h6>
                     <ErrorLabel message ={ this.state.message }></ErrorLabel>
                    <form className="pt-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="email" 
                         className="form-control form-control-lg"
                         id="email" 
                         placeholder="john@mail.com"
                         onChange={(e) => this.setState({ email : e.target.value })} />
                    </div>
                    <div className="form-group">
                        <input type="password"
                         className="form-control form-control-lg"
                          id="password"
                         placeholder="Password"
                         onChange={(e) => this.setState({ password : e.target.value })}
                         />
                    </div>
                    <div className="mt-3">
                        <button type="submit" 
                        className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" 
                        >{ this.state.isLoading && <Loader></Loader> }  SIGN IN</button>
                    </div>
                   
                    <div className="mt-3">
                        <button type="button" className="btn btn-block btn-facebook auth-form-btn">
                       <i className="bi bi-facebook mr-2"></i>Connect using facebook </button>
                    </div>
                    <div className="text-center mt-4 font-weight-light"> Don't have an account? <Link to="/register" className="text-primary"> Register </Link>
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

 export default withNavigation(LoginPage);
