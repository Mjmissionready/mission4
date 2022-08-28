import * as React from "react";
import logo from "../Img/turners.png";
import { FaToggleOn, FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiOutlineLogin } from "react-icons/ai";
import "./NavBar.css";
// import styled from "styled-components";

export default function NavBar() {
    return (
        <nav className="navbar">
            <>
            <div className="nav__logo">
                <a href="https://www.missionreadyhq.com/">
                    <img src={logo} alt="Logo" size="18px" />
                </a>
            </div>

                <ul className="nav__menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/upload">Upload</a></li>
                    <li><a href="/branches">Branch</a></li>
                </ul>

            <ul className="nav__icons">
                <li> <a href="https://www.facebook.com/turnersNZ"><FaFacebook size={"20px"}/> </a></li>
                <li> <a href="https://www.instagram.com/turners_cars"><AiFillTwitterCircle size={"22px"}/> </a></li>
                {/* <li> <a href=""> LogIn <AiOutlineLogin size={"22px"} style={{ marginLeft: '.5rem' }}/> </a></li> */}
            </ul>

            <a href="#" className="nav__toggleBtn">
                <FaToggleOn />
            </a>
            </>
        </nav>
    );
}