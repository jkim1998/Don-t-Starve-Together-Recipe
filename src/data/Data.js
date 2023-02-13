import React, { useState } from "react";
import Health from "./Health_Meter.png";
import {
  Meats,
  Eggs,
  Asparaguses,
  Cactus_Flesh,
  Cactus_Flower,
  Cave_Bananas,
  Corns,
  Dairy_product,
  Dragon_Fruits,
  Drumstick,
  Fishes,
  ForgetMeLots,
  Frog_Leg,
  Fruit,
  Garlics,
  Honey,
  Ice,
  Kelp_Fronds,
  LeafyMeats,
  Moleworm,
  NakedNostrils,
  Potatoes,
  Ripe_Stone_Fruit,
  RoyalJelly,
  Twigs,
  Watermelon,
  Wobster,
  Butter,
  Cooked_Mussel,
  Limpets,
  Jellyfish,
  Butterfly_Wings,
  Vegetables,
  Barnacle,
  Tallbird_Egg,
  Bone_Shards,
  Onions,
  Glow_Berry,
  Volt_Goat_Horn,
} from ".";
import {
  BaconAndEgg,
  Muffin,
  Barnacle_Linguine,
  Beefy_Greens,
  Bisque,
  Breakfast_Skillet,
  Bunny_Stew,
  California_Roll,
  Caviar,
  Ceviche,
  Coffee,
  Creamy_Potato_Purre,
  Dragonpie,
  Fancy_Spiralled_Tubers,
  Figkabab,
  FigStuffed_Trunk,
  Fishsticks,
  Fist_Full_of_Jam,
  Flower_Salad,
  Froggle_Bunwich,
  Guacamole,
  Honey_Ham,
  Honey_Nuggets,
  Jelly_Salad,
  Jellybeans,
  JellyO_Pop,
  Kabobs,
  Leafy_Meatloaf,
  Lobster_Bisque,
  Lobster_Dinner,
  Meatballs,
  Meaty_Stew,
  Melonsicle,
  Milkmade_Hat,
  Mushy_Cake,
  Mussel_Bouillabaise,
  Pierogi,
  Plain_Omelette,
  Powdercake,
  Ratatouille,
  Seafood_Gumbo,
  Shark_Fin_Soup,
  Soothing_Tea,
  Spicy_Chili,
  Stuffed_Fish_Heads,
  Surf_27_Turf,
  Taffy,
  Tall_scotch_eggs,
  Turkey_Dinner,
  Volt_Goat_Chaud,
  Puffed_Potato,
  Fish_Cordon_Bleu,
  Glow_Berry_Mousse,
  Bone_Bouillon,
} from ".";
// import * as All from ".";

const FoodIcon = (props) => (
  <div className="flex items-center gap-2">
    <img className="rounded-full w-10 h-10" src={props.icon} alt="food" />
  </div>
);

const IngredientIcon = (props) => (
  <div className="flex items-center w-full gap-2">
    <img
      className="rounded-full w-10 min-h-10"
      src={props.ingredients[0][0]}
      alt="food"
    />
    <p>x {props.ingredients[0][1]}</p>
    {props.ingredients.length > 1 && (
      <>
        <img
          className="rounded-full w-10 h-10"
          src={props.ingredients[1][0]}
          alt="food"
        />
        <p>x {props.ingredients[1][1]}</p>
      </>
    )}
    {props.ingredients.length > 2 && (
      <>
        <img
          className="rounded-full w-10 h-10"
          src={props.ingredients[2][0]}
          alt="food"
        />
        <p>x {props.ingredients[2][1]}</p>
      </>
    )}
    {props.ingredients.length > 3 && (
      <>
        <img
          className="rounded-full w-10 h-10"
          src={props.ingredients[3][0]}
          alt="food"
        />
        <p>x {props.ingredients[3][1]}</p>
      </>
    )}
  </div>
);

export const RecipeColumn = [
  {
    field: "icon",
    headerText: "Icon",
    width: 2,
    template: FoodIcon,
  },
  // {
  //   field: "dish",
  //   headerText: "Dish",
  //   width: 4,
  // },
  {
    field: "ingredients",
    headerText: "Ingredients",
    width: 6,
    template: IngredientIcon,
  },
  {
    field: "note",
    headerText: "Note",
    width: 6,
  },
  {
    field: "hunger",
    headerText: "Hunger",
    width: 4,
  },
  {
    field: "sanity",
    headerText: "Sanity",
    width: 4,
  },
  {
    field: "health",
    headerText: "Health",
    width: 4,
  },
  // {
  //   field: "spoil",
  //   headerText: "Spoils in",
  //   width: 4,
  // },
  // {
  //   field: "cook",
  //   headerText: "Cook Time",
  //   width: 4,
  // },
];

