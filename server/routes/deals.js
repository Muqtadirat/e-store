const express = require("express");
const dealsRouter = express.Router();

dealsRouter.get("/", (req, res) => {
  res.json({deals});
});

const deals = [
  {
    id: 1,
    img: "http://localhost:5000/images/wristwatch.jpg",
    item: "Smart Watches",
    discount: "-25",
    alt: "Smartwatch with various features",
  },
  {
    id: 2,
    img: "http://localhost:5000/images/laptop.jpg",
    item: "Laptops",
    discount: "-15",
    alt: "Modern laptop computer",
  },
  {
    id: 3,
    img: "http://localhost:5000/images/camera.png",
    item: "GoPro cameras",
    discount: "-40",
    alt: "Action camera for outdoor adventures",
  },
  {
    id: 4,
    img: "http://localhost:5000/images/gaming-headphone.jpg",
    item: "Gaming Headphones",
    discount: "-25",
    alt: "Headphones designed for gaming",
  },
  {
    id: 5,
    img: "http://localhost:5000/images/camon-phone.jpg",
    item: "Camon",
    discount: "-25",
    alt: "Mobile phone with advanced features",
  },
];

module.exports = dealsRouter
