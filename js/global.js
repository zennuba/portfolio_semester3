import { WordRotator } from "./wordRotator.js";

const rotator = new WordRotator(
  document.querySelector(".word-rotator"),
  ["kreativ", "nysgerrig", "systematisk", "analytisk", "idérig", "fleksibel", "dygtig"],
);

rotator.start();