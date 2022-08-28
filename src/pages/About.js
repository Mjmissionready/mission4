import * as React from "react";
import styled from "styled-components";
import car1 from "../Img/tcar1.jpg";
import car2 from "../Img/tcar2.jpg";
import car3 from "../Img/tcar3.jpg";
import "./About.css";

const Container=styled.div`
    width: 100%;
    height: 100vh;
    text-align: center;
`;

export default function About() {
    return (
        <div className="about" id="#about">
            <h1>Go farther with your <span>dream car </span></h1>
            <div className="row">
                <div className="card">
                    <img src={car1} />
                    <h2>MONARO</h2>
                    <p> In the confusing world of classic cars two door coupes trump four door sedans...usually.
                    This, <span>Four Door Monaro</span> sedan version of a model is often cruelly labelled “a parts car” despite its obvious practical advantages.
                    But back in the 70s Holden released its first four door version of the famous Monaro and it proved to be popular, really popular.
                    </p>
                </div>


                <div className="card">
                    <img src={car2} />
                    <h2>STALLION</h2>
                    <p> This <span>Italian Miniature Stallion</span> was sold new in NZ in 1973 and it appears to be a tidy example with an original 61000 miles.
                        However, there are a few interesting details. In the engine bay the heat shield and engine under-tray are missing (common and easy to get), 
                        the thermostat has been removed (not entirely needed in NZ although useful during South Island winters). </p>
                </div>

                <div className="card">
                    <img src={car3} />
                    <h2>VOGUE</h2>
                    <p> The <span>Range Rover</span> is essentially a posher Land Rover favoured by royalty, rich farmers and premier league footballers. It is brilliant off road but most are bought to impress clients and largely reside in expensive inner-city suburbs. As a road car they are powerful and imposing and very comfortable while still retaining the handling of farm hack.
                    </p>
                </div>
            </div>
    </div>
    );
}