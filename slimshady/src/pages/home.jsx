import * as React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { PageWrapper } from "../components/Page";
import axios from "axios";


const buttonHandler = () =>{
    console.log("Button Pressed")
    // console.log("environemnt", process.env.QUEUE_NAME);


    axios.get('https://sqs.us-west-1.amazonaws.com/073111986997/mtihunSlimShady',{
        params:{
            Action : "SendMessage",
            MessageBody : "open"

        }
    })
    .then((response)=>{
        console.log("mesasge send, ", response)
    })
    .catch( error => {
        console.log("error", error);
      });
  
}



const AddPage = ({ props }) => {
    return (
        <>
            <BodyWrapper>
                <PageWrapper>
                    <section className="page-content">
                        <AddDetailsWrapper>
                <Button
                label={"Previous Step"}
                onClick={buttonHandler}
                >press</Button>
                        </AddDetailsWrapper>
                    </section>
                </PageWrapper>
            </BodyWrapper>
        </>
    );
};

export default withRouter(AddPage);

const Button = styled.button`
  position: relative;
  background-color: #00e5ff;
  border: none;
  border-radius:10px;
  font-size: 1.2rem;
  color: #FFFFFF;
  padding: 1rem;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;

  &::after {
  content: "";
  background: #6effff;
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px!important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

&:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}


`;

const AddDetailsWrapper = styled.div`
    background: white;
    border: 2px solid #f8f8f8;
    margin-top: 2rem;
    margin-left: 1rem;
    padding: 2rem;
    box-sizing: border-box;
    border-radius: 10px;
    color: #606060;
`;

const BodyWrapper = styled.div`
    padding: 1rem;
    display: grid;
    margin-top: 70px;
    @media screen and (min-width: 992px) {
        margin-top: 0;
        .page-content {
            display: grid;
            grid-template-columns: 1fr minmax(63%, 1fr) 1fr;
        }

        .page-content > h1,
        .page-content > div {
            grid-column: 2/3;
        }
    }
`;
