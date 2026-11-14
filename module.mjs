// @ts-check
import { module } from "@prisma/composer";
import stayoService from "./service.mjs";

export default module("stayo", ({ provision }) => {
  provision(stayoService);
});
