
import React,{ Component} from "react";
import { useNavigate,useParams } from "react-router-dom";

export const  withNavigation = (Component : Component) => {
  return props => <Component {...props} navigate={useNavigate()} />;
} 

export const withParams = (Component) => {
  return props => <Component {...props} params={useParams()} />;
}