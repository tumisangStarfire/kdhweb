import React  from "react";
import SideBar  from "../components/sidebar";
import Footer from '../components/footer';
import NavBar from '../components/navbar';
import { Link } from 'react-router-dom';
import { url,get } from "../components/requests";
import Loader from "../components/Loader";

const URL = url+ '/find-user-medication/'; 

 class DashboardPage extends React.Component{

    constructor(props){
        super(props);
        this.state = { user : {}, medications : [] };

    }  


    componentDidMount(){
        setTimeout(()=>{
            const loggedInUser = localStorage.getItem('user');
            if (loggedInUser) {
                const foundUser = JSON.parse(loggedInUser);
                this.setState({user : foundUser});
                let user =  this.state.user;
                if(user != null ){
                   
                    this.getMyMedications(this.state.user._id)
                } 
                
                
            }

        },2000)
         
    } 


    
    getMyMedications = (userId) =>{ 
            try{  
                
                    let url = URL + userId; 
                    console.log(url)
                    get(url).then(res =>{
                        //console.log(res);
                        this.setState({medications : res.data});
                    }).catch(err => {
                        console.log(err);
                    });
                 
            }catch(err){
                if(err) throw new Error(err);
            }

       

    }
    
    render(){  
      //console.log(this.state.user);
      const placeHolderImage = "https://assets.newglue.com/assets/avatar_placeholder-c4a9963ad86c68649100b476add586667aaaf4672a3dbfd6abf0e7338f4f5337.jpg";
      if(this.state.medications == null){
            return <Loader></Loader>
        }
        const listItems = this.state.medications.map((item) => 
            <li key={item._id} className="list-group-item ">
                <h5> { item.name}</h5>
                <p>Date Prescribed :  <strong>{ item.datePrescribed}</strong> </p>
                <p>Daily Dosage(s) : <strong>{ item.dailyDosage} Pill</strong> </p>
                <p>Frequency:  <strong>{ item.dailyDosage}</strong> times a day.</p>
            </li>
        );  
      return(
          <>  
          <NavBar></NavBar>
            <div className="container-fluid page-body-wrapper">
                <SideBar></SideBar>
                <div className="main-panel"> 
                    <div className="content-wrapper"> 
                     <div className="row quick-action-toolbar">
                        <div className="col-md-12 grid-margin">
                            <div className="card">
                            <div className="card-header d-block d-md-flex">
                                <h5 className="mb-0">Quick Actions</h5>
                                <p className="ml-auto mb-0 text-dark">How are you feeling today ? <i className="bi bi-lightbulb text text-warning"></i> </p>
                            </div>
                            <div className="d-md-flex row m-0 quick-action-btns" role="group" aria-label="Quick action buttons">
                                <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                <Link to="/my-medication" className="btn px-0"> <i className="bi bi-bag"></i>  My Medication</Link>
                                </div>
                                <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                <button type="button" className="btn px-0"> <i className="bi bi-receipt-cutoff"></i> Record Expense</button>
                                </div>
                                <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                <button type="button" className="btn px-0"> <i className="bi bi-info-circle"></i>  Notifications</button>
                                </div>
                                <div className="col-sm-6 col-md-3 p-3 text-center btn-wrapper">
                                <button type="button" className="btn px-0"> <i className="bi bi-calendar-date"></i>  Health Appointments</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div> 
                     <div className="row">
                         <div className="col-md-4 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <img className="card-img" src={placeHolderImage} alt="user avatar"/>
                                </div>
                            </div>
                         </div>
                         <div className="col-md-8 grid-margin stretch-card">
                             <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">FULLNAMES</h6>
                                        </div>
                                        <div className="col-sm-9 text-dark">
                                               Tumisang Mogotsi     
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">AGE</h6>
                                        </div>
                                        <div className="col-sm-9 text-dark">
                                               25    
                                        </div>
                                    </div>
                                    <hr></hr>
                                     <div className="row ">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">GENDER</h6>
                                        </div>
                                        <div className="col-sm-9 text-dark">
                                               <i className="bi bi-gender-male text-primary"></i> Male   
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row ">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">NATIONALITY</h6>
                                        </div>
                                        <div className="col-sm-9 text-dark">
                                               <i className="bi bi-gender-male text-primary"></i> Botswana   
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div className="row text-center">
                                        <div className="col-sm-4">
                                            <h6>Weight 70kg <i className="fas fa-weight-hanging"></i> </h6>
                                        </div>
                                        <div className="col-sm-4">
                                            <h6>Height 1.5cm <i className="fas fa-male"></i> </h6>
                                        </div>
                                        <div className="col-sm-4">
                                                <h6>BMI 45 <i className="fas fa-balance-scale"></i> </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>

                         </div>
                     </div> 
                     <div className="row"> 
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5>Current Medication</h5>
                                </div>
                                <div className="card-body">
                                    <ul className="list-group">
                                        { listItems }

                                    </ul>
                                </div>

                            </div>
                        </div>
                     </div>
                    
                    </div>
                    <Footer></Footer>
                </div>
            </div>
          </>
       );
    }
 }


 export default DashboardPage;