import React from "react";
import { ReactDOM } from "react-dom";
import TrollFace from "../assets/troll-face.svg"

export default function Header() {
    return (
        <header>
            <span className="logo">
                <img src={TrollFace}></img>
                <p className="logo-title">Meme Generator</p>
            </span>
            <p className="course-title">React Course - Project 3</p>
        </header>
    )
}