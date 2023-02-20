import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  // icon: {
  //   type: String,
  //   required: true,
  //   min: 2,
  //   max: 50,
  // },
  dish: {
    type: String,
    required: true,
    max: 50,
  },
  hunger: {
    type: Number,
    required: true,
    default: 0,
  },
  sanity: {
    type: Number,
    default: 0,
    min: 5,
  },
  health: {
    type: Number,
    default: 0,
  },
  ingredients: {
    type: Array,
    default: [],
  },
  note: String,
});

const Recipe = mongoose.model("Recipe", RecipeSchema);
export default Recipe;
