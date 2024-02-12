const express = require("express");
const dealsRouter = express.Router();

dealsRouter.get("/", (req, res) => {
  res.json({deals});
});

const deals = [
  {
    id: 1,
    img: "/images/deals/wristwatch.jpg",
    item: "Smart Watches",
    discount: "-25",
    alt: "Smartwatch with various features",
  },
  {
    id: 2,
    img: "/images/deals/laptop.jpg",
    item: "Laptops",
    discount: "-15",
    alt: "Modern laptop computer",
  },
  {
    id: 3,
    img: "/images/deals/camera.png",
    item: "GoPro cameras",
    discount: "-40",
    alt: "Action camera for outdoor adventures",
  },
  {
    id: 4,
    img: "/images/deals/headphone.jpg",
    item: "Gaming Headphones",
    discount: "-25",
    alt: "Headphones designed for gaming",
  },
  {
    id: 5,
    img: "/images/deals/camon-phone.jpg",
    item: "Camon",
    discount: "-25",
    alt: "Mobile phone with advanced features",
  },
];

module.exports = dealsRouter