export const RecipeData = [
  {
    icon: Meatballs,
    dish: "Meatballs",
    hunger: 62.5,
    sanity: 5,
    health: 3,
    ingredients: [[Meats, 0.5]],
    note: "No twigs",
  },

  {
    icon: Honey_Ham,
    dish: "Honey Ham",
    hunger: 75,
    sanity: 5,
    health: 30,
    ingredients: [
      [Meats, 1.5],
      [Honey, 1],
    ],
    note: ["No twigs", "Max 1 monster meat"],
  },
  {
    icon: BaconAndEgg,
    dish: "Bacon and Eggs",
    hunger: 75,
    sanity: 5,
    health: 20,
    ingredients: [
      [Meats, 1.5],
      [Eggs, 1.5],
    ],
    note: "No Veggie",
  },
  {
    icon: Pierogi,
    dish: "Pierogi",
    hunger: 37.5,
    sanity: 5,
    health: 40,
    ingredients: [
      [Meats, 0.5],
      [Eggs, 1],
      [Vegetables, 1],
    ],
    note: "No twigs",
  },
  {
    icon: Meaty_Stew,
    dish: "Meaty Stew",
    hunger: 150,
    sanity: 5,
    health: 12,
    ingredients: [[Meats, 3]],
    note: "No twigs, eggs",
  },
  {
    icon: Turkey_Dinner,
    dish: "Turkey Dinner",
    hunger: 75,
    sanity: 5,
    health: 20,
    ingredients: [
      [Drumstick, 2],
      [Meats, 0.5],
    ],
    note: "No " + ["twigs ", "eggs"],
  },
  {
    icon: Beefy_Greens,
    hunger: 75,
    sanity: 5,
    health: 40,
    ingredients: [
      [LeafyMeats, 1],
      [Vegetables, 3],
    ],
    note: "",
  },
  {
    icon: Tall_scotch_eggs,
    hunger: 150,
    sanity: 5,
    health: 60,
    ingredients: [
      [Tallbird_Egg, 1],
      [Vegetables, 1],
    ],
    note: "No Veggie",
  },
  {
    icon: Dragonpie,
    hunger: 75,
    sanity: 5,
    health: 40,
    ingredients: [[Dragonpie, 1]],
    note: "No meat",
  },
  {
    icon: Stuffed_Fish_Heads,
    hunger: 75,
    sanity: 0,
    health: 20,
    ingredients: [
      [Barnacle, 1],
      [Fishes, 1],
    ],
    note: "",
  },
  {
    icon: Plain_Omelette,
    hunger: 50,
    sanity: 5,
    health: 3,
    ingredients: [[Eggs, 3]],
    note: "",
  },
  {
    icon: Muffin,
    hunger: 37.5,
    sanity: 5,
    health: 20,
    ingredients: [
      [Butterfly_Wings, 1],
      [Vegetables, 0.5],
    ],
    note: "No " + ["Meats"],
  },
  {
    icon: Fishsticks,
    hunger: 37.5,
    sanity: 5,
    health: 40,
    ingredients: [
      [Fishes, 0.5],
      [Twigs, 1],
    ],
    note: "Max " + ["Twigs x 1"],
  },
  {
    icon: Fist_Full_of_Jam,
    hunger: 37.5,
    sanity: 5,
    health: 3,
    ingredients: [[Fruit, 0.5]],
    note: "No " + ["Meats ", "Veggie ", "Twigs"],
  },
  {
    icon: Froggle_Bunwich,
    hunger: 37.5,
    sanity: 5,
    health: 20,
    ingredients: [
      [Frog_Leg, 1],
      [Vegetables, 0.5],
    ],
    note: "",
  },
  {
    icon: Honey_Nuggets,
    hunger: 37.5,
    sanity: 5,
    health: 20,
    ingredients: [
      [Meats, 0.5],
      [Honey, 1],
    ],
    note: "Max " + ["Meat x 1.5"],
  },
  {
    icon: Kabobs,
    hunger: 37.5,
    sanity: 5,
    health: 3,
    ingredients: [
      [Meats, 0.5],
      [Twigs, 1],
    ],
    note: "Max " + ["Meat x 1"],
  },
  {
    icon: Breakfast_Skillet,
    hunger: 37.5,
    sanity: 5,
    health: 20,
    ingredients: [
      [Eggs, 1],
      [Vegetables, 1],
    ],
    note: "No " + ["Meats ", "Dairy"],
  },
  {
    icon: Fancy_Spiralled_Tubers,
    hunger: 37.5,
    sanity: 15,
    health: 3,
    ingredients: [
      [Potatoes, 1],
      [Twigs, 1],
    ],
    note: ["No " + ["Meats "], "Max " + ["2 Twigs"]],
  },
  {
    icon: Jelly_Salad,
    hunger: 37.5,
    sanity: 50,
    health: 0,
    ingredients: [
      [LeafyMeats, 2],
      [Honey, 2],
    ],
    note: "",
  },
  {
    icon: Guacamole,
    hunger: 37.5,
    sanity: 0,
    health: 20,
    ingredients: [
      [Cactus_Flesh, 1],
      [Moleworm, 1],
    ],
    note: ["No " + ["Fruits"], " Cactus or Avocado"],
  },
  {
    icon: Spicy_Chili,
    hunger: 37.5,
    sanity: 0,
    health: 20,
    ingredients: [
      [Vegetables, 1.5],
      [Meats, 1.5],
    ],
    note: "",
  },
  {
    icon: California_Roll,
    hunger: 37.5,
    sanity: 10,
    health: 20,
    ingredients: [
      [Kelp_Fronds, 2],
      [Fishes, 1],
    ],
    note: "",
  },
  {
    icon: Surf_27_Turf,
    hunger: 37.5,
    sanity: 33,
    health: 60,
    ingredients: [
      [Meats, 2],
      [Fishes, 1.5],
    ],
    note: "",
  },
  {
    icon: Lobster_Dinner,
    hunger: 37.5,
    sanity: 50,
    health: 60,
    ingredients: [
      [Wobster, 1],
      [Butter, 1],
    ],
    note: "No " + ["Meats ", "Ice"],
  },
  {
    icon: Ratatouille,
    hunger: 25,
    sanity: 5,
    health: 3,
    ingredients: [[Vegetables, 0.5]],
    note: "No " + ["Meats ", "Twigs"],
  },
  {
    icon: Taffy,
    hunger: 26,
    sanity: 15,
    health: -3,
    ingredients: [[Honey, 3]],
    note: "No " + ["Meats"],
  },
  {
    icon: Lobster_Bisque,
    hunger: 25,
    sanity: 10,
    health: 60,
    ingredients: [
      [Wobster, 1],
      [Ice, 1],
    ],
    note: "",
  },
  {
    icon: Bisque,
    hunger: 18.75,
    sanity: 5,
    health: 60,
    ingredients: [
      [Limpets, 3],
      [Ice, 1],
    ],
    note: "",
  },
  {
    icon: Flower_Salad,
    hunger: 12.5,
    sanity: 5,
    health: 40,
    ingredients: [
      [Cactus_Flower, 1],
      [Vegetables, 1.5],
    ],
    note: "No " + ["Fruits ", "Meats ", "Eggs ", "Honey ", "Twigs"],
  },
  {
    icon: Powdercake,
    hunger: 0,
    sanity: 0,
    health: -3,
    ingredients: [
      [Corns, 1],
      [Honey, 1],
      [Twigs, 1],
    ],
    note: "",
  },
  {
    icon: Jellybeans,
    hunger: 0,
    sanity: 5,
    health: "122 in 2min",
    ingredients: [[RoyalJelly, 1]],
    note: "No " + ["Twigs ", "Monster Meats"],
  },
  {
    icon: Soothing_Tea,
    hunger: 0,
    sanity: "15 + 30/min",
    health: 3,
    ingredients: [
      [ForgetMeLots, 1],
      [Honey, 1],
      [Ice, 1],
    ],
    note: "No " + ["Meat ", "Veggie ", "Twigs ", "Eggs ", "Dairy "],
  },
  {
    icon: Bone_Bouillon,
    hunger: 150,
    sanity: 5,
    health: 32,
    ingredients: [
      [Bone_Shards, 2],
      [Onions, 1],
    ],
    note: "No " + ["Twigs"],
  },
  {
    icon: Puffed_Potato,
    hunger: 37.5,
    sanity: 15,
    health: 20,
    ingredients: [
      [Potatoes, 2],
      [Eggs, 1],
    ],
    note: "No " + ["Meats", "Twigs"],
  },
  {
    icon: Volt_Goat_Chaud,
    hunger: 37.5,
    sanity: 10,
    health: 3,
    ingredients: [
      [Volt_Goat_Horn, 1],
      [Honey, 2],
    ],
    note: ["No " + ["Meats"], "Electrical dmg for 5min"],
  },
  {
    icon: Glow_Berry_Mousse,
    hunger: 37.5,
    sanity: 10,
    health: 3,
    ingredients: [
      [Glow_Berry, 1],
      [Fruit, 1],
    ],
    note: ["No " + ["Meats", "Twigs"], "Glow for 2 days"],
  },
  {
    icon: Fish_Cordon_Bleu,
    hunger: 37.5,
    sanity: -10,
    health: 20,
    ingredients: [
      [Frog_Leg, 2],
      [Fishes, 1],
    ],
    note: ["No " + ["Twigs"], "Immune to Wetness for 5min"],
  },
];
