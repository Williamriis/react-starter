import React from 'react'
import { Card } from "./Card"
import "./app.css"

export const App = () => {
  const lemon = {
    emoji: "🍋",
    header: "Lemon",
    text: "This is a really tasty fruit.",
    cardBackground: "#CFFFE2",
    headerBackground: "#8CFFBA",
    headerTextColor: "#166F39",
    buttonBackground: "#FCED84",
    buttonTextColor: "black",
    buttonText: "ORDER NOW"

  }
  const dog = {
    emoji: "🐶",
    header: "Doggy",
    text: "Come by and adopt a cute dog.",
    cardBackground: "#FFE086",
    headerBackground: "#EEB200",
    headerTextColor: "#502F7E",
    buttonBackground: "white",
    buttonTextColor: "#502F7E",
    buttonText: "ADOPT ME"
  }

  const rocket = {
    emoji: "🚀",
    header: "Rocket",
    text: "Join us in outer space!",
    cardBackground: "#C2DCE9",
    headerBackground: "#A6CFE2",
    headerTextColor: "black",
    buttonBackground: "black",
    buttonTextColor: "#FFD600",
    buttonText: "BOOK SEAT"
  }

  const objects = [lemon, dog, rocket]
  return (
    objects.map((object) => {
      return <Card {...object} />
    })

  )
}
