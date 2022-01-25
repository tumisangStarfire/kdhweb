
import React from "react";
import { useNavigate,useParams } from "react-router-dom";

export const  withNavigation = (Component : React.Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
} 

export const withParams = (Component: React.Component) => {
  return props => <Component {...props} params={useParams()} />;
}