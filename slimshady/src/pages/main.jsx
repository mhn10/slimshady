import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./home";
// Create a Main Component

class Main extends Component {
    render() {
        return (
            <BackgroundDiv>
                {/*Render Different Component based on Route*/}

                {/* <SvgModifier xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon fill="white" points="0,100 100,0 100,100"/> */}
                {/* </SvgModifier> */}
                <Route exact path="/" component={Home} />
            </BackgroundDiv>
        );
    }
}

export default Main;

// 2979ff
const BackgroundDiv = styled.div`
    background-image: linear-gradient(-45deg, #69e2ff, #004ecb);
    padding: 300px 0;
    transform: skew(0deg, -20deg);
    margin-top: -350px;
    height: 100px;
    /* padding: 5rem; */
`;

// const SvgModifier = styled.svg`
// z-index:-1;
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 200px;
// `;
