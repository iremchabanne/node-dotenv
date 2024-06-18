require("dotenv").config();

const name = process.env.NAME;
const city = process.env.CITY;
const language = process.env.LANGUAGE;

console.log(`I'm ${name}, wilder in ${city}, and I love ${language}`);
