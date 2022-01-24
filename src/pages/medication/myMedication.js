import React from "react"
import BreadCrumb from "../../components/breadCrumbs";
import Footer from "../../components/footer";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/navbar";
import { Link } from "react-router-dom";
import { url,get } from "../../components/requests";
import Loader from "../../components/Loader";

const URL = url+ '/find-user-medication/'; 

class MyMedicationPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = { userId : '' , medications : []}

    } 

    componentDidMount(){
         const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            //console.log(foundUser);
            this.setState({userId : foundUser._id}); 
            this.getMyMedications(this.state.userId)   
            
        }
    } 

    removeSingleItem = (id) =>{ 
        let removeItem = this.state.medications.filter( (item) => item._id !== id );
        this.setState({ medications : removeItem});
    }

    
    getMyMedications = (userId) =>{ 
        try{  
            setTimeout(() => {
                 let url = URL + this.state.userId; 
                    console.log(url);
                    get(url).then(res =>{
                        //console.log(res);
                        this.setState({medications : res.data});
                    }).catch(err => {
                        console.log(err);
                    });
            },2000)
           
        }catch(err){
            if(err) throw new Error(err);
        }

    }

    render(){
        const parentPageTitle = 'My Health';
        const parentPageLink = '/my-health'; 
        const currentPage = 'Medication';
        if(this.state.medications == null){
            return <Loader></Loader>
        }
        const listItems = this.state.medications.map((item) => 
            <li key={item._id} className="list-group-item ">
                <h5> { item.name}  <button type="button" className="btn btn-sm btn-danger float-right" onClick={ (e) => this.removeSingleItem(item._id) }><i className="bi bi-trash"></i></button> </h5>
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
                        <BreadCrumb parentPageLink={ parentPageLink} parentPageTitle={parentPageTitle} currentPage= {currentPage} ></BreadCrumb>  
                        <div className="row">
                            <div className="col-sm-12 grid-margin">
                               
                                 <Link to="/medication-create" className="btn btn-success" style={{float:"right"}}>Create </Link> 
                            </div>
                        </div>
                         
                        <div className="row"> 
                        <div className="col-sm-12 grid-margin">
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

export default MyMedicationPage;