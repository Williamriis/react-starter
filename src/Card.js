import React, { useState } from "react"
import "./card.css"

export const Card = (props) => {
    const { emoji, header, text, cardBackground, headerBackground, headerTextColor, buttonBackground, buttonText, buttonTextColor } = props
    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        clicked ? setClicked(false) : setClicked(true)
    }
    return (
        <div className={clicked ? "card clicked" : "card"} style={{ backgroundColor: cardBackground }}>
            <section className={clicked ? "card-top clicked" : "card-top"} style={{ backgroundColor: headerBackground }}>
                <h1 className="header" style={{ color: headerTextColor }}>{header}<span className={clicked ? "emoji clicked" : "emoji"}>{emoji}</span></h1>
            </section>
            <section className={clicked ? "bottom-container clicked" : "bottom-container"}>
                <h2 className={clicked ? "card-text clicked" : "card-text"} > {text}</h2>
                <button onClick={handleClick} className="button" style={{ backgroundColor: buttonBackground, color: buttonTextColor }} > {buttonText}</button>
            </section>
            <section className={clicked ? "emoji-container clicked" : "emoji-container"} style={{ backgroundColor: cardBackground }}>
                <span>{emoji}</span>
            </section>
        </div >
    )
}