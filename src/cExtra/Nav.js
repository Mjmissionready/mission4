import * as React from "react";
import styled from "styled-components";
import DesignImg from "../Img/DesignThinking.jpg";
import "./NavBar.css";

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="nav__logo">
                <a href="https://www.missionreadyhq.com/">
                    <DesignImg size="18px" />
                </a>
            </div>

            <ul className="nav__menu">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <ul className="nav__icons">
                <li> <a href="https://www.facebook.com/aucklandunlimited"><i className="fa-brands fa-facebook"></i> </a></li>
                <li> <a href="https://twitter.com/InvestAuckland"><i className="fa-brands fa-twitter"></i> </a></li>
            </ul>

            <a href="#" className="nav__toggleBtn">
                <i className="fa-solid fa-bars"></i>
            </a>
        </nav>
    );
}