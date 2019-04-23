import * as React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { PageWrapper } from "../components/Page";
import axios from "axios";
import Weekly from "../components/DataPicker";
const openHandler = () => {
    console.log("Open Pressed");

    axios
        .get(
            "https://sqs.us-west-1.amazonaws.com/554600188171/slimShadyQueue",
            {
                params: {
                    Action: "SendMessage",
                    MessageBody: {
                        "operaton" : "open",
                    }
                }
            }
        )
        .then(response => {
            console.log("mesasge send, ", response);
        })
        .catch(error => {
            console.log("error", error);
        });
};

const closeHandler = () => {
    console.log("close Pressed");

    axios
        .get(
            "https://sqs.us-west-1.amazonaws.com/554600188171/slimShadyQueue",
            {
                params: {
                    Action: "SendMessage",
                    MessageBody: {
                        "operation" : "close"
                    }
                }
            }
        )
        .then(response => {
            console.log("mesasge send, ", response);
        })
        .catch(error => {
            console.log("error", error);
        });
};

const autoHandler = () => {
    console.log("Auto Pressed");

    axios
        .get(
            "https://sqs.us-west-1.amazonaws.com/554600188171/slimShadyQueue",
            {
                params: {
                    Action: "SendMessage",
                    MessageBody:{
                        "operation" : "auto"
                    }
                }
            }
        )
        .then(response => {
            console.log("mesasge send, ", response);
        })
        .catch(error => {
            console.log("error", error);
        });
};

const AddPage = ({ props }) => {
    return (
        <>
            <BodyWrapper>
                <PageWrapper>
                    <section className="page-content">
                        <AddDetailsWrapper>
                            <ul>
                                <li>Open Blinds</li>
                                <li>
                                    <Button
                                        label={"Open Shades"}
                                        onClick={openHandler}
                                    >
                                        Open
                                    </Button>
                                </li>
                                <li>Close Blinds</li>
                                <li>
                                    <Button
                                        label={"Close Shades"}
                                        onClick={closeHandler}
                                    >
                                        Close
                                    </Button>
                                </li>
                                <li>Auto Mode</li>
                                <li>
                                    <Button
                                        label={"Auto Shades"}
                                        onClick={autoHandler}
                                    >
                                        Auto
                                    </Button>
                                </li>
                            </ul>
                        </AddDetailsWrapper>
                        <Weekly />
                    </section>
                   
                </PageWrapper>
            </BodyWrapper>
        </>
    );
};

export default withRouter(AddPage);

const Button = styled.button`
    position: relative;
    background-color: #75a7ff;
    border: none;
    border-radius: 20px;
    font-size: 1rem;
    color: #ffffff;
    padding: 1rem;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    width: 80px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    &::after {
        content: "";
        background: #6effff;
        display: block;
        position: absolute;
        padding-top: 300%;
        padding-left: 350%;
        margin-left: -20px !important;
        margin-top: -120%;
        opacity: 0;
        transition: all 0.8s;
    }

    &:active:after {
        padding: 0;
        margin: 0;
        opacity: 1;
        transition: 0s;
    }
`;

const AddDetailsWrapper = styled.div`
    background: white;
    border: 2px solid #f8f8f8;
    margin-top: 1rem;
    margin-left: 1rem;
    padding: 2rem;
    box-sizing: border-box;
    border-radius: 10px;
    color: #606060;
    z-index: 2;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    }
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        height: 100%;
        justify-items: center;
        align-items: center;
    }
`;

const BodyWrapper = styled.div`
    padding: 1rem;
    display: grid;
    
    /* transform: skew(-5deg) rotate(10deg); */
    transform: skew(0deg, 20deg);

    @media screen and (min-width: 992px) {
        margin-top: 1rem;
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
