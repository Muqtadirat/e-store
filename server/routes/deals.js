const express = require("express");
const dealsRouter = express.Router();

dealsRouter.get("/", (req, res) => {
  res.json({deals});
});

const deals = [
  {
    id: 1,
    img: "./assets/camera.png",
    item: "Smart Watches",
    discount: "-25",
    alt: "Smartwatch with various features",
  },
  {
    id: 2,
    img: "./assets/camera.png",
    item: "Laptops",
    discount: "-15",
    alt: "Modern laptop computer",
  },
  {
    id: 3,
    img: "./assets/camera.png",
    item: "GoPro cameras",
    discount: "-40",
    alt: "Action camera for outdoor adventures",
  },
  {
    id: 4,
    img: "./assets/camera.png",
    item: "Gaming Headphones",
    discount: "-25",
    alt: "Headphones designed for gaming",
  },
  {
    id: 5,
    img: "./assets/camera.png",
    item: "Camon",
    discount: "-25",
    alt: "Mobile phone with advanced features",
  },
];

module.exports = dealsRouter
