import * as React from "react";
import { FaSearch } from "react-icons/fa";
import bgcar from "../Img/bugatti.jpg";
import "./Header.css";

export default function Header() {
    // let mainText = document.queryCommandValue("h1")

    // window.addEventListener("scroll", function () {
    //     let value= window.scrollY;
    //     console.log("scrollY, value");

    //     if (value > 400) {
    //         mainText.style.animation = "disappear 1s ease-out";
    //     }
    // });

    return (
            <div className="header">
                <div className="bgimg" />
                {/* <img className= "bgcar" src={bgcar} /> */}
                <div className="headerContent">
                    <h1> Pick Your <span> DREAM</span></h1>
                    <form action="https://www.google.com/search" method="get" className="searchBar">
                        <input type="text" placeholder="SEARCH" />
                        <button type="submit"><FaSearch color="white" style={{marginTop: "3px"}}/></button>
                    </form>
                </div>
            </div>

    );
}