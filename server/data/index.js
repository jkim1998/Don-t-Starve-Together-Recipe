import mongoose from "mongoose";

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];


export const recipes = [
  {
    // icon: Meatballs,
    dish: "Meatballs",
    hunger: 62.5,
    sanity: 5,
    health: 3,
    // ingredients: [[Meats, 0.5]],
    note: "No twigs",
  },

  {
    // icon: Honey_Ham,
    dish: "Honey Ham",
    hunger: 75,
    sanity: 5,
    health: 30,
    ingredients: [
      // [Meats, 1.5],
      // [Honey, 1],
    ],
    // note: ["No twigs", "Max 1 monster meat"],
  },
];
