import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"; 
import LoginPage from "../pages/auth/login";
import RegisterPage from "../pages/auth/register";
import ErrorPage from "../pages/errorPage";
import DashboardPage from "../pages/dashboard";
import CreateMedicationPage from "../pages/medication/createMedication";
import MyMedicationPage from "../pages/medication/myMedication";

const ReactRouterSetup = () => { 
     
         return(
                    <BrowserRouter>
                        <Routes>
                            <Route exact path="/" element={<LoginPage></LoginPage>}></Route>
                            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                            <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
                            <Route path="/my-health" element={<DashboardPage></DashboardPage>}></Route>
                            <Route path="/my-medication" element={<MyMedicationPage></MyMedicationPage>}></Route>
                            <Route path="/medication-create" element={<CreateMedicationPage></CreateMedicationPage>}></Route>
                            <Route path="*" exact element={<ErrorPage></ErrorPage>}></Route>
                        </Routes>
                    </BrowserRouter>
                );
       
    
}

export default ReactRouterSetup;