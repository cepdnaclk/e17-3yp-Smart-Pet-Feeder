import React from "react";
import { MDBCard, MDBCardHeader, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from 'mdb-react-ui-kit';

const styleObj = {
  fontFamily: "sans-serif",
  fontSize: 14,
  color: "#4a54f1",
  textAlign: "left",

}

const Feedback = ({ index, schedule}) =>{
    return (
        <div style={styleObj}
        
        >
        <MDBCard>
            <MDBCardHeader>{schedule.name}</MDBCardHeader>
            <MDBCardBody>
            <MDBCardTitle>{schedule.email}</MDBCardTitle>
            <MDBCardText>{schedule.feedback}</MDBCardText>
            <MDBBtn href='#'>Reply</MDBBtn>
            <MDBBtn href='#'>Delete</MDBBtn>
            </MDBCardBody>
        </MDBCard>
        
        <h1></h1>
        
      </div>
    );
  }

export default Feedback;