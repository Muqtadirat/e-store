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
    price: 25,
    alt: "Soft chair",
  },
  {
    id: 2,
    img: "http://localhost:5000/images/lamp.jpg",
    item: "Lamp",
    price: 15,
    alt: "Antique lamp",
  },
  {
    id: 3,
    img: "http://localhost:5000/images/mattress.jpg",
    item: "Mattress",
    price: 43,
    alt: "Air mattress",
  },
  {
    id: 4,
    img: "http://localhost:5000/images/jar.jpg",
    item: "Jar",
    price: 35,
    alt: "Brown jar",
  },
  {
    id: 5,
    img: "http://localhost:5000/images/juicer.jpg",
    item: "Juicer",
    price: 125,
    alt: "Fruit presser for making juice",
  },
  {
    id: 6,
    img: "http://localhost:5000/images/coffee-machine.jpg",
    item: "Coffee Machine",
    price: 62,
    alt: "Coffee machine",
  },
  {
    id: 7,
    img: "http://localhost:5000/images/plant-vase.jpg",
    item: "Plant Vase",
    price: 20,
    alt: "Vase for storing outdoor plants",
  },
  {
    id: 8,
    img: "http://localhost:5000/images/electric-kettle.jpg",
    item: "Electric Kettle",
    price: 55,
    alt: "Stainless steel electric kettle",
  },
];

module.exports = salesRouter;
