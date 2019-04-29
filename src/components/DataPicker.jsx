import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import MomentUtils from "@date-io/moment";
import * as moment from "moment";
import axios from "axios";

import { TimePicker, MuiPickersUtilsProvider } from "material-ui-pickers";

const Weekly = props => {
    const [mondayStatus, setMondayStatus] = useState(false);
    const [tuesdayStatus, setTuesdayStatus] = useState(false);
    const [wednesdayStatus, setWednesdayStatus] = useState(false);
    const [thursdayStatus, setThursdayStatus] = useState(false);
    const [fridayStatus, setFridayStatus] = useState(false);
    const [saturdayStatus, setSaturdayStatus] = useState(false);
    const [sundayStatus, setSundayStatus] = useState(false);

    const [mondayStart, setMondayStart] = useState(new Date());
    const [tuesdayStart, setTuesdayStart] = useState(new Date());
    const [wednesdayStart, setWednesdayStart] = useState(new Date());
    const [thursdayStart, setThursdayStart] = useState(new Date());
    const [fridayStart, setFridayStart] = useState(new Date());
    const [saturdayStart, setSaturdayStart] = useState(new Date());
    const [sundayStart, setSundayStart] = useState(new Date());

    const [mondayEnd, setMondayEnd] = useState(new Date());
    const [tuesdayEnd, setTuesdayEnd] = useState(new Date());
    const [wednesdayEnd, setWednesdayEnd] = useState(new Date());
    const [thursdayEnd, setThursdayEnd] = useState(new Date());
    const [fridayEnd, setFridayEnd] = useState(new Date());
    const [saturdayEnd, setSaturdayEnd] = useState(new Date());
    const [sundayEnd, setSundayEnd] = useState(new Date());

    const mondayScheduler = () => {
        console.log(
            "monday has been clicked",
            mondayStatus,
            moment(mondayStart).format("HHmm"),
            moment(mondayEnd).format("HHmm")
        );

        if (mondayStatus) {
            axios
                .get(
                    "https://sqs.us-west-1.amazonaws.com/554600188171/slimShadyQueue",
                    {
                        params: {
                            Action: "SendMessage",
                            MessageBody: {
                                operation: "schedule",
                                day: "monday",
                                startTime: moment(mondayStart).format("HHmm"),
                                endTime:  moment(mondayEnd).format("HHmm")
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
        }
    };
    const tuesdayScheduler = () => {
        console.log(
            "tuesday has been clicked",
            moment(tuesdayStart).format("HHmm"),
            moment(tuesdayEnd).format("HHmm")
        );
        if (tuesdayStatus) {
            axios
                .get(
                    "https://sqs.us-west-1.amazonaws.com/554600188171/slimShadyQueue",
                    {
                        params: {
                            Action: "SendMessage",
                            MessageBody: {
                                operation: "schedule",
                                day: "tuesday",
                                startTime: moment(tuesdayStart).format("HHmm"),
                                endTime:  moment(tuesdayEnd).format("HHmm")
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
        }

    };
    const wednesdayScheduler = () => {
        console.log(
            "wednesday has been clicked",
            moment(wednesdayStart).format("HH:mm"),
            moment(wednesdayEnd).format("HH:mm")
        );

        if (wednesdayStatus) {
            axios
                .get(
                    "https://sqs.us-west-1.amazonaws.com/554600188171/slimShadyQueue",
                    {
                        params: {
                            Action: "SendMessage",
                            MessageBody: {
                                operation: "schedule",
                                day: "wednesday",
                                startTime: moment(wednesdayStart).format("HHmm"),
                                endTime:  moment(wednesdayEnd).format("HHmm")
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
        }
    };

    const thursdayScheduler = () => {
        console.log(
            "thursday has been clicked",
            moment(thursdayStart).format("HHmm"),
            moment(thursdayEnd).format("HHmm")
        );
        if (thursdayStatus) {
            axios
                .get(
                    "https://sqs.us-west-1.amazonaws.com/554600188171/slimShadyQueue",
                    {
                        params: {
                            Action: "SendMessage",
                            MessageBody: {
                                operation: "schedule",
                                day: "thursday",
                                startTime: moment(thursdayStart).format("HHmm"),
                                endTime:  moment(thursdayEnd).format("HHmm")
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
        }

    };
    const fridayScheduler = () => {
        console.log(
            "friday has been clicked",
            moment(fridayStart).format("HHmm"),
            moment(fridayEnd).format("HHmm")
        );
        if (fridayStatus) {
            axios
                .get(
                    "https://sqs.us-west-1.amazonaws.com/554600188171/slimShadyQueue",
                    {
                        params: {
                            Action: "SendMessage",
                            MessageBody: {
                                operation: "schedule",
                                day: "friday",
                                startTime: moment(fridayStart).format("HHmm"),
                                endTime:  moment(fridayEnd).format("HHmm")
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
        }
    };
    const saturdayScheduler = () => {
        console.log(
            "saturday has been clicked",
            moment(saturdayStart).format("HHmm"),
            moment(saturdayEnd).format("HHmm")
        );
        if (saturdayStatus) {
            axios
                .get(
                    "https://sqs.us-west-1.amazonaws.com/554600188171/slimShadyQueue",
                    {
                        params: {
                            Action: "SendMessage",
                            MessageBody: {
                                operation: "schedule",
                                day: "saturday",
                                startTime: moment(saturdayStart).format("HHmm"),
                                endTime:  moment(saturdayEnd).format("HHmm")
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
        }
    };
    const sundayScheduler = () => {
        console.log(
            "sunday has been clicked",
            moment(sundayStart).format("HHmm"),
            moment(sundayEnd).format("HHmm")
        );

        if (sundayStatus) {
            axios
                .get(
                    "https://sqs.us-west-1.amazonaws.com/554600188171/slimShadyQueue",
                    {
                        params: {
                            Action: "SendMessage",
                            MessageBody: {
                                operation: "schedule",
                                day: "sunday",
                                startTime: moment(sundayStart).format("HHmm"),
                                endTime:  moment(sundayEnd).format("HHmm")
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
        }
    };

    return (
        <AddDetailsWrapper>
            <MuiPickersUtilsProvider utils={MomentUtils}>
                <ul>
                    <li>
                        <RoundButton
                            status={mondayStatus}
                            onClick={() => setMondayStatus(!mondayStatus)}
                            label={"Monday"}
                        >
                            Monday
                        </RoundButton>
                    </li>
                    <li>Monday </li>
                    <li>
                        <TimePicker
                            id="monday"
                            value={mondayStart}
                            onChange={setMondayStart}
                        />
                    </li>
                    <li>
                        <TimePicker value={mondayEnd} onChange={setMondayEnd} />
                    </li>
                    <li
                        style={{ fontWeight: "700" }}
                        onClick={() => mondayScheduler()}
                    >
                        ->
                    </li>

                    <li>
                        <RoundButton
                            status={tuesdayStatus}
                            onClick={() => setTuesdayStatus(!tuesdayStatus)}
                            label={"Tuesday"}
                        >
                            Tuesday
                        </RoundButton>
                    </li>
                    <li>Tuesday</li>
                    <li>
                        <TimePicker
                            id="TuesdayStart"
                            value={tuesdayStart}
                            onChange={setTuesdayStart}
                        />
                    </li>
                    <li>
                        <TimePicker
                            id="TuesdayEnd"
                            value={tuesdayEnd}
                            onChange={setTuesdayEnd}
                        />
                    </li>
                    <li
                        style={{ fontWeight: "700" }}
                        onClick={() => tuesdayScheduler()}
                    >
                        ->
                    </li>

                    <li>
                        <RoundButton
                            status={wednesdayStatus}
                            onClick={() => setWednesdayStatus(!wednesdayStatus)}
                            label={"Wednesday"}
                        >
                            Wednesday
                        </RoundButton>
                    </li>
                    <li>Wednesday </li>
                    <li>
                        <TimePicker
                            id="WednesdayStart"
                            value={wednesdayStart}
                            onChange={setWednesdayStart}
                        />
                    </li>
                    <li>
                        <TimePicker
                            id="WednesdayEnd"
                            value={wednesdayEnd}
                            onChange={setWednesdayEnd}
                        />
                    </li>
                    <li
                        style={{ fontWeight: "700" }}
                        onClick={() => wednesdayScheduler()}
                    >
                        ->
                    </li>

                    <li>
                        <RoundButton
                            status={thursdayStatus}
                            onClick={() => setThursdayStatus(!thursdayStatus)}
                            label={"Thursday"}
                        >
                            Thursday
                        </RoundButton>
                    </li>
                    <li>Thursday</li>
                    <li>
                        <TimePicker
                            id="ThursdayStart"
                            value={thursdayStart}
                            onChange={setThursdayStart}
                        />
                    </li>
                    <li>
                        <TimePicker
                            id="ThursdayEnd"
                            value={thursdayEnd}
                            onChange={setThursdayEnd}
                        />
                    </li>
                    <li
                        style={{ fontWeight: "700" }}
                        onClick={() => thursdayScheduler()}
                    >
                        ->
                    </li>

                    <li>
                        <RoundButton
                            status={fridayStatus}
                            onClick={() => setFridayStatus(!fridayStatus)}
                            label={"Friday"}
                        >
                            Friday
                        </RoundButton>
                    </li>
                    <li>Friday</li>
                    <li>
                        <TimePicker
                            id="FridayStart"
                            value={fridayStart}
                            onChange={setFridayStart}
                        />
                    </li>
                    <li>
                        <TimePicker
                            id="FridayEnd"
                            value={fridayEnd}
                            onChange={setFridayEnd}
                        />
                    </li>
                    <li
                        style={{ fontWeight: "700" }}
                        onClick={() => fridayScheduler()}
                    >
                        ->
                    </li>

                    <li>
                        <RoundButton
                            status={saturdayStatus}
                            onClick={() => setSaturdayStatus(!saturdayStatus)}
                            label={"Saturday"}
                        >
                            Saturday
                        </RoundButton>
                    </li>
                    <li>Saturday</li>
                    <li>
                        <TimePicker
                            id="SaturdayStart"
                            value={saturdayStart}
                            onChange={setSaturdayStart}
                        />
                    </li>
                    <li>
                        <TimePicker
                            id="SaturdayEnd"
                            value={saturdayEnd}
                            onChange={setSaturdayEnd}
                        />
                    </li>
                    <li
                        style={{ fontWeight: "700" }}
                        onClick={() => saturdayScheduler()}
                    >
                        ->
                    </li>

                    <li>
                        <RoundButton
                            status={sundayStatus}
                            onClick={() => setSundayStatus(!sundayStatus)}
                            label={"Sunday"}
                        >
                            Sunday
                        </RoundButton>
                    </li>
                    <li>Sunday</li>
                    <li>
                        <TimePicker
                            id="SundayStart"
                            value={sundayStart}
                            onChange={setSundayStart}
                        />
                    </li>
                    <li>
                        <TimePicker
                            id="SundayEnd"
                            value={sundayEnd}
                            onChange={setSundayEnd}
                        />
                    </li>
                    <li
                        style={{ fontWeight: "700" }}
                        onClick={() => sundayScheduler()}
                    >
                        ->
                    </li>
                </ul>
            </MuiPickersUtilsProvider>
        </AddDetailsWrapper>
    );
};
export default withRouter(Weekly);

const RoundButton = styled.button`
    background: ${props => (props.status === true ? "#2196F3" : "#c5d8d3")};
    text-align: center;
    width: 35px;
    height: 35px;
    border-radius: 100%;
    border: 2px solid #f8f8f8;

    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
    color: #ffffff;
    font-weight: lighter;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    transition-duration: 0.4s;
    position: relative;

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

    @media screen and (min-width: 992px) {
        width: 60px;
        height: 60px;
        font-size: 0.6rem;
        font-weight: normal;
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
        grid-template-columns: 1fr 1fr 1fr 1fr 0.5fr;
        grid-gap: 1rem;
        height: 100%;
        justify-items: center;
        align-items: center;
    }
`;
