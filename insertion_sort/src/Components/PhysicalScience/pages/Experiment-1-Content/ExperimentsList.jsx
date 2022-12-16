import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function ExperimentsList() {
  return (
    <div className="d-flex flex-wrap justify-content-center gap-2 ExperimentListMain">
      <MDBCard className="bg-primary shadow " style={{width:"15em" ,background:"#7cc6fe",color:"white"}} alignment="center">
        <MDBCardBody>
          <MDBCardTitle className="h4 ">Pandas statistical analysis</MDBCardTitle>
          <MDBCardText className="text-secondary " style={{color:"#e5e7eb"}}>
          find the statistical analysis of a given dataframe.
          </MDBCardText>
          <Link to="/physical-science/Pandas/">
          <MDBBtn color="secondary">GO TO Experiment</MDBBtn>
          </Link>
          
        </MDBCardBody>
      </MDBCard>
     
    </div>
  );
}
