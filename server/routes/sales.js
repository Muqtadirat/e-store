const express = require("express");
const salesRouter = express.Router();

salesRouter.get("/", (req, res) => {
  res.json({ sales });
});

const sales = [
  {
    id: 1,
    img: "http://localhost:5000/images/chair.jpg",
    item: "Soft Chair",
    discount: 25,
    alt: "Soft chair",
  },
  {
    id: 2,
    img: "http://localhost:5000/images/lamp.jpg",
    item: "Lamp",
    discount: 15,
    alt: "Antique lamp",
  },
  {
    id: 3,
    img: "http://localhost:5000/images/mattress.jpg",
    item: "Mattress",
    discount: 43,
    alt: "Air mattress",
  },
  {
    id: 4,
    img: "http://localhost:5000/images/jar.jpg",
    item: "Jar",
    discount: 35,
    alt: "Brown jar",
  },
  {
    id: 5,
    img: "http://localhost:5000/images/juicer.jpg",
    item: "Juicer",
    discount: 125,
    alt: "Fruit presser for making juice",
  },
  {
    id: 6,
    img: "http://localhost:5000/images/coffee-machine.jpg",
    item: "Coffee Machine",
    discount: 62,
    alt: "Coffee machine",
  },
  {
    id: 7,
    img: "http://localhost:5000/images/plant-vase.jpg",
    item: "Plant Vase",
    discount: 20,
    alt: "Vase for storing outdoor plants",
  },
  {
    id: 8,
    img: "http://localhost:5000/images/electric-kettle.jpg",
    item: "Electric Kettle",
    discount: 55,
    alt: "Stainless steel electric kettle",
  },
];

module.exports = salesRouter;
