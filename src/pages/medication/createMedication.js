import React from "react";
import BreadCrumb from "../../components/breadCrumbs";
import Footer from "../../components/footer";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/navbar";
import { url,post } from "../../components/requests"; 
import { withNavigation } from '../../components/navigationHooks';

 const URL = url+'/store-medication';

 class CreateMedicationPage extends React.Component{

  
    constructor(props){
         super(props);
         this.state =  { 
                  userId : '',
                  name : '',
                  datePrescribed : '',
                  frequency : 0,
                  dailyDosage : 0,
                  pharmacy : { name : '' , address : ''}
            
            
         };

   } 

   componentDidMount(){
         const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
            const foundUser = JSON.parse(loggedInUser);
            this.setState({userId : foundUser._id});      
        }
    } 
   

   submitHandler = (e) => {
      e.preventDefault();
      console.log(this.state.name);
      var userId = this.state.userId;
      var name = this.state.name;
      var datePrescribed = this.state.datePrescribed;
      var frequency = this.state.frequency;
      var dailyDosage = this.state.dailyDosage; 

      var medication = {
         userId : userId,  
         name : name,
         datePrescribed : datePrescribed,
         frequency : frequency,
         dailyDosage : dailyDosage,
         pharmacy : {}
      }  

      
     post(URL,medication).then(res =>{
        if(res.status === 'success'){
            this.props.navigate('/my-medication');
        }

        
        console.log(res);
     }).catch(err=>{
        if (err) throw new Error(err);
        console.log(err);
     })

      
   }

   render(){ 
      const parentPageTitle = 'My Medication';
      const parentPageLink = '/my-medication'; 
       const currentPage = 'Create Medication';
      return(
       <>
       <NavBar></NavBar>
            <div className="container-fluid page-body-wrapper">
                <SideBar></SideBar>
                <div className="main-panel"> 
                    <div className="content-wrapper"> 
                    <BreadCrumb parentPageLink={ parentPageLink} parentPageTitle={parentPageTitle} currentPage= {currentPage} ></BreadCrumb>
                        <div className="row">
                           <div className="col-12 grid-margin stretch-card"> 
                              <div className="card">
                                 <div className="card-body"> 
                                    <form onSubmit={this.submitHandler}>
                                       <div className="form-group">
                                          <label htmlFor="name">Name</label>
                                             <input type="text" name="name" 
                                             className="form-control" 
                                             id="name" 
                                             placeholder="Name"
                                             onChange={ (e) => this.setState({ name : e.target.value })}/>
                                       </div>
                                       <div className="form-group">
                                          <label htmlFor="datePrescribed">Date Prescibed</label>
                                             <input type="date" name="datePrescribed" 
                                             className="form-control" 
                                             id="datePrescribed" 
                                             placeholder=""
                                             onChange={ (e) => this.setState({ datePrescribed : e.target.value })}/>
                                       </div>
                                       <div className="form-group">
                                          <label htmlFor="frequency">Daily Frequency</label>
                                             <input type="number" name="frequency" 
                                             className="form-control" 
                                             id="frequency" 
                                             placeholder=""
                                             onChange={ (e) => this.setState({ frequency : e.target.value })}/>
                                       </div>
                                         <div className="form-group">
                                          <label htmlFor="dailyDosage">Daily Dosage</label>
                                             <input type="number" name="dailyDosage" 
                                             className="form-control" 
                                             id="dailyDosage" 
                                             placeholder=""
                                             onChange={ (e) => this.setState({ dailyDosage : e.target.value })}/>
                                       </div>
                                          <button type="submit" className="btn btn-outline-success">Save</button>
                                    </form>
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

 export default withNavigation(CreateMedicationPage);