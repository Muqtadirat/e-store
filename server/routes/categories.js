const express = require("express");
const categoriesRouter = express.Router();

categoriesRouter.get("/", (req, res) => {
  res.json({
    categories,
  });
});

const categories = [
  {
    id: 1,
    title: "Automobiles",
  },
  {
    id: 2,
    title: "Clothes and wear",
  },
  {
    id: 3,
    title: "Home interiors",
  },
  {
    id: 4,
    title: "Tools, equipments",
  },
  {
    id: 5,
    title: "Sports and outdoor",
  },
  {
    id: 6,
    title: "Animal and pets",
  },
  {
    id: 7,
    title: "Machinery tools",
  },
  {
    id: 8,
    title: "More category",
  },
];

module.exports = categoriesRouter;
