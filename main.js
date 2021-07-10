import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css";
import "./src/styles/elements/base.css";

import CardGame from "./src/components/CardGame";
// Index.js não é especificado por que o js por padrão o procura.

const $root = document.querySelector("#root");

const $htmlCardGame = CardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);